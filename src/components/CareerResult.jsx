import SuggestedCareer from "./SuggestedCareer";
export default function CareerResult() {
  return (
    <div>
      <div className=" max-w-screen-xl md:grid grid-cols-2 gap-3 mx-auto pt-[80px]  h-auto">
        <div className="  p-12  text-[#373737]">
          <h1 className="md:text-[48px]  text-[32px] font-extrabold text-left leading-none py-4 my-4">
            Үр дүн: <br />
            Та бол<span className="text-[#5E17EB]"> Ажиглагч </span>төрлийн хүн.
          </h1>
          <p className="md:text-[24px] text-[16px] font-medium my-4 pt-4">
            Таны нарийн ширийн зүйлд чиглэсэн, хариуцлагатай зан чанар таныг
            найдвартай, нямбай хувь хүн гэдгээрээ ялгаруулдаг...
          </p>
          <button className="md:text-[20px] text-[16px]  text-[#FFBD59]  text-center flex items-center justify-center font-medium ">
            {" "}
            <a href="test">Цааш унших</a>
          </button>
          <div>
            <img
              src="/svg/pic2.png"
              alt=""
              className="absolute  left-[34vw] top-[55vh] hidden md:block"
            />
          </div>
        </div>
        <div className="md:flex items-center justify-center px-8 py-6 hidden">
          <img
            src="/svg/result.png"
            alt=""
            className="drop-shadow-2xl mx-auto w-full"
          />
        </div>
      </div>
      <div>
        <h1 className="md:text-[48px]  text-[20px] font-bold text-center text-[#373737]">
          Танд тохирох топ <span className="text-[#FFBD59]">3</span> мэргэжил
        </h1>
        <div>
          <SuggestedCareer />
        </div>
      </div>
    </div>
  );
}
