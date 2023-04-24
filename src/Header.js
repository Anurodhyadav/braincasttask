import React from "react";

export default function Header() {
  return (
    <nav class="bg-[#26719f] py-2 md:py-4">
      <div class="container px-4 mx-auto md:flex md:items-center">
        <div class="flex justify-between items-center">
          <img src="mainLogo.svg" alt="mainLogo" />
          <button
            class="border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden"
            id="navbar-toggle"
          >
            <i class="fas fa-bars"></i>
          </button>
        </div>

        <div
          class="hidden md:flex flex-col font-[600] text-[22px] leading-[26px] text-[#ffffff] md:flex-row md:ml-auto mt-3 md:mt-0"
          id="navbar-collapse"
        >
          <div class="p-2 lg:px-4 md:mx-2 cursor-pointer rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">
            Dashboard
          </div>
          <div class="p-2 lg:px-4 md:mx-2 cursor-pointer  rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">
            Reports
          </div>
          <div class="p-2 lg:px-4 md:mx-2 cursor-pointer rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">
            Neuropsychology
          </div>
          <div class="p-2 lg:px-4 md:mx-2 cursor-pointer rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">
            Neuroradiology
          </div>
          <div class="p-2 lg:px-4 md:mx-2 cursor-pointer rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">
            Bookings
          </div>
          <div className="rounded-[50%]">
            <img
              style={{ height: "50px", width: "50px" }}
              src="profile.png"
              alt="profile"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
