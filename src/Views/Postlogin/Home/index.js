import {
  Box,
  Button,
  Container,
  Header,
  SpaceBetween,
} from "@cloudscape-design/components";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PackIcon from "../../../Assets/Images/PackIcon.svg";
import { useDispatch, useSelector } from "react-redux";
import { fetchRunsheet } from "Redux-Store/Home/homeThunk";

const Home = () => {
  const [acceptRunSheet, setAcceptRunSheet] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { runsheet, loading, error } = useSelector((state) => state.runsheet);

  useEffect(() => {
    dispatch(fetchRunsheet());
  }, [dispatch]);

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
          height: "60vh",  // Full height of the viewport
          textAlign: "center",
          fontWeight: 'bold'
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
        <Container
          header={
            <Header
              description={
                <SpaceBetween>
                  <Box variant="h4">
                    <SpaceBetween
                      direction="horizontal"
                      size="xs"
                      alignItems="center"
                    >
                      <img src={PackIcon} alt="" width={20} height={20} />
                      <span style={{ color: "#037F0C", fontSize: "14px" }}>
                        12 Orders
                      </span>
                    </SpaceBetween>
                  </Box>
                </SpaceBetween>
              }
            >
              <span style={{ color: "#0972D3", fontSize: "16px" }}>
                Run Sheet
              </span>
              <span style={{ fontSize: "16px" }}>- 5425</span>
            </Header>
          }
          footer={
            <Box>
              <SpaceBetween direction="vertical" size="s">
                Cash to be Collect : ₹ 12300/-
                {acceptRunSheet ? (
                  <Button
                    onClick={() => navigate("/app/home/runsheet")}
                    fullWidth
                    variant="primary"
                  >
                    Continue
                  </Button>
                ) : (
                  <Button
                    onClick={() => setAcceptRunSheet(true)}
                    fullWidth
                    variant="primary"
                  >
                    Accept Runsheet
                  </Button>
                )}
              </SpaceBetween>
            </Box>
          }
        >
          <SpaceBetween>
            <div className="home_custom_box_wrapper">
              <div className="custom_box">
                <span className="custom_box_label">Pending Order</span>
                <span className="custom_box_value">10</span>
              </div>
              <div style={{ background: "#037F0C" }} className="custom_box">
                <span className="custom_box_label">Delivered Order</span>
                <span className="custom_box_value">06</span>
              </div>
            </div>
          </SpaceBetween>
        </Container>
        {/* <Container
          header={
            <Header
              description={
                <SpaceBetween>
                  <Box variant="h4">
                    <SpaceBetween
                      direction="horizontal"
                      size="xs"
                      alignItems="center"
                    >
                      <img src={PackIcon} alt="" width={20} height={20} />
                      <span style={{ color: "#037F0C", fontSize: "14px" }}>
                        12 Orders
                      </span>
                    </SpaceBetween>
                  </Box>
                </SpaceBetween>
              }
            >
              <span style={{ color: "#0972D3", fontSize: "16px" }}>
                Run Sheet
              </span>
              <span style={{ fontSize: "16px" }}>- 5425</span>
            </Header>
          }
          footer={
            <Box>
              <SpaceBetween direction="vertical" size="s">
                Cash to be Collect : ₹ 12300/-
                {acceptRunSheet ? (
                  <Button
                    onClick={() => navigate("/app/home/runsheet")}
                    fullWidth
                    variant="primary"
                  >
                    Continue
                  </Button>
                ) : (
                  <Button
                    onClick={() => setAcceptRunSheet(true)}
                    fullWidth
                    variant="primary"
                  >
                    Accept Runsheet
                  </Button>
                )}
              </SpaceBetween>
            </Box>
          }
        >
          <SpaceBetween>
            <div className="home_custom_box_wrapper">
              <div className="custom_box">
                <span className="custom_box_label">Pending Order</span>
                <span className="custom_box_value">10</span>
              </div>
              <div style={{ background: "#037F0C" }} className="custom_box">
                <span className="custom_box_label">Delivered Order</span>
                <span className="custom_box_value">06</span>
              </div>
            </div>
          </SpaceBetween>
        </Container> */}
      </SpaceBetween>
    </SpaceBetween>
  );
};

export default Home;
