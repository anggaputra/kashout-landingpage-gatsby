import React from "react";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/home2/Hero";
import HowTo from "../sections/home2/Progress";
import RewardsImage from "../sections/home2/Content1";
import SaveNow from "../sections/home2/Content2";
import Rewards from "../sections/home2/Content3";
import About from "../sections/home2/Cta";

const Home2 = () => {
  return (
    <>
      <PageWrapper
        themeConfig={{
          headerClassName: "site-header--menu-right",
          headerButton: <></>,
          footerStyle: "style2",
        }}
      >
        <Hero className="pt-11 pt-lg-34 pb-6 pb-lg-30" />
        <HowTo className="pb-lg-26 border-top border-default-color-1" />
        <Rewards className="pb-12 pb-lg-25" />
        <RewardsImage className="pb-0 pb-sm-0 pb-lg-0" />
        <About className="bg-dark-cloud" />
        <SaveNow className="pt-20 pb-lg-21 border-top border-default-color-1" />
      </PageWrapper>
    </>
  );
};
export default Home2;
