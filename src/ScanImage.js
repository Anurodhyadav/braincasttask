import React from "react";

export default function ScanImage() {
  return (
    <div className="rounded-[35px] bg-[#ffffff] h-[280px] flex flex-col ">
      <div className="h-[60px] flex justify-start items-start">
        <div className="mt-[21px] ml-[16px] heading-text">Grey Matters</div>
      </div>

        <img className="rounded-b-[35px]" style={{ height: "220px", width: '100%' }} src="ScanImage.png" alt="ScanImage" />

    </div>
  );
}
