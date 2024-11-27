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

const Runsheet = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { runsheetId } = useParams();
  const { runsheet, runsheetDetail } = useSelector((state) => state.runsheet);

  // State to manage selected runsheet in the dropdown
  const [selectedOption, setSelectedOption] = useState({
    label: "Select a Runsheet",
    value: "",
  });
  const [searchText, setSearchText] = useState(""); // State for search input
  const [filteredOrders, setFilteredOrders] = useState([]); // Filtered orders based on search
  const [hasFetchedRunsheetDetail, setHasFetchedRunsheetDetail] = useState(false); // To track if details are fetched

  const runsheetData = runsheet?.data || []; // Safeguard against undefined runsheet.data

  // Fetch all runsheets when the component mounts
  useEffect(() => {
    dispatch(fetchRunsheet());
  }, [dispatch]);

  // Fetch details of a specific runsheet if runsheetId changes
  useEffect(() => {
    if (runsheetId && !hasFetchedRunsheetDetail) {
      const riderId = localStorage.getItem("id")?.replace(/['"]+/g, ""); // Extract riderId
      if (riderId) {
        dispatch(fetchRunsheetDetail({ riderId, runsheetId }));
        setHasFetchedRunsheetDetail(true);
      }
    }
  }, [dispatch, runsheetId, hasFetchedRunsheetDetail]);

  // Filter orders when search text or runsheetDetail changes
  useEffect(() => {
    const orders = runsheetDetail?.data?.orders || []; // Access orders safely
    if (searchText) {
      const filtered = orders.filter((order) =>
        order.customerName.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredOrders(filtered);
    } else {
      setFilteredOrders(orders);
    }
  }, [searchText, runsheetDetail]);

  // Handle dropdown selection changes
  const handleSelectChange = (e) => {
    const selectedRunsheet = e.detail.selectedOption;
    setSelectedOption(selectedRunsheet);

    if (selectedRunsheet?.value) {
      navigate(`/app/home/runsheet/${selectedRunsheet.value}`);
      setHasFetchedRunsheetDetail(false); // Reset to allow fetching new details
    }
  };

  // Effect to automatically select the runsheet based on the URL
useEffect(() => {
  if (runsheetId) {
    const matchingRunsheet = runsheetData.find((sheet) => sheet.id === runsheetId);
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
      {/* Header with Refresh Button and Dropdown */}
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

      {/* Runsheet Summary Boxes */}
      <div
        style={{ marginTop: 10, marginBottom: 18 }}
        className="home_custom_box_wrapper pointer"
      >
        <div style={{ background: "#4F5A68" }} className="runsheet_box">
          <span className="runsheet_box_value">02</span>
          <span className="runsheet_box_label blue_underline">Pending</span>
        </div>
        <div
          onClick={() => navigate("/app/home/runsheet/delivered")}
          style={{ background: "#037F0C" }}
          className="runsheet_box pointer"
        >
          <span className="runsheet_box_value">06</span>
          <span className="runsheet_box_label">Delivered</span>
        </div>
        <div
          onClick={() => navigate("/app/home/runsheet/undelivered")}
          style={{ background: "#D91515" }}
          className="runsheet_box pointer"
        >
          <span className="runsheet_box_value">01</span>
          <span className="runsheet_box_label">Undelivered</span>
        </div>
      </div>

      {/* Search Filter */}
      <TextFilter
        filteringText={searchText}
        filteringPlaceholder="Search by customer name"
        onChange={(e) => setSearchText(e.detail.filteringText)}
      />

      {/* Orders List Header */}
      <div style={{ marginTop: 18, marginBottom: 18 }}>
        <Box variant="h4">
          <span className="gray_underline">
            All Shipments ({filteredOrders?.length || 0})
          </span>
        </Box>
      </div>

      {/* Orders List */}
      <SpaceBetween direction="vertical" size="l">
        {filteredOrders.length > 0 ? (
          filteredOrders.map((order, index) => (
            <span
              key={index}
              style={{ cursor: "pointer" }}
              onClick={() =>
                navigate(`/app/home/runsheet/${runsheetId}/order/${order.id}/customer-details`)
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
                        <span style={{ color: "#0972D3" }}>{order.customerName}</span>
                      </div>
                    </Box>
                  </SpaceBetween>
                }
                footer={
                  <div className="flex jcsb aic">
                    <Box variant="h5">
                      Payment : <span className="blue"> ₹ {order.totalPrice} </span>
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
