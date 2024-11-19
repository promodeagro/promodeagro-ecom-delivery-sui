import React from 'react'
import TopNavigation from "@cloudscape-design/components/top-navigation";

import Logo from "../../Assets/Images/Logo.png"
import { useNavigate } from 'react-router-dom';
const Topbar = () => {
  const navigate = useNavigate()

  const userInfo = JSON.parse(localStorage.getItem("userinfo"));
  
  const fullName = userInfo ? userInfo.personalDetails.fullName : "Guest";
  const email = userInfo ? userInfo.personalDetails.email : "No email available";

  return (
   <header>
      <TopNavigation
      identity={{
        href: "#",
        title: "Rider App",
        logo: {
          src: Logo,
          alt: "Logo"
        }
      }}
      utilities={[
        {
          type: "button",
          onClick:()=> navigate('/app/notifications'),
          iconName: "notification",
          title: "Notifications",
          ariaLabel: "Notifications (unread)",
          badge: true,
          disableUtilityCollapse: false
        },
       
        {
          type: "menu-dropdown",
                text: fullName, // Dynamically use the full name
            description: email, // Dynamically use the email
          iconName: "user-profile",
          items: [
            { id: "profile", text: "Profile" },
            { id: "preferences", text: "Preferences" },
            { id: "security", text: "Security" },
            {
              id: "support-group",
              text: "Support",
              items: [
                {
                  id: "documentation",
                  text: "Documentation",
                  href: "#",
                  external: true,
                  externalIconAriaLabel:
                    " (opens in new tab)"
                },
                { id: "support", text: "Support" },
                {
                  id: "feedback",
                  text: "Feedback",
                  href: "#",
                  external: true,
                  externalIconAriaLabel:
                    " (opens in new tab)"
                }
              ]
            },
            { id: "signout", text: "Sign out" }
          ]
        }
      ]}
     
    />
   </header>
  )
}

export default Topbar