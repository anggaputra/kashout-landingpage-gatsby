import React from "react";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/home4/Hero";
import ContentOne from "../sections/home4/ContentOne";
import ContentTwo from "../sections/home4/ContentTwo";
import ContentThree from "../sections/home4/ContentThree";
import Testimonial from "../sections/home4/Testimonial";

const Home3 = () => {
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
        <Hero className="position-relative mt-25 pt-20 pt-sm-24 pt-lg-34 pb-9 pb-lg-32" />
        <ContentOne className="pt-13 pt-lg-28 pb-13 pb-lg-26" />
        <ContentTwo className="bg-default-4 pt-15 pt-lg-30 pb-15 pb-lg-26" />
        <ContentThree className="pt-30 pt-lg-28 pb-15 pb-lg-30" />
        <Testimonial />
      </PageWrapper>
    </>
  );
};
export default Home3;
