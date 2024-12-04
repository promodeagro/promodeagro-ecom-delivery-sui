import {
  Badge,
  Box,
  Button,
  Container,
  Header,
  Select,
  SpaceBetween,
  TextFilter,
} from "@cloudscape-design/components";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchRunsheetDetail, fetchRunsheet } from "Redux-Store/Home/homeThunk";
import { useMemo } from "react"; // Import useMemo
import { useLocation } from "react-router-dom";
import Flashbar from "@cloudscape-design/components/flashbar";

const Runsheet = () => {
  const navigate = useNavigate();
  const [flashBar, setFlashBar] = useState(null);
  const location = useLocation();
  const dispatch = useDispatch();
  const { runsheetId } = useParams();
  const { runsheet, runsheetDetail } = useSelector((state) => state.runsheet);
  const [selectedOption, setSelectedOption] = useState({
    label: "Select a Runsheet",
    value: "",
  });
  const [searchText, setSearchText] = useState("");
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [hasFetchedRunsheetDetail, setHasFetchedRunsheetDetail] =
    useState(false);

  useEffect(() => {
    if (location.state?.flashBarMessage) {
      setFlashBar({
        message: location.state.flashBarMessage,
        type: location.state.type || "info",
      });

      window.history.replaceState({}, document.title);
      const timer = setTimeout(() => {
        setFlashBar(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [location.state]);

  const runsheetData = useMemo(() => {
    return runsheet?.data.filter((sheet) => sheet.status === "active") || [];
  }, [runsheet]);

  useEffect(() => {
    dispatch(fetchRunsheet());
  }, [dispatch]);

  useEffect(() => {
    if (runsheetId && !hasFetchedRunsheetDetail) {
      const riderId = localStorage.getItem("id")?.replace(/['"]+/g, "");
      if (riderId) {
        dispatch(fetchRunsheetDetail({ riderId, runsheetId }));
        setHasFetchedRunsheetDetail(true);
      }
    }
  }, [dispatch, runsheetId, hasFetchedRunsheetDetail]);

  useEffect(() => {
    const orders = runsheetDetail?.data?.orders || [];
    if (searchText) {
      const filtered = orders.filter(
        (order) =>
          order.customerName.toLowerCase().includes(searchText.toLowerCase()) &&
          order.status === "on the way"
      );
      setFilteredOrders(filtered);
    } else {
      setFilteredOrders(
        orders.filter((order) => order.status === "on the way")
      );
    }
  }, [searchText, runsheetDetail]);

  const handleSelectChange = (e) => {
    const selectedRunsheet = e.detail.selectedOption;
    setSelectedOption(selectedRunsheet);

    if (selectedRunsheet?.value) {
      navigate(`/app/home/runsheet/${selectedRunsheet.value}`);
      setHasFetchedRunsheetDetail(false);
    }
  };

  useEffect(() => {
    if (runsheetId) {
      const matchingRunsheet = runsheetData.find(
        (sheet) => sheet.id === runsheetId
      );
      if (matchingRunsheet) {
        setSelectedOption({
          label: `Runsheet (${matchingRunsheet.id})`,
          value: matchingRunsheet.id,
        });
      }
    }
  }, [runsheetId, runsheetData]);

  return (
    <>
      <SpaceBetween size="s">
        {flashBar && (
          <Flashbar
            items={[
              {
                header: flashBar.message,
                type: flashBar.type,
                dismissible: true,
                onDismiss: () => setFlashBar(null), // Dismiss manually if needed
              },
            ]}
          />
        )}
        <Header
          variant="h2"
          actions={
            <Button
              variant="icon"
              iconName="refresh"
              onClick={() => window.location.reload()}
            />
          }
        >
          <Select
            selectedOption={selectedOption}
            onChange={handleSelectChange}
            options={runsheetData.map((sheet) => ({
              label: `Runsheet (${sheet.id})`,
              value: sheet.id,
            }))}
          />
        </Header>
      </SpaceBetween>
      {runsheetData?.map((sheet) => {
        if (sheet.id === selectedOption.value) {
          return (
            <div
              style={{ marginTop: 10, marginBottom: 18 }}
              className="home_custom_box_wrapper pointer"
            >
              <div style={{ background: "#4F5A68" }} className="runsheet_box">
                <span className="runsheet_box_value">
                  {sheet.pendingOrders}
                </span>
                <span className="runsheet_box_label blue_underline">
                  Pending
                </span>
              </div>
              <div
                onClick={() =>
                  navigate(`/app/home/runsheet/${runsheetId}/delivered`)
                }
                style={{ background: "#037F0C" }}
                className="runsheet_box pointer"
              >
                <span className="runsheet_box_value">
                  {sheet.deliveredOrders}
                </span>
                <span className="runsheet_box_label">Delivered</span>
              </div>
              <div
                onClick={() =>
                  navigate(`/app/home/runsheet/${runsheetId}/undelivered`)
                }
                style={{ background: "#D91515" }}
                className="runsheet_box pointer"
              >
                <span className="runsheet_box_value">
                  {sheet.orders - sheet.pendingOrders - sheet.deliveredOrders}
                </span>
                <span className="runsheet_box_label">Undelivered</span>
              </div>
            </div>
          );
        }
        return null;
      })}
      <TextFilter
        filteringText={searchText}
        filteringPlaceholder="Search by customer name"
        onChange={(e) => setSearchText(e.detail.filteringText)}
      />
      <div style={{ marginTop: 18, marginBottom: 18 }}>
        <Box variant="h4">
          <span className="gray_underline">
            All Shipments ({filteredOrders?.length || 0})
          </span>
        </Box>
      </div>
      <SpaceBetween direction="vertical" size="l">
        {filteredOrders.length > 0 ? (
          filteredOrders.map((order, index) => (
            <span
              key={index}
              style={{ cursor: "pointer" }}
              onClick={() =>
                navigate(
                  `/app/home/runsheet/${runsheetId}/order/${order.id}/customer-details`
                )
              }
            >
              <Container
                header={
                  <SpaceBetween
                    alignItems="center"
                    direction="horizontal"
                    size="xs"
                  >
                    <Box variant="h3">
                      <div style={{ display: "flex", gap: "0.5rem" }}>
                        <span style={{ color: "#0972D3" }}>
                          {order.customerName}
                        </span>
                        <Badge>{order.paymentDetails?.method}</Badge>
                      </div>
                    </Box>
                  </SpaceBetween>
                }
                footer={
                  <div className="flex jcsb aic">
                    <Box variant="h5">
                      Payment :{" "}
                      <span className="blue"> ₹ {order.totalPrice} </span>
                    </Box>
                    <Box variant="h5">{order.items?.length || 0} Items</Box>
                  </div>
                }
              >
                {order.address?.address}, {order.address?.zipCode}
              </Container>
            </span>
          ))
        ) : (
          <Box variant="h4">No orders available.</Box>
        )}
      </SpaceBetween>
    </>
  );
};

export default Runsheet;
