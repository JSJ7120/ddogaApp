import React, { useCallback, useEffect, useState, startTransition } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchList } from "../store/ServiceListSlice";

import ServiceHeader from "../components/serviceList/ServiceHeader";
import ServiceSearch from "../components/serviceList/ServiceSearch";
import ServiceList from "../components/serviceList/ServiceList";
import ServiceFooter from "../components/serviceList/ServiceFooter";
import BodyLayout from "../components/layout/Layout";
import { Helmet } from "react-helmet";
import { NurshingData } from "../assets/data/uiData";
import { throttle } from "lodash";

const ServiceListContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [viewChange, setViewChange] = useState(true);
  const [flag, setFlag] = useState(1);
  const [scroll, setScroll] = useState(true);
  const [searchParams] = useSearchParams();

  const [isLoading, setIsLoading] = useState();

  const cateId = searchParams.get("cateId");
  const sort = searchParams.get("sort");

  const storedProgram = localStorage.getItem("program");
  const storedRank = localStorage.getItem("rank");
  const storedArea = JSON.parse(localStorage.getItem("area"));

  const program = storedProgram ? storedProgram.split(",") : ["all"];
  const rank = storedRank ? storedRank.split(",") : ["all"];
  const item = storedArea ? storedArea : { area: "서울", district: "전체" };

  const [area, setArea] = useState({
    cateId,
    sort,
    area: item.area,
    district: item.district,
    rank,
    program,
    page: 10,
  });

  const { Data, status } = useSelector((state) => {
    return { Data: state.list.data, status: state.list.status };
  });

  const complete = status === "complete";

  useEffect(() => {
    setIsLoading(false);
    if (!cateId || !sort) {
      navigate("/");
    }

    if (Number(cateId) !== Number(area.cateId) || Number(area.sort) !== Number(sort)) {
      setArea((prev) => ({ ...prev, cateId: Number(cateId), sort: Number(sort) }));
    }
  }, [cateId, sort]);

  useEffect(() => {
    startTransition(() => {
      dispatch(fetchList({ area }));
    });
  }, [area]);

  useEffect(() => {
    setScroll(Data.documentCount <= area.page);

    const { scrollHeight, clientHeight } = document.documentElement;

    const top = scrollHeight - clientHeight - 200;

    setTimeout(() => {
      isLoading &&
        window.scrollTo({
          top: top,
          left: 0,
          behavior: "smooth",
        });
    }, 500);
  }, [Data]);

  useEffect(() => {
    const handleScroll = throttle((e) => {
      const { scrollHeight, scrollTop, clientHeight } = document.documentElement;

      const scrollPosition = scrollTop + clientHeight;

      if (scrollPosition >= scrollHeight) {
        setArea((prev) => ({ ...prev, page: (prev.page += 10) }));
        setIsLoading(true);
      }
    }, 300);

    if (!scroll) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scroll]);

  const category = complete && NurshingData.filter((item) => item.cateId === Number(cateId));

  const moveDetailPage = useCallback((id) => navigate(`detail/${id}?navId=1`), [navigate]);

  //cardView Change
  const getLocalStorage = localStorage.getItem("view");
  const setLocalStorage = (name, value) => localStorage.setItem(name, value);

  useEffect(() => {
    !getLocalStorage && setLocalStorage("view", "default");

    if (getLocalStorage.includes("default")) {
      setViewChange(true);
      setFlag(1);
    } else {
      setViewChange(false);
      setFlag(2);
    }
  }, [viewChange]);

  const viewChangeHandle = useCallback(() => {
    setViewChange(!viewChange);

    setFlag((prev) => prev + 1);

    flag % 2 ? setLocalStorage("view", "flex") : setLocalStorage("view", "default");
  }, [viewChange]);

  //cardView Change End

  return (
    <>
      <Helmet>
        <title>{`${category[0]?.type} 찾아보기 | 또하나의가족, 또가`}</title>
      </Helmet>
      {complete && (
        <>
          <ServiceHeader category={category[0]?.type} />
          <ServiceSearch
            viewToggle={viewChangeHandle}
            view={viewChange}
            category={category[0]?.type}
            complete={complete}
            area={area}
            setArea={setArea}
            sort={sort}
          />

          <BodyLayout css={"service_layout"}>
            <ServiceList view={viewChange} Data={Data.result} moveDetailPage={moveDetailPage} complete={complete} />
          </BodyLayout>
          <ServiceFooter length={Data.result.length} area={area} />
        </>
      )}
    </>
  );
};

export default ServiceListContainer;
