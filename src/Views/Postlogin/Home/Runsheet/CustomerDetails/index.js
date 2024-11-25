import {
  Badge,
  Box,
  Button,
  Container,
  FormField,
  Header,
  Modal,
  RadioGroup,
  SpaceBetween,
  Table,
  Textarea,
} from "@cloudscape-design/components";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchRunsheetDetail } from "Redux-Store/Home/homeThunk";

const CustomerDetails = () => {
  const { runsheetId, orderId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [reason, setReason] = useState("");
  const [otherIssue, setOtherIssue] = useState("");

  const runsheetDetail = useSelector((state) => state.runsheet.runsheetDetail);
  const order = runsheetDetail?.orders?.find((o) => o.id === orderId);

  useEffect(() => {
    if (!runsheetDetail || runsheetDetail.id !== runsheetId) {
      const riderId = localStorage.getItem("id")?.replace(/['"]+/g, ""); // Retrieve rider ID
      if (riderId) {
        dispatch(fetchRunsheetDetail({ riderId, runsheetId }));
      }
    }
  }, [dispatch, runsheetDetail, runsheetId]);

  if (!order) {
    return <Box variant="h3">Order not found</Box>;
  }


  return (
    <>
      <Header variant="h2">
        <SpaceBetween size="xs" alignItems="center" direction="horizontal">
          <Button
            onClick={() => navigate(-1)}
            variant="icon"
            iconName="arrow-left"
          />
          <span className="header_underline">Customer Details</span>
        </SpaceBetween>
      </Header>
      <div style={{ marginTop: 22 }}>
        <Container
          header={
            <Header>
              <SpaceBetween
                direction="horizontal"
                size="xs"
                alignItems="center"
              >
                <span style={{ color: "#0972D3" }}>{order.customerName}</span>
                <Badge>{order.paymentMethod}</Badge>
              </SpaceBetween>
            </Header>
          }
          footer={
            <div style={{ display: "flex", margin: "0 auto", width: "80%" }}>
              {order.customerNumber ? (
                <a
                  href={`tel:+91${String(order.customerNumber)}`}
                  style={{ width: "100%" }}
                >
                  <Button fullWidth variant="primary" iconName="call">
                    Call
                  </Button>
                </a>
              ) : (
                <p>No contact number available</p> // Show a message if there's no contact number
              )}
            </div>
          }
        >
          {order.address?.address}, {order.address?.zipCode}
        </Container>
      </div>
      <div style={{ marginTop: 10, marginBottom: 12 }}>
        <Header variant="h3">
          <SpaceBetween direction="horizontal" size="xs" alignItems="center">
            Items list <Box variant="p">({order.items?.length} Items)</Box>
          </SpaceBetween>
        </Header>
      </div>
      <Container
        header={
          <>
            <Header variant="h3">Order ID : {order.id}</Header>
            <p style={{ margin: 0 }}>
              Amount to be collected:{" "}
              <span style={{ fontWeight: "bold" }}>₹{order.totalPrice}</span>
            </p>
          </>
        }
      >
        <Table
          columnDefinitions={[
            {
              id: "products",
              header: "Products",
              cell: (item) => (
                <SpaceBetween size="xxs" direction="horizontal">
                  {/* <span>{item.image}</span> */}
                  <span>{item.productName}</span>
                </SpaceBetween>
              ),
            },
            {
              id: "quantity",
              header: "Qty",
              cell: (item) => item.quantity,
            },
            {
              id: "price",
              header: "Price",
              cell: (item) => item.price,
            },
          ]}
          items={order.items} // Dynamically use order items
          variant="embedded"
          stickyHeader={true}
        />
        <div style={{ marginTop: 12 }}>
          <SpaceBetween direction="vertical" size="xs">
            <div style={{ width: "80%", margin: "0 auto", display: "flex" }}>
              <Button
                onClick={() =>
                  navigate(`/app/home/runsheet/${runsheetId}/customer-details/${order.id}/verify-order`)
                }
                fullWidth
                variant="primary"
              >
                Confirm Order
              </Button>
            </div>
            <button onClick={() => setVisible(true)} className="custom-button">
              Cancel
            </button>
          </SpaceBetween>
        </div>
      </Container>
      <Modal
        onDismiss={() => setVisible(false)}
        visible={visible}
        header="Cancel Order"
      >
        <RadioGroup
          onChange={({ detail }) => setReason(detail.value)}
          value={reason}
          items={[
            {
              value: "Requested for reschedule",
              label: "Requested for reschedule",
            },
            { value: "Customer no response", label: "Customer no response" },
            { value: "Incomplete Address", label: "Incomplete Address" },
            { value: "Security Instability", label: "Security Instability" },
            { value: "Heavy Load", label: "Heavy Load" },
            {
              value: "Order rejected by customer",
              label: "Order rejected by customer",
            },
          ]}
        />
        <div style={{ marginTop: 51 }}>
          <FormField label="Notes Other Issues">
            <Textarea
              value={otherIssue}
              onChange={(e) => setOtherIssue(e.detail.value)}
              placeholder="Write Here Issue!"
            />
          </FormField>
        </div>
        <div style={{ marginTop: 25 }}>
          <SpaceBetween direction="vertical" size="xs">
            <Button variant="primary" onClick={() => navigate(-1)} fullWidth>
              OK
            </Button>
            <button
              onClick={() => setVisible(false)}
              fullWidth
              className="custom-button"
            >
              Go back
            </button>
          </SpaceBetween>
        </div>
      </Modal>
    </>
  );
};

export default CustomerDetails;
