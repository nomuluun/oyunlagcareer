import { SidebarContext } from "@/context/DataContext";
import SuggestedCareer from "./SuggestedCareer";
import { useContext, useState } from "react";
import { jobList } from "../../utils/data";
export default function CareerResult() {
  const { result, setResult} = useContext(SidebarContext);
  const [aboutState, setAboutState] = useState(true);
  const jobs = jobList.filter((data,index)=>data.type == result[0]?.typeId);
  console.log("jos",jobs);
  const subStr =String(result[0]?.aboutType);
  let newStr = "";
  let space=0;
  for (let i = 0; i < subStr.length; i++) {
    if(subStr[i]==" "){
        space++;
    }
    newStr += subStr[i];
    if(space==20)break;
  }

  console.log(result);
  function handlerBtn() {
    setAboutState(!aboutState);
  }
  return (
    <div className="bg-[#f5f5f5]">
      <div className=" max-w-screen-xl md:grid grid-cols-2 gap-3 mx-auto font h-auto">
        <div className="  p-12  text-[#373737]">
          <h1 className="md:text-[48px] text-[32px] font-extrabold text-left leading-none py-4 ">
            Үр дүн: <br />
          </h1>
          <h1 className="md:text-[48px] text-[32px] font-extrabold text-left leading-none py-2 my-4 ">
            {" "}
            Та бол <span className="text-[#5E17EB]">{result[0]?.nme}</span>{" "}
            төрлийн хүн.
          </h1>
          <div>
            <span className="md:text-[24px] text-[16px] font-medium my-4 pt-4">
              {aboutState ? newStr + "..." : result[0]?.aboutType}
            </span>
            <button
              className="md:text-[20px] text-[16px]  text-[#5E17EB]  text-center flex items-center justify-center font-medium "
              onClick={handlerBtn}
            >
              {" "}
              {aboutState ? "Цааш унших" : "Хураах"}
            </button>
          </div>
          <div></div>
        </div>
        <div className="md:flex items-start justify-center px-8 lg:py-[2vh] py-[6vh] hidden">
          <img
            src="/svg/result.png"
            alt=""
            className="drop-shadow-2xl mx-auto w-[80%]"
          />
        </div>
      </div>
      <div className="max-w-[1200px] m-auto ">
        <h1 className="md:text-[34px]  text-[20px] font-bold text-center text-[#373737]">
          Танд тохирох топ мэргэжлүүд
        </h1>
        <div className="flex md:flex-row justify-evenly mt-[30px] flex-wrap flex-col p-5 gap-9 items-center">
          {jobs?.map((data, index) => (
            <SuggestedCareer key={index} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
}
