import React, { useEffect } from "react";
import GalleryListHeader from "../components/serviceGalleryList/GalleryListHeader";
import GalleryListContents from "../components/serviceGalleryList/GalleryListContents";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchGalleryList } from "../store/GalleryListSlice";
import NotFound from "../components/common/NotFound";
import { Helmet } from "react-helmet";
import Loading from "../components/common/Loading";

const GalleryListContainer = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchGalleryList({ id }));
  }, []);

  const { data, status } = useSelector(({ galleryList }) => {
    return { data: galleryList.data, status: galleryList.status };
  });

  const complete = status === "complete";
  const fail = status === "fail";
  const loading = status === "loading";

  const renderComponent = () => {
    switch (fail) {
      case true:
        return <NotFound />;

      default:
        if (!complete) return <Loading loading={loading} />;
        return (
          <>
            <Helmet>
              <title>갤러리 | 또하나의가족, 또가</title>
            </Helmet>

            <GalleryListHeader navigate={navigate} />
            <GalleryListContents Data={data} id={id} complete={complete} />
          </>
        );
    }
  };

  return renderComponent();
};

export default GalleryListContainer;
