
import { Badge, Box, SideNavigation } from "@cloudscape-design/components";
import { useLocation, useNavigate } from "react-router-dom";

import Logo from "../../Assets/Images/Logo.png"
const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const items = [
    { type: "link", text: "Home", href: "/app/home" },
    { type: "link", text: "Amount Summary", href: "/app/amount-summary" },
    { type: "link", text: "Profile Details", href: "/app/profile-details" },
  
    { type: "divider" },
    { type: "link", text: "Notifications", href: "/app/notifications"
      ,  info: <Badge color="red">23</Badge>
     },
   
  ];

  const handleNavigation = (event) => {
    if (!event.detail.external) {
      event.preventDefault();
      navigate(event.detail.href);
    }
  };

  return (
    <>    <SideNavigation
      activeHref={location.pathname}
      header={{logo: { alt: "logo", src: Logo}
      ,href: "#/", text: "PTR Technologies" , }}
      onFollow={handleNavigation}
      items={items.map(item => {
        if (item.type === 'link') {
          return {
            ...item,
            text: (
              <span style={{
                color: location.pathname === item.href ? 'blue' : 'black',
                fontWeight: location.pathname === item.href ? 'bold' : 'normal'
              }}>
                {item.text}
              </span>
            )
          };
        }
        return item;
      })}
    />
Logout    </>

  );
};

export default Sidebar;