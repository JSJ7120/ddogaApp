import React, { useState } from "react";
import style from "./styles/ServiceHeader.module.css";
import { Link } from "react-router-dom";
import ServiceModalRoot from "../../modal/serviceList/ServiceModalRoot";

const ServiceHeader = ({ category }) => {
  const [modal, setModal] = useState(false);

  return (
    <>
      <header className={style.wrap}>
        <div className={style.box}>
          <div className={style.divideBox_1}>
            <Link to="/">
              <button className={style.home} />
            </Link>
          </div>
          <div className={style.divideBox_2}>
            {category} 찾기
            <button className={style.search} onClick={() => setModal(!modal)} />
          </div>
        </div>
      </header>

      {modal && <ServiceModalRoot searchModal={modal} setSearchModal={setModal} category={category} />}
    </>
  );
};

export default ServiceHeader;
