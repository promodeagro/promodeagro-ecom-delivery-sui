import {
  Badge,
  Box,
  Button,
  Container,
  ContentLayout,
  Header,
  SpaceBetween,
} from "@cloudscape-design/components";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchRunsheetDetail } from "Redux-Store/Home/homeThunk";

const Undelivered = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { runsheetId } = useParams();
  const { runsheetDetail, loading, error } = useSelector(
    (state) => state.runsheet
  );

  useEffect(() => {
    const riderId = localStorage.getItem("id")?.replace(/['"]+/g, ""); // Get rider ID
    if (riderId && runsheetId) {
      dispatch(fetchRunsheetDetail({ riderId, runsheetId }));
    }
  }, [dispatch, runsheetId]);

  const handleRefresh = () => {
    window.location.reload();
  };

  const undeliveredOrders =
    runsheetDetail?.data?.orders?.filter(
      (order) => order.status === "undelivered"
    ) || [];

  return (
    <ContentLayout disableOverlap headerVariant="high-contrast">
      <Header
        variant="h3"
        actions={
          <Button variant="icon" iconName="refresh" onClick={handleRefresh} />
        }
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
      <div style={{ marginTop: 18 }}>
        {loading ? (
          <Box variant="strong">Loading...</Box>
        ) : error ? (
          <Box variant="strong" color="red">
            {error}
          </Box>
        ) : undeliveredOrders.length > 0 ? (
          <SpaceBetween direction="vertical" size="l">
            {undeliveredOrders.map((order) => (
              <Container
                key={order.id}
                header={
                  <Header actions={<Badge color="red">Undelivered</Badge>}>
                    <SpaceBetween
                      direction="horizontal"
                      alignItems="center"
                      size="xs"
                    >
                      <span className="blue"> {order.customerName}</span>
                      <Badge>{order.paymentDetails?.method}</Badge>
                    </SpaceBetween>
                  </Header>
                }
                footer={
                  <SpaceBetween direction="vertical" size="m">
                    <div className="jcsb flex aic">
                      <Box variant="strong">
                        Payment: ₹
                        <span className="blue">{order.totalPrice}</span>
                      </Box>
                      <Box variant="strong">{order.items?.length} Items</Box>
                    </div>
                    <Box>Reason</Box>
                    <Box>
                      <span className="undelevered_border">

                      {order.statusDetails?.reason || "No reason provided"}
                      </span>
                    </Box>
                    <div style={{width: '80%', margin: '0 auto'}}>
                    <Button
                      onClick={() =>
                        navigate(`/app/home/runsheet/${runsheetId}/order/${order.id}/customer-details`)
                      }
                      variant="primary"
                      fullWidth
                    >
                      Reattempt
                    </Button>
  </div>
                  </SpaceBetween>
                }
              >
                {order.address?.address}, {order.address?.zipCode}
              </Container>
            ))}
          </SpaceBetween>
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              height: "100vh",
              marginTop: "50%",
              fontWeight: "bold",
            }}
          >
            No undelivered orders.
          </div>
        )}
      </div>
    </ContentLayout>
  );
};

export default Undelivered;
