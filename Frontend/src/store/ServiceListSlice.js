import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const fetchList = createAsyncThunk("listSlice/fetchList", async (value) => {
  const res = await axios.post("/service", value);

  return res.data;
});

const serviceListSlice = createSlice({
  name: "serviceListSlice",
  initialState: {
    data: [],
    status: "",
  },

  extraReducers: (bulider) => {
    bulider.addCase(fetchList.pending, (state, action) => {
      state.status = "loading";
    });
    bulider.addCase(fetchList.fulfilled, (state, action) => {
      state.status = "complete";
      state.data = action.payload;
    });
    bulider.addCase(fetchList.rejected, (state, action) => {
      state.status = "fail";
      state.data = "";
    });
  },
});

export default serviceListSlice;
export { fetchList };
