import React, { useEffect, useState, useRef } from "react";
import { Helmet } from "react-helmet";
import { useParams, useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchDetail } from "../store/ServiceDetailSlice";
import DetailHeader from "../components/serviceDetail/DetailHeader";
import DetailSlider from "../components/serviceDetail/DetailSlider";
import DetailCenterInfo from "../components/serviceDetail/DetailCenterInfo";
import DetailContentsNav from "./../components/serviceDetail/DetailContentsNav";
import DetailContentsFacilities from "./../components/serviceDetail/DetailContentsFacilities";
import DetailContentsContract from "./../components/serviceDetail/DetailContentsContract";
import DetailContentsNotification from "./../components/serviceDetail/DetailContentsNotification";
import DetailContentsTotalCounsel from "./../components/serviceDetail/DetailContentsTotalCounsel";
import DetailContentsReview from "./../components/serviceDetail/DetailContentsReview";

import { fetchMapsData } from "../api/naverMaps";
import DetailFooter from "../components/serviceDetail/DetailFooter";
import NotFound from "../components/common/NotFound";

const ServiceDetailContainer = () => {
  const [active, setActive] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const navId = searchParams.get("navId");
  const naverMap = useRef();
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = params;

  const { Data, status } = useSelector((state) => {
    return { Data: state.detail.data, status: state.detail.status };
  });

  const fail = status === "fail";
  const complete = status === "complete";

  useEffect(() => {
    const fetchData = async () => {
      const map = await fetchMapsData(Data?.address, naverMap);
      naverMap.current = map;
    };

    if (Number(navId) === 1 && complete) fetchData();
  }, [complete, navId]);

  useEffect(() => {
    if (navId === null || navId === "" || Number(navId) > 5) {
      setActive(1);
      navigate(`/service/detail/${id}?navId=${1}`);
    } else {
      setActive(Number(navId));
      navigate(`/service/detail/${id}?navId=${navId}`);
    }
  }, [navId]);

  useEffect(() => {
    dispatch(fetchDetail({ id: Number(id) }));

    complete && setActive(Number(navId));
  }, []);

  const navHandle = (navId) => {
    setActive(navId);
    Data?.images?.length > 0 ? window.scrollTo(0, 960) : window.scrollTo(0, 634);

    setSearchParams({ navId });
    navigate(`?navId=${navId}`);
  };

  const moveQA = (e, id) => {
    navigate(`/counselQA/${id}`);
  };

  function createMarkup(markup) {
    return { __html: markup };
  }

  const backHandle = () => {
    navigate(`/service?cateId=${Data.cateId}&sort=10`);
  };

  const back = () => {
    navigate(-1);
  };

  const renderComponent = () => {
    switch (active) {
      case 1:
        return (
          <DetailContentsFacilities
            Data={complete && Data.navId[0]}
            Markup={createMarkup}
            rank={Data.rank}
            naverMap={naverMap}
            address={Data.address}
            complete={complete}
          />
        );
      case 2:
        return <DetailContentsContract Data={complete && Data.navId[1]} Markup={createMarkup} />;
      case 3:
        return <DetailContentsNotification Data={complete && Data.navId[2]} id={id} />;
      case 4:
        return (
          <DetailContentsTotalCounsel
            isOnline={Data?.onlineCounsel}
            onlineCounselCount={Data.onlineCounselCount}
            phoneCounselCount={Data.phoneCounselCount}
            counselDetails={Data?.counselDetails}
            id={id}
            title={Data.title}
            navId={navId}
            moveQA={moveQA}
          />
        );
      case 5:
        return <DetailContentsReview />;

      default:
        break;
    }
  };

  return (
    <>
      <Helmet>
        <title>{`${Data.title} | 또하나의가족, 또가`}</title>
      </Helmet>
      {fail && (
        <>
          <DetailHeader Data={Data.title} isImage={Data?.images?.length > 0} backHandle={back} fail={fail} />
          <NotFound />
        </>
      )}
      {!fail && complete && (
        <>
          <DetailHeader Data={Data.title} isImage={Data?.images?.length > 0} backHandle={backHandle} />
          {Data?.images?.length > 0 && <DetailSlider Data={Data.images} backHandle={backHandle} />}
          <DetailCenterInfo Data={Data} />
          <DetailContentsNav navHandle={navHandle} active={active} />

          {renderComponent()}

          <DetailFooter id={id} title={Data.title} navId={navId} isOnline={Data?.onlineCounsel} />
        </>
      )}
    </>
  );
};

export default ServiceDetailContainer;
