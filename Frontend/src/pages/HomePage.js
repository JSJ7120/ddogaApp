import React from "react";
import HomeHeader from "../components/home/HomeHeader";
import HomeCounsel from "../components/home/HomeCounsel";
import HomeLayout from "../components/layout/Layout";
import HomeFindNurshing from "../components/home/HomeFindNurshing";
import HomeApp from "../components/home/HomeApp";
import HomeCompanyInfo from "../components/home/HomeCompanyInfo";
import HomeNavBar from "../components/home/HomeNavBar";
import HomeFooter from "../components/home/HomeFooter";
import Slider from "../components/common/Slider";
import { homeSliderImg } from "../assets/data/uiImg";
import { Helmet } from "react-helmet";

const HomePage = () => {
  const layout = "home_layout";

  const HomdeSlider = () => {
    const copyFirstImg = homeSliderImg[0];
    const copyLastImg = homeSliderImg[homeSliderImg.length - 1];

    homeSliderImg.push(copyFirstImg);
    homeSliderImg.unshift(copyLastImg);
    console.log(homeSliderImg``);

    return (
      <div style={{ paddingTop: "80px" }}>
        <Slider images={homeSliderImg} mainSlider={true} height={333} />
      </div>
    );
  };

  return (
    <>
      <Helmet>
        <title>요양상담 편안하게 | 또하나의가족, 또가</title>
      </Helmet>

      <HomeHeader />
      <HomdeSlider />
      <HomeLayout css={layout}>
        <HomeCounsel />
        <HomeFindNurshing />
        <HomeApp />
        <HomeCompanyInfo />
        <HomeFooter />
      </HomeLayout>
      <HomeNavBar />
    </>
  );
};

export default HomePage;
