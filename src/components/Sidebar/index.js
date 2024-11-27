import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import SideNavigation from "@cloudscape-design/components/side-navigation";
import { Badge, Box, Button,Icon } from "@cloudscape-design/components";

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
      navigate(href); // Use navigate for internal links
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "90vh" }}>
    <SideNavigation
      activeHref={activeHref}
      header={{ href: "/", text:<div style={{display:"flex",gap:"20px",alignItems:"center"}}> <div 
        style={{
          width:"40px" ,
          height:"40px" ,
          borderRadius:"50%" ,
          display:"flex" ,
          border:"1px solid #D9D9D9",
          alignItems:"center" ,
          justifyContent:"center",
      
       
        }}
        >
    <Icon  variant='disabled' name="user-profile" size="medium" />
    </div> <Box variant="h4">{fullName}</Box></div> }}
      onFollow={handleFollow}
      items={pages}
    />

    <div style={{marginLeft:"30px"}}>
    <Button onClick={() => navigate("/auth/signin")}variant="inline-link">Logout</Button>
    </div>
    </div>
  );
};

export default Sidebar;