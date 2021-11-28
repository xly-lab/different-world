// @ts-ignore
import ReactFullpage from "@fullpage/react-fullpage";
import React from "react";
import FirstSection from "./module/FirstSection";
import SecondSection from "./module/SecondSection";

const Fullpage = () => (
  <ReactFullpage
    //fullpage options
    licenseKey={"OPEN-SOURCE-GPLV3-LICENSE"}
    scrollingSpeed={1000} /* Options here */
    scrollOverflowReset={true}
    render={(data: any) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section">
            <FirstSection
              down={() => data.fullpageApi.moveSectionDown()}
              up={() => data.fullpageApi.moveSectionUp()}
            />
          </div>
          <div className="section">
            <SecondSection
              up={() => data.fullpageApi.moveSectionUp()}
              down={() => data.fullpageApi.moveSectionDown()}
            />
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default Fullpage;
