import React from "react";


export default function Profile() {
    return (
        <div className="h-[322px] w-[353px] bg-[#ffffff] text-black rounded-[35px] flex flex-col items-start justify-between p-[21px]">
            <img style={{height: "100px", width: "100px"}} src="profile.png" alt="profile"/>
             <div>
             <div className="heading-text mb-[9px]">Simran Klazina</div>
            <div>369 258 147</div>
            <div>simran@mrine.ai</div>
             </div>
          
        </div>
    )
}