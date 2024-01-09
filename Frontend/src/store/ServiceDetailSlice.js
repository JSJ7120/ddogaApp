import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const fetchDetail = createAsyncThunk("detailSlice/fetchDetail", async (value) => {
  const res = await axios.get(`/service/details/${value.id}`);

  return res.data;
});

const serviceDetailSlice = createSlice({
  name: "serviceDetailSlice",
  initialState: {
    data: {},
    status: "",
  },

  extraReducers: (bulider) => {
    bulider.addCase(fetchDetail.pending, (state, action) => {
      state.status = "loading";
    });
    bulider.addCase(fetchDetail.fulfilled, (state, action) => {
      state.status = "complete";
      state.data = action.payload;
    });
    bulider.addCase(fetchDetail.rejected, (state, action) => {
      state.status = "fail";
    });
  },
});

export default serviceDetailSlice;
export { fetchDetail };
