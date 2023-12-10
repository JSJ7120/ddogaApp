import { configureStore } from "@reduxjs/toolkit";
import ServiceListSlice from "./ServiceListSlice";
import ServiceDetailSlice from "./ServiceDetailSlice";
import GalleryListSlice from "./GalleryListSlice";
import OnlineCounselSlice from "./OnlineCounselSlice";

const store = configureStore({
  reducer: {
    list: ServiceListSlice.reducer,
    detail: ServiceDetailSlice.reducer,
    galleryList: GalleryListSlice.reducer,
    counsel: OnlineCounselSlice.reducer,
  },
});

export default store;
