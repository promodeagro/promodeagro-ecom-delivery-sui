import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Views from "./Views/index";
import { useLocation } from "react-router-dom";
import Topbar from "components/Topbar";import {
  AppLayout,
  BreadcrumbGroup,

} from '@cloudscape-design/components'
function App() {
  // const location = useLocation();
  return (
    <Router>
      <div className="App">
        {window.location.pathname !== "/auth/signup" &&
          window.location.pathname !== "/auth/signin" &&
          window.location.pathname !== "/auth/forgot-password" && <Topbar />}
        <AppLayout
        headerVariant="high-contrast"
        breadcrumbs={
          <BreadcrumbGroup
          items={[
            { text: "Home", href: "#" },
           {}
          ]}
          ariaLabel="Breadcrumbs"
        />
        }
        navigation={
         <Sidebar/>
        }
        content={
         <MainContent/>
        }
        toolsHide
      />
      </div>
    </Router>
  );
}
function MainContent() {
  const location = useLocation();
  return (
    <>
      <Routes>
        <Route path="*" element={<Views />} />
      </Routes>
    </>
  );
}
export default App;
