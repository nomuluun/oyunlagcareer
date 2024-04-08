import { DataContext, NowJobContext } from "@/context/DataContext";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
export default function SuggestedCareer({ data }) {
  const router = useRouter();
  const { nowJob, setNowJob } = useContext(NowJobContext);
  let ab = String(data?.aboutJob);
  const handleSub = () => {
    setNowJob(data);
    // localStorage.setItem("nowJob", JSON.stringify(data))
    router.push("/job");
  };
  return (
    <div className="grid bg-[#ffffff] md:w-[20vw] text-[#373737] hover:bg-[#5E17EB] hover:text-[#ffffff] rounded-[48px] justify-evenly items-center shadow-[0_0px_120px_0px_rgba(94,23,235,0.09)] h-[250px] space-y-[20px] w-[60vw] max-w-[800px]">
      <button className="w-full" onClick={handleSub}>
        <h1 className="text-[20px] font-bold pt-5">
          {" "}
          {data?.jobTitle.charAt(0).toUpperCase() +
            data?.jobTitle.slice(1)}{" "}
        </h1>
        <div className="flex flex-row pt-4">
          <img src={data?.img} alt="" className="w-[90px]" />
          <p className=" pl-5 w-[190px] ">{ab.substr(0, 50)}...</p>
        </div>
        <div className="flex space-x-1 py-5 justify-evenly">
          <p className="font-bold font">ЭЕШ өгөх хичээлүүд:</p>
          <div className="flex -space-x-[15px]">
            {/* {data?.lesson?.map((el, i) => (
              // <li key={i}>{el}</li>
              <img src="" alt="" className="w-[38px]" />
            ))} */}
            <img src="/subject/bio.png" alt="" className="w-[38px]" />
            <img src="/subject/chem.png" alt="" className="w-[38px]" />
            <img src="/subject/mat.png" alt="" className="w-[38px]" />
          </div>
        </div>
      </button>
    </div>
  );
}
