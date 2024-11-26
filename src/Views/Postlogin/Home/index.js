import {
  Box,
  Button,
  Container,
  Header,
  SpaceBetween,
} from "@cloudscape-design/components";
import React, {  useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PackIcon from "../../../Assets/Images/PackIcon.svg";
import { useDispatch, useSelector } from "react-redux";
import { fetchRunsheet, acceptRunSheetAPI } from "Redux-Store/Home/homeThunk";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { runsheet, loading, error } = useSelector((state) => state.runsheet);

  useEffect(() => {
    dispatch(fetchRunsheet());
  }, [dispatch]);

  const handleAcceptRunSheet = async (runsheetId) => {
    const riderId = localStorage.getItem("id");

    if (!riderId) {
      console.error("Rider ID not found");
      return;
    }
    try {
      await dispatch(acceptRunSheetAPI({ riderId, runsheetId }));
    } catch (err) {
      console.error("Error accepting runsheet:", err);
    }
  };

  if (loading) {
    return <div>Loading runsheet...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!runsheet || runsheet.length === 0) {
    return (
      <SpaceBetween size="m">
        <Header
          variant="h3"
          actions={
            <Button
              iconName="refresh"
              variant="icon"
              onClick={() => window.location.reload()}
            />
          }
        >
          <span className="header_underline">Home</span>
        </Header>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "60vh",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          <span>No runsheet is assigned</span>
        </div>
      </SpaceBetween>
    );
  }

  return (
    <SpaceBetween size="m">
      <Header
        variant="h3"
        actions={
          <Button
            iconName="refresh"
            variant="icon"
            onClick={() => window.location.reload()}
          />
        }
      >
        <span className="header_underline">Home</span>
      </Header>
      <SpaceBetween direction="vertical" size="m">
        {runsheet.map((sheet, index) => {
          const {
            amountCollectable,
            deliveredOrders,
            pendingOrders,
            orders,
            id,
          } = sheet;

          return (
            <Container
              key={index}
              header={
                <Header
                  description={
                    <SpaceBetween>
                      <Box>
                        <SpaceBetween
                          direction="horizontal"
                          size="xs"
                          alignItems="center"
                        >
                          <img src={PackIcon} alt="" width={20} height={20} />
                          <span style={{ color: "#037F0C", fontSize: "14px" }}>
                            {orders} Orders
                          </span>
                        </SpaceBetween>
                      </Box>
                    </SpaceBetween>
                  }
                >
                  <span style={{ color: "#0972D3", fontSize: "16px" }}>
                    Run Sheet
                  </span>
                  <span style={{ fontSize: "16px" }}>- {id}</span>
                </Header>
              }
              footer={
                <Box>
                  <SpaceBetween direction="vertical" size="s">
                    <Box>Cash to be Collected: ₹{amountCollectable}/-</Box>
                    {sheet.status === "active" ? (
                      <div
                        style={{
                          display: "flex",
                          margin: "0 auto",
                          width: "80%",
                        }}
                      >
                        <Button
                          onClick={() => navigate(`/app/home/runsheet/${id}`)}
                          fullWidth
                          variant="primary"
                        >
                          Continue
                        </Button>
                      </div>
                    ) : (
                      <div
                        style={{
                          display: "flex",
                          margin: "0 auto",
                          width: "80%",
                        }}
                      >
                        <Button
                          onClick={() => handleAcceptRunSheet(id)}
                          fullWidth
                          variant="primary"
                        >
                          Accept Runsheet
                        </Button>
                      </div>
                    )}
                  </SpaceBetween>
                </Box>
              }
            >
              <SpaceBetween>
                <div className="home_custom_box_wrapper">
                  <div className="custom_box">
                    <span className="custom_box_label">Pending Orders</span>
                    <span className="custom_box_value">{pendingOrders}</span>
                  </div>
                  <div style={{ background: "#037F0C" }} className="custom_box">
                    <span className="custom_box_label">Delivered Orders</span>
                    <span className="custom_box_value">{deliveredOrders}</span>
                  </div>
                </div>
              </SpaceBetween>
            </Container>
          );
        })}
      </SpaceBetween>
    </SpaceBetween>
  );
};

export default Home;
