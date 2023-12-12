import React from "react";
import style from "./styles/Loading.module.css";
import { MoonLoader } from "react-spinners";

const Loading = ({ loading }) => {
  return (
    <div className={style.loadingWrap}>
      <MoonLoader color="#4a74fc" loading={loading} size={60} speedMultiplier={0.8} />
    </div>
  );
};

export default Loading;
