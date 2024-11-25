import {
  Badge,
  Box,
  Button,
  Container,
  Header,
  SpaceBetween,
  StatusIndicator,
} from "@cloudscape-design/components";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { fetchRunsheetDetail } from "Redux-Store/Home/homeThunk";

const CapturedVerified = () => {
  const { runsheetId, orderId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const runsheetDetail = useSelector((state) => state.runsheet.runsheetDetail);
  const order = runsheetDetail?.orders?.find((o) => o.id === orderId);

  useEffect(() => {
    if (!runsheetDetail || runsheetDetail.id !== runsheetId) {
      const riderId = localStorage.getItem("id")?.replace(/['"]+/g, "");
      if (riderId) {
        dispatch(fetchRunsheetDetail({ riderId, runsheetId }));
      }
    }
  }, [dispatch, runsheetDetail, runsheetId]);

  if (!order) {
    return <Box variant="h3">Order not found</Box>;
  }

  
  return (
    <SpaceBetween size="m">
      <Header variant="h2">
        <SpaceBetween size="xs" direction="horizontal" alignItems="center">
          <Button
            onClick={() => navigate(-2)}
            iconName="arrow-left"
            variant="icon"
          />
          <span className="header_underline"> Captured Verified </span>
        </SpaceBetween>
      </Header>
      <Container
        header={
          <SpaceBetween alignItems="center" direction="horizontal" size="xs">
            <Box variant="h3">
              <span style={{ color: "#0972D3" }}>{order.customerName}</span>
            </Box>
            {/* <Badge>COD</Badge> */}
          </SpaceBetween>
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
              <p>No contact number available</p>
            )}
          </div>
        }
      >
        {order.address?.address}, {order.address?.zipCode}
      </Container>

      <SpaceBetween size="xs" direction="horizontal" alignItems="center">
        <Box variant="h4">Items list </Box>
        <Box> ({order.items?.length || 0} Items)</Box>
      </SpaceBetween>
      <Container
        header={<Header variant="h4">Order ID : {orderId}</Header>}
        footer={
          <div className="flex jcc">
            <StatusIndicator>Verified!</StatusIndicator>
          </div>
        }
      >
        <SpaceBetween direction="horizontal" size="xs">
          Amount to be Collected:{" "}
          <Box variant="strong">₹ {order.totalPrice}/-</Box>
        </SpaceBetween>
      </Container>
      <div
        style={{
          display: "flex",
          margin: "0 auto",
          width: "70%",
          marginTop: "26%",
        }}
      >
     <Button
  onClick={() =>
    navigate(
      `/app/home/runsheet/${runsheetId}/customer-details/order/${order.id}/captured-verified/payment`
    )
  }
  variant="primary"
  fullWidth
>
  Collect Amount
</Button>

      </div>
    </SpaceBetween>
  );
};

export default CapturedVerified;
