import Multi from "@/components/Multi";
import { useState } from "react";
import { jobList } from "../../utils/data";
import SuggestedCareer from "@/components/SuggestedCareer";

export default function Career() {
  const [selectJob, setSelectJob] = useState(jobList);
  return (

    <div className="bg-[#F5F4F9] max-w-screen-xl gap-x-3 gap-y-10 mx-auto px-5 md:pt-[40px] pt-[30px] h-auto">
     <div className="flex">
        <div className=" grid md:grid-cols-3 md:pt-[10px]">
          <Multi />
      <img
        src="Saly-10.png"
        className="relative col-span-1 hidden md:block w-full max-w-[500px] "
        alt=""
        />

        </div>
    
      </div>
    </div>
  );
}
