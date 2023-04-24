import React, { useState } from "react";

export default function GenerateReportWrapper() {
  const [date, setDate] = useState("2023-01-31");
  const updateDateValue = (e) => {
    const updatedValue = e.target.value;
    setDate(updatedValue);
  };
  return (
    <div className="h-[147px] flex justify-between items-end bg-[#ffffff] rounded-[35px] p-[50px]">
      <div className="flex justify-start items-center gap-[26px]">
        <div>
          <label for="select date" className="block heading-text mb-2">
            Select Date
          </label>
          <input
            type="date"
            className=" cursor-pointer smaller-text bg-[#ffffff] border-[1px] border-[#4EAEEA]  rounded-[10px]  w-[279px] h-[45px] p-2.5"
            onChange={(e) => updateDateValue(e)}
            value={date}
            required
          ></input>
        </div>
        <div>
          <label for="Report Type" className="block heading-text mb-2 ">
            Report Type
          </label>
          <select className="bg-[#ffffff] smaller-text border-[#4EAEEA] border-[1px] cursor-pointer rounded-[10px]  w-[279px] h-[45px] p-2.5 ">
            <option selected>Grey Matter Report</option>
            <option value="R1">Report Type1</option>
            <option value="R2">Report Type2</option>
            <option value="R3">Report Type3</option>
            <option value="R4">Report Type4</option>
          </select>
        </div>
      </div>

      <div className="bg-[#4eaeea] font-[600] cursor-pointer rounded-[20px] w-[192px] h-[44px] text-center text-[#ffffff] p-[8px]">
        Generate
      </div>
    </div>
  );
}
