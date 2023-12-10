import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const sendCousenlData = createAsyncThunk("onlineCounselSlice/sendCousenlData", async ({ answer, phoneNum, id }) => {
  const newAnswer = {
    ...answer,
    phoneNum,
  };

  const res = await axios.post("/service/sendCousenlData", { newAnswer, id });
  return res.data;
});

const fetchQAItem = createAsyncThunk("onlineCounselSlice/fetchQAItem", async ({ id }) => {
  const res = await axios.get(`/service/fetchQAItem/${id}`);

  return res.data;
});

const OnlineCounselSlice = createSlice({
  name: "onlineCounselSlice",
  initialState: {
    data: "",
    status: "",
  },
  extraReducers: ({ addCase }) => {
    addCase(sendCousenlData.pending, (state, action) => {
      state.status = "loading";
    });
    addCase(sendCousenlData.fulfilled, (state, action) => {
      state.status = "complete";
    });
    addCase(sendCousenlData.rejected, (state, action) => {
      state.status = "fail";
    });
    addCase(fetchQAItem.pending, (state, action) => {
      state.status = "loading";
    });
    addCase(fetchQAItem.fulfilled, (state, action) => {
      state.status = "complete";
      state.data = action.payload;
    });
    addCase(fetchQAItem.rejected, (state, action) => {
      state.status = "fail";
    });
  },
});

export default OnlineCounselSlice;
export { sendCousenlData, fetchQAItem };
