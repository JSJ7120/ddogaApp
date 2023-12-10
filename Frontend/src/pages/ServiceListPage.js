import React from "react";
import ServiceListContainer from "../container/ServiceListContainer";

const ServiceListPage = () => {
  const ServiceBackground = ({ children }) => (
    <div style={{ background: "#f6f6fa", minHeight: "100vh", height: "auto" }}>{children}</div>
  );
  return (
    <ServiceBackground>
      <ServiceListContainer />
    </ServiceBackground>
  );
};

export default ServiceListPage;
