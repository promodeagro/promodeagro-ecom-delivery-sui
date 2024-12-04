import React, { useEffect, useState } from "react";
import TopNavigation from "@cloudscape-design/components/top-navigation";
import Logo from "../../Assets/Images/Logo.png";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signOut } from "../../Redux-Store/Signout/SignoutThunk";
import { fetchRunsheet } from "Redux-Store/Home/homeThunk";

const Topbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [runsheetLength, setRunsheetLength] = useState(null);
  const userInfo = JSON.parse(localStorage.getItem("userinfo"));
  const fullName = userInfo ? userInfo.personalDetails.fullName : "Guest";
  const email = userInfo ? userInfo.personalDetails.email : "No email available";

  // Fetch runsheet data on component mount
  useEffect(() => {
    const getRunsheetData = async () => {
      try {
        const response = await dispatch(fetchRunsheet()).unwrap();  // Call the fetchRunsheet thunk
        if (response && response.length !== undefined) {
          setRunsheetLength(response.length);  // Set the length of the runsheet
        }
      } catch (error) {
        console.error("Error fetching runsheet data:", error);
      }
    };
    getRunsheetData();
  }, [dispatch]);

  const handleUtilityItemClick = async (itemId) => {
    if (itemId === "profile") {
      navigate("/app/home/profileDetail"); // Navigate to profile details page
    } else if (itemId === "signout") {
      try {
        console.log("Signing out..."); // Log signing out
        const response = await dispatch(signOut()).unwrap(); // Await API response
        console.log("Response message:", response.message); // Log the response message
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
              {
                id: "profile",
                text: "Profile",
                disabled: runsheetLength === 0, // Disable profile if runsheet length is 0
              },
              { id: "signout", text: "Sign out" },
            ],
          },
        ]}
      />
    </header>
  );
};

export default Topbar;
