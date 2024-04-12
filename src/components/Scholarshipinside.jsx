import { scholarship } from "../../utils/data";
export default function Scholarshipinside({data}) {
  
  console.log("data " + data);
  let header=scholarship[data]?.scholarTitle;
  console.log(header);
  return (
    <div>
      <div className="max-w-screen-xl font mx-auto pt-[80px]  ">
        <div className="md:text-[40px] text-[32px] text-har font-bold h-auto flex items-center justify-center p-4">
          <h1>АНУ-ын засгийн газрын тэтгэлэгүүд</h1>
        </div>
        <div className="flex items-center justify-center p-4">
          <div className="md:w-[466px] hidden md:block">
            <img src="/svg/Saly-19.png" alt="" className="w-full" />
          </div>
          <div className="text-har">
            <h1 className="md:text-[32px] text-[24px] font-bold">
              {/* 1. Fulbright Foreign Student Program */}
              {header}
            </h1>
            <p className="max-w-[588px] md:text-[20px] text-[16px]">
              {scholarship[data]?.aboutScholar}
            </p>
            <div className="mt-4 md:text-[20px] font-bold mb-4">
              <a href="https://foreign.fulbrightonline.org/about/foreign-student-program" className="text-shar ">
                Цааш унших
              </a>
            </div>
          </div>
        </div>
        <div className="md:flex justify-center items-top mt-10">
          <div className="bg-white rounded-[30px] drop-shadow-xl md:w-[286px] md:h-[330px] py-5 px-5 text-left text-har mx-10 my-5">
            <div className="font-bold md:text-[24px] text-center mb-4">
              <h1>Давуу тал</h1>
            </div>
            <div>
              <ul className=" md:text-[16px] text-[12px] space-y-2 font-medium ">
                {scholarship[data]?.pros?.map((el, i) => (
                  <li key={i}>{el}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="bg-white md:w-[579px] md:h-[330px] rounded-[30px] drop-shadow-xl text-har py-6 px-4 mx-10 my-5">
            <div className="md:text-[24px] font-bold text-center">
              <h1>Тавигдах шаардлага</h1>
            </div>
            <div>
              <ul className="md:text-[16px]  text-[12px] space-y-5 font-medium ">
                {scholarship[data]?.require?.map((el, i) => (
                  <li key={i}>{el}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
