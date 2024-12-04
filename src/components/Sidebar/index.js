import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import SideNavigation from "@cloudscape-design/components/side-navigation";
import { Badge, Box, Button, Icon } from "@cloudscape-design/components";
import { useDispatch } from "react-redux"; // Don't forget to import useDispatch
import { signOut } from "Redux-Store/Signout/SignoutThunk"; // Ensure signOut is imported correctly

const pages = [
  { type: "link", text: "Home", href: "/app/Home" },
  { type: "link", text: "Amount Summary", href: "/app/amount-summary" },
  { type: "link", text: "Profile Details", href: "/app/home/profileDetail" },
  { type: "divider" },
  {
    type: "link",
    text: "Notifications",
    href: "/app/notifications",
    info: <Badge color="red">23</Badge>,
  },
];

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch(); // Add dispatch here
  const [activeHref, setActiveHref] = React.useState("");

  const userInfo = JSON.parse(localStorage.getItem("userinfo"));
  const fullName = userInfo ? userInfo.personalDetails.fullName : "Guest";

  useEffect(() => {
    setActiveHref(location.pathname);
  }, [location.pathname]);

  const handleFollow = (event) => {
    const { href, external } = event.detail;
    if (!external) {
      event.preventDefault();
      setActiveHref(href);
      navigate(href);
    }
  };

  const handleLogoutClick = async () => { // Modify this function to not depend on itemId
    try {
      console.log("Signing out...");
      const response = await dispatch(signOut()).unwrap();
      console.log("Response message:", response.message);
      if (response.success || response.message === "Successfully signed out") {
        localStorage.clear();
        navigate("/auth/signin");
      } else {
        console.error("Signout failed:", response.message);
      }
    } catch (error) {
      console.error("Error during signout:", error);
      localStorage.clear(); // Clear local storage as a fallback
      navigate("/auth/signin");
    }
  };

  const userPhoto =
  userInfo?.documents?.find((doc) => doc.name === "userPhoto")?.image;


  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "90vh" }}>
      <SideNavigation
        activeHref={activeHref}
        header={{
          href: "/",
          text: (
            <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  display: "flex",
                  border: "1px solid #D9D9D9",
                  alignItems: "center",
                  justifyContent: "center",
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
              <Box variant="h4">{fullName}</Box>
            </div>
          ),
        }}
        onFollow={handleFollow}
        items={pages}
      />
      <div style={{ marginLeft: "30px" }}>
        <Button variant="inline-link" onClick={handleLogoutClick}>Logout</Button>
      </div>
    </div>
  );
};

export default Sidebar;
