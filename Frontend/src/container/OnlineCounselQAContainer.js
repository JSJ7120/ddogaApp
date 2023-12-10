import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import QAContents from "../components/serviceQA/QAContents";
import { fetchQAItem } from "../store/OnlineCounselSlice";
import QAHeader from "../components/serviceQA/QAHeader";
import NotFound from "../components/common/NotFound";

const OnlineCounselQAContainer = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { data, status } = useSelector((state) => {
    return { data: state.counsel.data, status: state.counsel.status };
  });
  const complete = status === "complete";

  const fail = status === "fail";

  useEffect(() => {
    dispatch(fetchQAItem({ id }));
  }, []);

  const renderComponent = () => {
    switch (fail) {
      case true:
        return <NotFound />;

      default:
        if (!complete) return null;
        return (
          <>
            <QAHeader navigate={navigate} />
            <QAContents data={complete && data} complete={complete} />
          </>
        );
    }
  };

  return renderComponent();
};

export default OnlineCounselQAContainer;
