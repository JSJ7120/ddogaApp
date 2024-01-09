import React, { useCallback, useEffect, useState } from "react";
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
import Loading from "../components/common/Loading";

const ServiceListContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [viewChange, setViewChange] = useState(true);
  const [flag, setFlag] = useState(1);
  const [scroll, setScroll] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams] = useSearchParams();

  const cateId = searchParams.get("cateId");
  const sort = searchParams.get("sort");

  const storedProgram = localStorage.getItem("program");
  const storedRank = localStorage.getItem("rank");
  const storedArea = JSON.parse(localStorage.getItem("area"));
  const storedSortId = JSON.parse(localStorage.getItem("sortId"));

  const program = storedProgram ? storedProgram.split(",") : ["all"];
  const rank = storedRank ? storedRank.split(",") : ["all"];
  const item = storedArea ? storedArea : { area: "서울", district: "전체" };
  const sortId = storedSortId ? storedSortId : 10;

  const [area, setArea] = useState({
    cateId,
    sort: sortId,
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
  const loading = status === "loading";

  useEffect(() => {
    if (!cateId || !sort) {
      navigate("/");
    }

    if (Number(cateId) !== Number(area.cateId) || Number(area.sort) !== Number(sort)) {
      setArea((prev) => ({ ...prev, cateId: Number(cateId), sort: Number(sort) }));
    }
  }, [cateId, sort]);

  useEffect(() => {
    dispatch(fetchList({ area }));
  }, [area]);

  useEffect(() => {
    setScroll(Data.documentCount === Data?.result?.length);
    if (!isLoading) return;

    const moveScroll = () => {
      const { scrollHeight, clientHeight } = document.documentElement;

      const top = scrollHeight - clientHeight - 1000;

      window.scrollTo({
        top,
        left: 0,
      });
    };

    moveScroll();
  }, [Data]);

  useEffect(() => {
    const handleScroll = throttle((e) => {
      const { scrollHeight, scrollTop, clientHeight } = document.documentElement;

      const scrollPosition = scrollTop + clientHeight;

      if (scrollPosition >= scrollHeight) {
        setArea((prev) => ({ ...prev, page: prev.page + 10 }));
        if (scrollHeight > 1000) {
          setIsLoading(true);
        }
      }
    }, 700);

    if (!scroll) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const category = complete && NurshingData.filter((item) => item.cateId === Number(cateId));

  const moveDetailPage = useCallback((id) => navigate(`detail/${id}?navId=1`), [navigate]);

  const getLocalStorage = localStorage.getItem("view");
  const setLocalStorage = (name, value) => localStorage.setItem(name, value);

  useEffect(() => {
    !getLocalStorage && setLocalStorage("view", "default");

    if (getLocalStorage?.includes("default")) {
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
        <title>{complete && `${category[0]?.type} 찾아보기 | 또하나의가족, 또가`}</title>
      </Helmet>
      {loading && <Loading loading={loading} />}

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
