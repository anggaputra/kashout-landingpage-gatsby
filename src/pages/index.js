import React from "react";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/home2/Hero";
import HowTo from "../sections/home2/Progress";
import Content1 from "../sections/home2/Content1";
import SaveNow from "../sections/home2/Content2";
import Qoins from "../sections/home2/Content3";
import Cta from "../sections/home2/Cta";

const Home2 = () => {
  return (
    <>
      <PageWrapper
        themeConfig={{
          headerClassName: "site-header--menu-right",
          headerButton: (
            <>
            </>
          ),
          footerStyle: "style2",
        }}
      >
        <Hero className="pt-11 pt-lg-34 pb-8 pb-lg-33" />
        <HowTo className="pb-lg-21 border-top border-default-color-1" />
        <Content1 className="pb-10 pb-sm-5 pb-lg-14" />
        <SaveNow className="pb-0 pb-lg-31" />
        <Qoins className="pb-12 pb-lg-25" />
        <Cta className="bg-images" />
      </PageWrapper>
    </>
  );
};
export default Home2;
