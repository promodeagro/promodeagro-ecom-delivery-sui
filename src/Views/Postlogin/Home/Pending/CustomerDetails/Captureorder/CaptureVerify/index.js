import React, { useEffect, useState } from "react";
import {
  Badge,
  Box,
  Button,
  Container,
  Header,
  Modal,
  Icon,
  SpaceBetween,
  StatusIndicator,
} from "@cloudscape-design/components";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { fetchRunsheetDetail } from "Redux-Store/Home/homeThunk";
import { completeOrder } from "Redux-Store/CompleteOrder/CompleteOrderThunk";
import prepaidorder from "../../../../../../../Assets/Images/prepaidorder.png";

const CapturedVerified = () => {
  const { runsheetId, orderId, photoUrl } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [comleteOrderModalVisible, setComleteOrderModalVisible] =
    React.useState(false);
  const [amountCollectedModal, setAmountCollectedModal] = React.useState(false);

  const runsheetDetail = useSelector(
    (state) => state.runsheet.runsheetDetail?.data
  );
  const order = runsheetDetail?.orders?.find((o) => o.id === orderId);


  useEffect(() => {
    if (!runsheetDetail || runsheetDetail.id !== runsheetId) {
      const riderId = localStorage.getItem("id")?.replace(/['"]+/g, "");
      if (riderId) {
        dispatch(fetchRunsheetDetail({ riderId, runsheetId }));
      }
    }
  }, [dispatch, runsheetDetail, runsheetId]);

  const handleCompleteOrder = () => {
    // Trigger the completeOrder thunk with the runsheetId, orderId, and photoUrl
    const riderId = localStorage.getItem("id")?.replace(/['"]+/g, "");
    if (riderId) {
      dispatch(
        completeOrder({
          riderId,
          runsheetId,
          orderId,
          photoUrl, // Pass the photoUrl to the completeOrder API
        })
      );
    }
  };


  if (!order) {
    return <Box variant="h3">Order not found</Box>;
  }

  return (
    <div style={{ height: "100vh" }}>
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
              <Badge>{order.paymentDetails?.method}</Badge>
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
            width: "80%",
            position: "absolute",
            right: 30,
            bottom: "16%",
            left: 30,
          }}
        >
          {order.paymentDetails?.method === "cash" ? (
           <Button
           onClick={() =>
             navigate(
               `/app/home/runsheet/${runsheetId}/customer-details/order/${orderId}/captured-verified/${encodeURIComponent(photoUrl)}/payment`
             )
           }
           variant="primary"
           fullWidth
         >
           Collect Amount
         </Button>
         
          ) : order.paymentDetails?.method === "online" ? (
            <Button
              onClick={() => setComleteOrderModalVisible(true)}
              variant="primary"
              fullWidth
            >
              Delivered Order
            </Button>
          ) : null}
        </div>
        <Modal
        onDismiss={() => setComleteOrderModalVisible(false)}
        visible={comleteOrderModalVisible}
      >
        <SpaceBetween direction="vertical" size="l">
          <div className="flex jcc">
            <img
              src={prepaidorder}
              style={{ width: "178px", height: "auto" }}
              alt=""
            />
          </div>
          <Box variant="h3" textAlign="center" color="text-status-success">
            Prepaid Order
          </Box>

          <SpaceBetween size="xs" direction="vertical">
            <div style={{width: '80%', margin: '0 auto'}}>
            <Button
              onClick={() => {
                setAmountCollectedModal(true);
                setComleteOrderModalVisible(false);
              }}
              variant="primary"
              fullWidth
            >
              Complete Order
            </Button>
            </div>
            <button
            className="custom-button"
              fullWidth
              onClick={() => setComleteOrderModalVisible(false)}
            >
              Go Back
            </button>
          </SpaceBetween>
        </SpaceBetween>
      </Modal>
      <Modal
        onDismiss={() => setAmountCollectedModal(false)}
        visible={amountCollectedModal}
      >
        <SpaceBetween direction="vertical" size="m">
          <div className="flex jcc">
            <Icon name="status-positive" variant="success" size="large" c />
          </div>
          <Box textAlign="center" color="text-status-success" variant="p">
            "The amount has been collected."
          </Box>
          <Button
  onClick={() => {
    handleCompleteOrder(); // Complete the order action
    setAmountCollectedModal(false);
    
    // Navigate to the Runsheet page with a flash message
    navigate(`/app/home/runsheet/${runsheetId}`, {
      state: {
        flashBarMessage: "Order delivered successfully!",
        type: "success", // Optional: success, error, info, etc.
      },
    });
  }}
  variant="primary"
  fullWidth
>
  Done
</Button>
        </SpaceBetween>
      </Modal>
      </SpaceBetween>
    </div>
  );
};

export default CapturedVerified;
