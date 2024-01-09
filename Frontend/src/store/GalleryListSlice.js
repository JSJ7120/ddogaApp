import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const fetchGalleryList = createAsyncThunk("galleryListSlice/fetchGalleryList", async ({ id }) => {
  const res = await axios.get(`/service/galleryList/${id}`);

  return res.data;
});

const fetchGallery = createAsyncThunk("galleryListSlice/fetchGallery", async ({ noticeId, id }) => {
  const res = await axios.get(`/service/gallery/`, {
    params: {
      noticeId,
      id,
    },
  });

  return res.data;
});

const galleryListSlice = createSlice({
  name: "galleryListSlice",
  initialState: {
    data: [],
    status: "",
  },
  extraReducers: (bulider) => {
    bulider.addCase(fetchGalleryList.pending, (state, action) => {
      state.status = "loading";
    });
    bulider.addCase(fetchGalleryList.fulfilled, (state, action) => {
      state.status = "complete";
      state.data = action.payload;
    });
    bulider.addCase(fetchGalleryList.rejected, (state, action) => {
      state.status = "fail";
    });
    bulider.addCase(fetchGallery.pending, (state, action) => {
      state.status = "loading";
    });
    bulider.addCase(fetchGallery.fulfilled, (state, action) => {
      state.status = "complete";
      state.galleryData = action.payload;
    });
    bulider.addCase(fetchGallery.rejected, (state, action) => {
      state.status = "fail";
    });
  },
});

export default galleryListSlice;
export { fetchGalleryList, fetchGallery };
