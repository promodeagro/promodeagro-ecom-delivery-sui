import {
  Badge,
  Box,
  Button,
  Container,
  ContentLayout,
  Header,
  SpaceBetween,
} from "@cloudscape-design/components";
import React from "react";
import { useNavigate } from "react-router-dom";

const Undelivered = () => {
  const navigate = useNavigate();
  return (
    <ContentLayout disableOverlap headerVariant="high-contrast">
      <Header
        variant="h3"
        actions={<Button variant="icon" iconName="refresh" />}
      >
        <SpaceBetween size="xxs" direction="horizontal" alignItems="center">
          <Button
            onClick={() => navigate(-1)}
            iconName="arrow-left"
            variant="icon"
          />
          <span className="header_underline">Undelivered orders</span>
        </SpaceBetween>
      </Header>

      {/*  */}

      <div style={{ marginTop: 18 }}>
        <SpaceBetween direction="vertical" size="l">
          <Container
            header={
              <Header actions={<Badge color="red">Undelivered</Badge>}>
                <SpaceBetween
                  direction="horizontal"
                  alignItems="center"
                  size="xs"
                >
                  Maruti S <Badge>COD</Badge>
                </SpaceBetween>
              </Header>
            }
            footer={
              <SpaceBetween direction="vertical" size="m">
                <div className="jcsb flex aic">
                  <Box variant="strong">
                    Payment : ₹ <span className="blue">2980</span>
                  </Box>
                  <Box variant="strong">16 Items</Box>
                </div>

                <Box>Reason</Box>

                <Box>
                  <span className="undelevered_border">
                    Requested for reschedule
                  </span>
                </Box>

                <Button
                  onClick={() => navigate("/app/customer-details")}
                  variant="primary"
                  fullWidth
                >
                  Reattempt
                </Button>
              </SpaceBetween>
            }
          >
            13-54-854/4A/B1,B-Block Jains Bandlaguda, Prestige High Fields,
            Madhapur, Telangana 500038
          </Container>

          <Container
            header={
              <Header actions={<Badge color="red">Undelivered</Badge>}>
                <SpaceBetween
                  direction="horizontal"
                  alignItems="center"
                  size="xs"
                >
                  Maruti S <Badge>COD</Badge>
                </SpaceBetween>
              </Header>
            }
            footer={
              <SpaceBetween direction="vertical" size="m">
                <div className="jcsb flex aic">
                  <Box variant="strong">
                    Payment : ₹ <span className="blue">2980</span>
                  </Box>
                  <Box variant="strong">16 Items</Box>
                </div>

                <Box>Reason</Box>

                <Box>
                  <span className="undelevered_border">
                    Requested for reschedule
                  </span>
                </Box>

                <Button
                  onClick={() => navigate("/app/customer-details")}
                  variant="primary"
                  fullWidth
                >
                  Reattempt
                </Button>
              </SpaceBetween>
            }
          >
            13-54-854/4A/B1,B-Block Jains Bandlaguda, Prestige High Fields,
            Madhapur, Telangana 500038
          </Container>
        </SpaceBetween>
      </div>
    </ContentLayout>
  );
};

export default Undelivered;
