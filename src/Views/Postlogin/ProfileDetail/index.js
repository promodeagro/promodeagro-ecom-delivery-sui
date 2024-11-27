import {
  Box,
  Button,
  Header,
  Icon,
  SpaceBetween,
} from "@cloudscape-design/components";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProfileDetail = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const storedUserInfo = localStorage.getItem("userinfo");
    console.log("Raw userInfo from localStorage:", storedUserInfo); // Debug log
    if (storedUserInfo) {
      try {
        const parsedUserInfo = JSON.parse(storedUserInfo);
        console.log("Parsed userInfo:", parsedUserInfo); // Debug log
        setUserInfo(parsedUserInfo);
      } catch (error) {
        console.error("Failed to parse userInfo:", error);
      }
    }
  }, []);

  const userPhoto =
    userInfo?.documents?.find((doc) => doc.name === "userPhoto")?.image;

  return (
    <SpaceBetween size="m">
      <Header variant="h3">
        <SpaceBetween size="xs" direction="horizontal" alignItems="center">
          <Button
            onClick={() => navigate(-1)}
            iconName="arrow-left"
            variant="icon"
          />
          <span className="header_underline">Profile Details</span>
        </SpaceBetween>
      </Header>
      <SpaceBetween direction="vertical" size="l">
        <Box>
          <div
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              display: "flex",
              border: "1px solid #D9D9D9",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto",
              overflow: "hidden",
              backgroundColor: "#f5f5f5",
            }}
          >
            {userPhoto ? (
              <img
                src={userPhoto}
                alt="Profile"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            ) : (
              <Icon variant="disabled" name="user-profile" size="large" />
            )}
          </div>
          <div
            style={{
              textAlign: "center",
              marginTop: "10px",
              fontWeight: "bold",
              fontSize: "16px",
            }}
          >
            <p>ID: {userInfo?.id || "Unavailable"}</p>
            <p>Name: {userInfo?.name || "Unavailable"}</p>
          </div>
        </Box>
      </SpaceBetween>
    </SpaceBetween>
  );
};

export default ProfileDetail;
