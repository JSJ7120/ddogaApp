import React, { useEffect, useState } from "react";
import style from "./styles/DetailCenterFloatCost.module.css";
import cost from "../../assets/icon/serviceDetail/expect_cost.svg";
import { Link, useParams } from "react-router-dom";
import { throttle } from "lodash";

const DetailCenterFloatCost = () => {
  const [show, setShow] = useState(false);
  const { id } = useParams();

  const scrollHandle = throttle((e) => {
    window.scrollY > 815 ? setShow(true) : setShow(false);
  }, 200);

  useEffect(() => {
    window.addEventListener("scroll", scrollHandle);
  }, []);

  return (
    <div className={style.wrap}>
      <div className={style.box}>
        <div className={`${show === true ? style.onFloat : style.offFloat}`}>
          <Link to={`/service/${id}/detail/expect`}>
            <img src={cost} alt="cost" />
            <p>예상비용</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DetailCenterFloatCost;
