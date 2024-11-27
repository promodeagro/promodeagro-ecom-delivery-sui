import React from "react";
import TopNavigation from "@cloudscape-design/components/top-navigation";
import Logo from "../../Assets/Images/Logo.png";
import { useNavigate } from "react-router-dom";

const Topbar = () => {
  const navigate = useNavigate();

  // Retrieve user information from localStorage
  const userInfo = JSON.parse(localStorage.getItem("userinfo"));
  const fullName = userInfo ? userInfo.personalDetails.fullName : "Guest";
  const email = userInfo
    ? userInfo.personalDetails.email
    : "No email available";

  // Handle menu item clicks
  const handleUtilityItemClick = (itemId) => {
    if (itemId === "profile") {
      navigate("/app/home/profileDetail"); // Navigate to profile details page
    } else if (itemId === "signout") {
      // Handle sign out logic (e.g., clearing localStorage, redirecting to login)
      localStorage.removeItem("userinfo");
      navigate("/login");
    }
  };

  return (
    <header>
      <TopNavigation
        identity={{
          href: "#",
          title: "Rider App",
          logo: {
            src: Logo,
            alt: "Logo",
          },
        }}
        utilities={[
          {
            type: "button",
            onClick: () => navigate("/app/notifications"),
            iconName: "notification",
            title: "Notifications",
            ariaLabel: "Notifications (unread)",
            badge: true,
            disableUtilityCollapse: false,
          },
          {
            type: "menu-dropdown",
            text: fullName,
            description: email,
            iconName: "user-profile",
            onItemClick: (event) => handleUtilityItemClick(event.detail.id),
            items: [
              { id: "profile", text: "Profile" },
              { id: "signout", text: "Sign out" },
            ],
          },
        ]}
      />
    </header>
  );
};

export default Topbar;
