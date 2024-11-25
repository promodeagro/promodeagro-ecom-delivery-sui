import {
  Box,
  Button,
  Container,
  Flashbar,
  Header,
  Icon,
  Modal,
  SpaceBetween,
} from "@cloudscape-design/components";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import blurQR from "../../../../../../../Assets/Images/blurQR.png";
import QR from "../../../../../../../Assets/Images/qr.png";
import upiapps from "../../../../../../../Assets/Images/upiapps.png";
import orderComplete from "../../../../../../../Assets/Images/orderComplete.png";

const Payment = () => {
  const navigate = useNavigate();
  const [isQRGenereted, setIsQRGenereted] = useState(false);
  const [comleteOrderModalVisible, setComleteOrderModalVisible] =
    React.useState(false);
  const [amountCollectedModal, setAmountCollectedModal] = React.useState(false);
  const [items, setItems] = React.useState([
    {
      type: "info",
      content: "Collect Cash ",
      onDismiss: () => setItems([]),
      id: "message_1",
    },
  ]);

  const [timeLeft, setTimeLeft] = useState(120);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  const handleQr = () => {
    setIsRunning(true);
    setIsQRGenereted(true);
  };
  return (
    <>
      <Header>
        <SpaceBetween direction="horizontal" size="xs" alignItems="center">
          <Button
            onClick={() => navigate(-1)}
            iconName="arrow-left"
            variant="icon"
          />
          <span className="header_underline">Payment</span>
        </SpaceBetween>
      </Header>
      <div style={{ marginTop: 18 }}>
        <Container>
          <SpaceBetween direction="vertical" size="xxs">
            <Box textAlign="center" variant="h4">
              Amount to be Collect
            </Box>
            <Box textAlign="center" variant="h3">
              <span style={{ color: "#037F0C" }}>₹ 2980/-</span>
            </Box>
            <div>
              <Flashbar items={items} />
            </div>
          </SpaceBetween>
        </Container>
      </div>
      <div style={{ marginTop: 18 }} className="flex aic jcsb">
        <div className="payment_lines"></div>
        <Box fontSize="16px" variant="h4">
          Qr Code
        </Box>
        <div className="payment_lines"></div>
      </div>
      <Box margin={"xs"} textAlign="center">
        Generate Your QR Code Below
      </Box>
      {isQRGenereted && (
        <div className="flex jcc">
          <Box color="text-status-error" textAlign="center" variant="strong">
            {timeLeft} Seconds left to scan the QR code
          </Box>
        </div>
      )}
      <div className={!isQRGenereted ? "qr_container" : "qr_container_white"}>
        <img src={!isQRGenereted ? blurQR : QR} alt="" />
        <span className="qr_btn">
          {!isQRGenereted && (
            <Button onClick={handleQr} variant="normal">
              Generated QR Code
            </Button>
          )}
        </span>
      </div>
      {isQRGenereted && (
        <Box textAlign="center">Scan QR Code in any UPI app</Box>
      )}

      {isQRGenereted && (
        <div className="upi_img">
          <img src={upiapps} alt="" />
        </div>
      )}
      <div className="flex aic jcsb">
        <div className="payment_lines"></div>
        <Box margin={"m"} fontSize="16px" variant="h4">
          OR
        </Box>
        <div className="payment_lines"></div>
      </div>
      <div style={{display: 'flex', margin: '0 auto', width: '80%'}}>
      <Button
        onClick={() => setComleteOrderModalVisible(true)}
        variant="primary"
        fullWidth
      >
        Collect Cash
      </Button></div>
      <Modal
        onDismiss={() => setComleteOrderModalVisible(false)}
        visible={comleteOrderModalVisible}
      >
        <SpaceBetween direction="vertical" size="l">
          <div className="flex jcc">
            <img
              src={orderComplete}
              style={{ width: "178px", height: "auto" }}
              alt=""
            />
          </div>

          <Box variant="h3" textAlign="center" color="text-status-success">
            Collecting ₹2980/- Cash
          </Box>
          <SpaceBetween size="xs" direction="vertical">
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
            <Button
              fullWidth
              onClick={() => setComleteOrderModalVisible(false)}
            >
              Go Back
            </Button>
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
              setAmountCollectedModal(false);
              navigate("/app/home");
            }}
            variant="primary"
            fullWidth
          >
            Done
          </Button>
        </SpaceBetween>
      </Modal>
    </>
  );
};

export default Payment;
