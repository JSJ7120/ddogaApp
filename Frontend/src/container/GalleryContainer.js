import React, { useEffect } from "react";
import GalleryHeader from "../components/serviceGallerys/GalleryHeader";
import GalleryContents from "../components/serviceGallerys/GalleryContents";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchGallery } from "../store/GalleryListSlice";
import NotFound from "../components/common/NotFound";
import { Helmet } from "react-helmet";
import Loading from "../components/common/Loading";

const GalleryContainer = () => {
  const [searchParams] = useSearchParams();
  const { id } = useParams();
  const noticeId = searchParams.get("noticeId");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const back = () => {
    navigate(`/service/detail/${id}?navId=3`);
  };

  const { data, status } = useSelector(({ galleryList }) => {
    return { data: galleryList.galleryData, status: galleryList.status };
  });

  const complete = status === "complete";
  const fail = status === "fail";
  const loading = status === "loading";

  useEffect(() => {
    dispatch(fetchGallery({ noticeId, id }));
  }, []);

  const renderComponent = () => {
    switch (fail) {
      case true:
        return <NotFound />;

      default:
        return (
          <>
            <Helmet>
              <title>{`${data?.title} | 또하나의가족, 또가`} </title>
            </Helmet>

            <GalleryHeader back={back} title={data?.title} />
            {!complete && <Loading loading={loading} />}
            {complete && <GalleryContents content={data?.content} complete={complete} />}
          </>
        );
    }
  };

  return renderComponent();
};

export default GalleryContainer;
