import React from "react";
import Header from "./Header";
import Profile from "./Profile";
import ScanImage from "./ScanImage";
import Statistics from "./Statistics";
import Charts from "./Chart";
import GenerateReportWrapper from "./GenerateReportWrapper";

export default function App() {
  return (
    <div className="bg-[#F5F5F5] pb-[66px] ">
      <Header />
      <div className="flex justify-center items-start gap-[42px] w-full mt-[66px] mx-[33px] ">
        <div className="basis-[70%] flex flex-col gap-[26px]">
          <GenerateReportWrapper />
          <ScanImage />
          <Statistics />
          <Charts />

          <div className="rounded-[35px] bg-[#ffffff] h-[147px] flex flex-col p-[21px] ">
            <div className="heading-text mb-[18px]">Interpretation</div>
            <div>
              Your brain is normal in appearance on this scan. No abnormal
              lesions, tumors, or structural abnormalities are seen. The
              ventricular system, sulci, and gyri are all well defined and
              symmetric. The brainstem and cerebellum are also normal in
              appearance
            </div>
          </div>
        </div>
        <div className="basis-[30%] flex flex-col gap-[26px]">
          <Profile />
          <div className="rounded-[35px] w-[353px] bg-[#ffffff] h-[690px] p-[21px]">
            Your brain is normal in appearance on this scan. No abnormal
            lesions, tumors, or structural abnormalities are seen. The
            ventricular system, sulci, and gyri are all well defined and
            symmetric. The brainstem and cerebellum are also normal in
            appearance
          </div>
        </div>
      </div>
    </div>
  );
}
