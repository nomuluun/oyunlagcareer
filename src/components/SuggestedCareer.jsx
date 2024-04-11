import { DataContext, NowJobContext } from "@/context/DataContext";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import { lesson } from "../../utils/data";
export default function SuggestedCareer({ data }) {
  const router = useRouter();
  const { nowJob, setNowJob } = useContext(NowJobContext);
  let ab = String(data?.aboutJob);
  const handleSub = () => {
    setNowJob(data);
    router.push("/job");
  };
  return (
    <div className="grid bg-[#ffffff] w-full text-[#373737] hover:bg-[#5E17EB] hover:text-[#ffffff] rounded-[48px] justify-evenly items-center shadow-[0_0px_120px_0px_rgba(94,23,235,0.09)] h-[240px] space-y-[20px] ">
      <button className="w-full" onClick={handleSub}>
        <h1 className="md:text-[20px] text-[16px]  font-bold pt-5"> {data?.jobTitle} </h1>
        <div className="flex flex-row pt-4">
          <img src={data?.img} alt="" className="w-[85px]" />
          <p className=" pl-3 w-[180px] ">{ab.substr(0, 50)}...</p>
        </div>
        <div className="flex space-x-1 py-3 justify-evenly">
          <p className="font-bold font">ЭЕШ өгөх хичээлүүд:</p>
          <div className="flex -space-x-[15px]">
            {data?.lesson?.map((lessonId, i) => {
              const lessonItem = lesson.find((lesson) => lesson.lessonId === lessonId);
              if(lessonItem)return(
                <img key={i} src={lessonItem?.img} className="w-[38px]" />
              )
              else return(
                null
              )
            })}
          </div>
        </div>
      </button>
    </div>
  );
}
