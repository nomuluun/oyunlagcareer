import { jobList } from "../../utils/data";
import SuggestedCareer from "./SuggestedCareer";
import { uni } from "../../utils/data";
import { lesson } from "../../utils/data";
export default function Job({ data }) {
  console.log("jobdata", data);
  const jobs = jobList.filter(
    (dat, index) => dat.type == data?.type && dat.id != data?.id
  );
  return (
    <div className="">
      <img
        src="zurg.png"
        className="md:w-[10vw] absolute lg:top-[50vh] hidden lg:left-[10vw] w-[25vw] top-[40vh] md:top-[52vh] "
        alt=""
      />
      <div className="  max-w-screen-xl grid md:grid-cols-2 justify-items-center gap-x-3 gap-y-5 mx-auto pt-[2px] h-auto">
        <div className="  p-12  text-[#373737]">
          <h1 className="md:text-[48px]  text-[32px] font-extrabold text-left leading-none py-4 my-4">
            {data?.jobTitle}
          </h1>
          <p className=" text-[16px] font-medium my-1 py-1 tracking-wide">
            {data?.aboutJob}
          </p>
          <div className="text-[20px] text-shar font-bold w-48 h-16">
            {" "}
            <button> {/* <a href="#">Цааш унших</a> */}</button>
          </div>
        </div>
        <div className="md:flex items-center justify-center px-8 py-6 hidden max-w-[500px]">
          <img
            src="/sanhuu.png"
            alt=""
            className="drop-shadow-2xl mx-auto w-full"
          />
        </div>
        <div className="max-w-[490px] border-2 rounded-[30px] bg-[#F4F4F5] px-10 py-5 shadow-[0_0px_120px_0px_rgba(43,172,104,0.15)] mx-5">
          <div className="flex items-center mb-3 flex-grow-2">
            <img src="image 30.png" className="w-[50px] h-[50px]" alt="" />
            <h1 className="font-extrabold pl-3 text-[30px] text-[#2BAC68]">
              Давуу тал
            </h1>
          </div>
          <div>
            <ul className="list-disc space-y-2  min-w-[300px]">
              {data?.pros?.map((el, i) => (
                <li key={i}>{el}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="max-w-[490px] border-2 rounded-[30px] bg-[#F4F4F5] px-10 py-5 shadow-[0_0px_120px_0px_rgba(241,33,46,0.15)] mx-5">
          <div className="flex items-center mb-3">
            <img src="image 31.png" className="w-[50px] h-[50px]" alt="" />
            <h1 className="font-extrabold pl-3 text-[30px] text-[#F1212E]">
              Сул тал
            </h1>
          </div>
          <div>
            <ul className="list-disc space-y-2  min-w-[300px]">
              {data?.cons?.map((el, i) => (
                <li key={i}>{el}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div >
        <h1 className="md:text-xl text-[20px] font-bold md:pl-[20vw] pt-[90px] pb-[60px] text-center md:text-start ">
          ЭЕШ өгөх хичээлүүд / босго оноо
        </h1>
        <div className="flex justify-center">
          <table class="table-auto text-center">
            <thead className="">
              <tr className="">
                <th></th>
                {data?.university?.map((univer, index) => {
                  let uniName;
                  for (let i = 0; i < uni.length; i++) {
                    if (uni[i].uniId == univer) {
                      uniName = uni[i].uniName;
                      break;
                    }
                  }
                  return (
                    <th
                      key={index}
                      className="md:border-l-2 border-l border-[#373737] md:px-[5vw]"
                    >
                      {uniName}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody className="">
              {data?.lesson?.map((lessonData) => {
                let lesName;
                let lesImg;
                for (let i = 0; i < lesson.length; i++) {
                  if (lesson[i].lessonId == lessonData) {
                    lesName = lesson[i].lessonName;
                    lesImg = lesson[i].img;
                    break;
                  }
                }
                return (
                  <tr>
                    <td className="flex items-center p-7 w-[200px]">
                      <img src={lesImg} className="w-[38px] mr-2" alt="" />
                      {lesName}
                    </td>
                    {data?.university?.map((uniDat) => (
                      <td className="md:border-l-2 border-l border-[#373737] w-[100px] ">
                        440
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <h1 className="md:text-xl text-[20px] font-bold pl-[3vw] pt-[60px] pb-[60px] text-center">
          Төстэй мэргэжлүүд
        </h1>
      </div>
      <div className=" max-w-screen-xl mx-auto md:flex-row justify-center mt-[5px] flex-wrap flex-col p-5 gap-9 items-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border ">
        {jobs?.map((data, index) => (
          <SuggestedCareer key={index} data={data} />
        ))}
      </div>
    </div>
  );
}
