import React from "react";
import GalleryLayout from "../components/layout/Layout";
import GalleryListContainer from "../container/GalleryListContainer";

const ServcieDetailGalleryList = () => {
  const css = "detail_layout";

  return (
    <GalleryLayout css={css}>
      <GalleryListContainer />
    </GalleryLayout>
  );
};

export default ServcieDetailGalleryList;
