import React from "react";
import GalleryLayout from "../components/layout/Layout";
import GalleryContainer from "../container/GalleryContainer";

const css = "detail_layout";

const ServiceGallerys = () => {
  return (
    <GalleryLayout css={css}>
      <GalleryContainer />
    </GalleryLayout>
  );
};

export default ServiceGallerys;
