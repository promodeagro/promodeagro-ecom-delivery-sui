import React from "react";
import TopNavigation from "@cloudscape-design/components/top-navigation";
import Logo from "../../Assets/Images/Logo.png";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signOut } from "../../Redux-Store/Signout/SignoutThunk";

const Topbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Retrieve user information from localStorage
  const userInfo = JSON.parse(localStorage.getItem("userinfo"));
  const fullName = userInfo ? userInfo.personalDetails.fullName : "Guest";
  const email = userInfo ? userInfo.personalDetails.email : "No email available";

  // Handle menu item clicks
  const handleUtilityItemClick = async (itemId) => {
    if (itemId === "profile") {
      navigate("/app/home/profileDetail"); // Navigate to profile details page
    } else if (itemId === "signout") {
      try {
        const response = await dispatch(signOut()).unwrap(); // Await API response
        if (response.success || response.message === "Successfully signed out") {
          localStorage.clear(); // Clear all local storage
          navigate("/auth/signin"); // Redirect to sign-in page
        } else {
          console.error("Signout failed:", response.message);
        }
      } catch (error) {
        console.error("Error during signout:", error);
        localStorage.clear(); // Clear local storage as a fallback
        navigate("/auth/signin"); // Redirect to sign-in page
      }
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
