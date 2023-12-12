import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ServiceListPage from "./pages/ServiceListPage";
import ServiceDetailPage from "./pages/ServiceDetailPage";
import ServiceExpectedCost from "./pages/ServiceExpectedCost";
import ServcieGalleryList from "./pages/ServcieGalleryList";
import ServiceGallerys from "./pages/ServiceGallerys.js";
import OnlineCounselInfo from "./pages/OnlineCounselInfo";
import OnlineCounsel from "./pages/OnlineCounsel";
import OnlineCounselQA from "./pages/OnlineCounselQA.js";
import NotFound from "./components/common/NotFound.js";
import CounselDonePage from "./pages/CounselDonePage.js";

const NotFoundPage = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignContent: "center" }}>
      <NotFound />
    </div>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="service" element={<ServiceListPage />} />
      <Route path="service/detail/:id" element={<ServiceDetailPage />} />
      <Route path="service/:id/detail/expect" element={<ServiceExpectedCost />} />
      <Route path="service/detail/:id/gallery" element={<ServiceGallerys />} />
      <Route path="service/detail/:id/gallery/list" element={<ServcieGalleryList />} />
      <Route path="counsel/info/:title" element={<OnlineCounselInfo />} />
      <Route path="counsel/:title" element={<OnlineCounsel />} />
      <Route path="counselQA/:id" element={<OnlineCounselQA />} />
      <Route path="counselDone/:id" element={<CounselDonePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
