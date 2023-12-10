import React from "react";
import style from "./styles/ChoiceNurshingContent.module.css";
import { NurshingData } from "../../assets/data/uiData";
import { useNavigate, useSearchParams } from "react-router-dom";
import { fetchList } from "../../store/ServiceListSlice";
import { useDispatch } from "react-redux";

const ChoiceNurshingContent = ({ close, area, setArea }) => {
  const navigate = useNavigate();
  const [serachPrams] = useSearchParams();
  const sort = serachPrams.get("sort");

  const changeCate = (cateId) => {
    navigate(`/service?cateId=${cateId}&sort=${sort}`);

    setArea((prev) => ({
      ...prev,
      cateId,
      sort,
    }));

    close();
  };

  return (
    <div>
      <ul className={style.wrap}>
        {NurshingData.map((item) => {
          return (
            <li className={style.List} onClick={() => changeCate(item.cateId)} key={item.id}>
              {item.id === 4 && <p className={style.new}>New</p>}
              <img src={item.image} alt={item.type} />
              <p className={style.text}>{item.type}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ChoiceNurshingContent;
