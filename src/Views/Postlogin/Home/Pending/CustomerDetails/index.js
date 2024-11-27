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
import { fetchRunsheetDetail, cancelOrderAPI } from "Redux-Store/Home/homeThunk";

const CustomerDetails = () => {
  const { runsheetId, orderId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [reason, setReason] = useState("");
  const [otherIssue, setOtherIssue] = useState("");
  const [loading, setLoading] = useState(false);

  const runsheetDetail = useSelector((state) => state.runsheet.runsheetDetail?.data);
  const order = runsheetDetail?.orders?.find((o) => o.id === orderId);
  console.log('Order ID:', orderId);  // Log to verify the URL parameter
  console.log('Orders:', runsheetDetail?.orders);  // Log to inspect the orders
  
  useEffect(() => {
    console.log('Runsheet Detail:', runsheetDetail); // Log to inspect the structure
    if (!runsheetDetail || runsheetDetail.id !== runsheetId) {
      const riderId = localStorage.getItem("id")?.replace(/['"]+/g, "");
      if (riderId) {
        dispatch(fetchRunsheetDetail({ riderId, runsheetId }));
      }
    }
  }, [dispatch, runsheetDetail, runsheetId]);
  
  

  const handleCancelOrder = async () => {
    if (!reason && !otherIssue) {
      alert("Please select a reason or add a note for cancellation.");
      return;
    }
  
    const id = localStorage.getItem("id")?.replace(/['"]+/g, ""); // Retrieve rider ID as 'id'
  
    if (!runsheetDetail || runsheetDetail.status === "loading") {
      return <Box variant="h3">Loading...</Box>;
    }
    
    if (!order) {
      return <Box variant="h3">Order not found</Box>;
    }
    
  
    const payload = {
      id, // Use 'id' instead of 'riderId'
      runsheetId,
      orderId,
      reason: reason || otherIssue,
    };
  
  
    try {
      setLoading(true);
      await dispatch(cancelOrderAPI(payload)).unwrap();
      setLoading(false);
      navigate(-1); // Navigate back on success
    } catch (error) {
      console.error("Failed to cancel order:", error);
      setLoading(false);
      alert(error.message || "Failed to cancel order. Please try again.");
    }
  };
  
  if (!order) {
    return <Box variant="h3">Order not found</Box>;
  }

  const handleCall = () => {
    const testNumber = '7989786093'; // The test number
    window.location.href = `tel:+91${testNumber}`;
  };
  
  return (
    <>
      {/* Main Content */}
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
      <Button
        fullWidth
        variant="primary"
        iconName="call"
        onClick={handleCall}
      >
        Call
      </Button>
    ) : (
      <p>No contact number available</p>
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
        <SpaceBetween size="m">
          <Table
            columnDefinitions={[
              {
                id: "products",
                header: "Products",
                cell: (item) => (
                  <SpaceBetween size="xxs" direction="horizontal">
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
            items={order.items}
            variant="embedded"
            stickyHeader={true}
          />
          <SpaceBetween direction="vertical" size="xs">
            <div style={{ width: "80%", margin: "0 auto", display: "flex" }}>
              <Button
                onClick={() =>
                  navigate(`/app/home/runsheet/${runsheetId}/order/${order.id}/customer-details/verify-order`)
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
        </SpaceBetween>
      </Container>

      {/* Cancel Order Modal */}
      <Modal
        onDismiss={() => setVisible(false)}
        visible={visible}
        header="Cancel Order"
      >
        <SpaceBetween size="l">
          <RadioGroup
            onChange={({ detail }) => setReason(detail.value)}
            value={reason}
            items={[
              { value: "Requested for reschedule", label: "Requested for reschedule" },
              { value: "Customer no response", label: "Customer no response" },
              { value: "Heavy Rain", label: "Heavy Rain" },
              { value: "Incomplete Address", label: "Incomplete Address" },
              { value: "Security Instability", label: "Security Instability" },
              { value: "Heavy Load", label: "Heavy Load" },
              { value: "Order rejected by customer", label: "Order rejected by customer" },
            ]}
          />
          <FormField label="Notes Other Issues">
            <Textarea
              value={otherIssue}
              onChange={(e) => setOtherIssue(e.detail.value)}
              placeholder="Write Here Issue!"
            />
          </FormField>
          <SpaceBetween size="xs">
          <div style={{display:'flex', margin:'0 auto', width: '80%'}}>
          <Button variant="primary" onClick={handleCancelOrder} fullWidth loading={loading}>
            Ok
          </Button>
          </div>

          <button
            onClick={() => setVisible(false)}
            className="custom-button"
          >
            Go Back
          </button></SpaceBetween>
        </SpaceBetween>
      </Modal>
    </>
  );
};

export default CustomerDetails;
