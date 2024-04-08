import { DataContext, NowJobContext } from "@/context/DataContext";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";

export default function SuggestedCareer({ data }) {
  const router = useRouter();
  const { nowJob, setNowJob } = useContext(NowJobContext);
  let ab = String(data.aboutJob);
  const handleSub = () => {
    setNowJob(data);
    // localStorage.setItem("nowJob", JSON.stringify(data))
    router.push("/job");
  };
  return (
    <div className="lg:w-[30%] bg-[#ffffff] text-[#5E17EB] hover:bg-[#5E17EB] hover:text-[#ffffff] rounded-[48px] flex flex-col justify-center items-center h-[247px] space-y-[20px] box-shad w-full max-w-[]">
      <button onClick={handleSub}>
        <h1 className="text-[24px] font-bold pt-5">
          {" "}
          {data.jobTitle.charAt(0).toUpperCase() + data.jobTitle.slice(1)}{" "}
        </h1>
        <div className="flex flex-row justify-around pt-5">
          <img src="/svg/Rectangle 14.png" alt="" className="w-[90px]" />
          <p className="w-[182px] ">{ab.substr(0, 50)}...</p>
        </div>
        <div className="flex space-x-5 py-5 justify-around">
          <p className="font-bold ">ЭЕШ өгөх хичээлүүд</p>
          <div className="flex -space-x-[20px]">
            <img src="/svg/bio.png" alt="" className="w-[38px]" />
            <img src="/svg/chem.png" alt="" className="w-[38px]" />
            <img src="/svg/math.png" alt="" className="w-[38px]" />
          </div>
        </div>
      </button>
    </div>
  );
}
