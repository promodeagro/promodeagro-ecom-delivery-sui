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

const Delivered = () => {
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

  const orders = runsheetDetail?.data?.orders || [];
  const deliveredOrders = orders.filter(
    (order) => order.status === "delivered"
  );

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
          <span className="header_underline">Delivered orders</span>
        </SpaceBetween>
      </Header>
      <div style={{ marginTop: 18 }}>
        {loading ? (
          <Box variant="strong">Loading...</Box>
        ) : error ? (
          <Box variant="strong" color="red">
            {error}
          </Box>
        ) : deliveredOrders.length > 0 ? (
          <SpaceBetween direction="vertical" size="l">
            {deliveredOrders.map((order) => (
              <Container
                key={order.id}
                header={
                  <Header actions={<Badge color="green">Delivered</Badge>}>
                    <span className="blue opacity_minus">
                      {order.customerName}
                    </span>
                  </Header>
                }
                footer={
                  <SpaceBetween direction="vertical" size="m">
                    <div className="jcsb flex aic opacity_minus">
                      <Box variant="strong">
                        Payment : ₹{" "}
                        <span className="blue">{order.totalPrice}</span>
                      </Box>
                      <Box variant="strong">{order.items?.length} Items</Box>
                    </div>
                  </SpaceBetween>
                }
              >
                <span className="opacity_minus">
                  {order.address?.address}, {order.address?.zipCode}
                </span>
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
            No delivered orders yet.
          </div>
        )}
      </div>
    </ContentLayout>
  );
};

export default Delivered;
