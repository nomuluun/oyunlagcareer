import { Carousel } from "flowbite-react";
export default function Nuurhuudas() {
  return (
    <div>
      <div className=" max-w-screen-xl md:grid grid-cols-2 gap-3 mx-auto pt-[80px]  h-auto">
        <div className="  p-12  text-[#373737]">
          <h1 className="md:text-[48px]  text-[32px] font-bold text-left leading-none py-4 my-4">
            Ирээдүйгээ тодорхойлж, <br />
            хичээхэд <span className="text-prp">найз</span> чинь байя.
          </h1>
          <p className="md:text-[24px] text-[16px] font-medium my-4 py-4">
            Ирээдүйн чиглэлээ тодорхойлох тест, мөрөөдлийн мэргэжлээ олох
            мэдээллийн сан, илүү ихийг сурах хичээлүүдийг найзаа болгоорой!
          </p>
          <div className="tovch md:text-[24px] text-[16px] rounded-full text-[#373737] bg-shar text-center flex items-center justify-center font-bold hover:text-white hover:bg-amber-500 w-48 h-16">
            {" "}
            <button>
              {" "}
              <a href="test">Тест өгөх</a>
            </button>
          </div>
          <div>
            <img
              src="/svg/Vector 3.png"
              alt=""
              className="absolute  left-[32vw] top-[63vh] hidden lg:block"
            />
          </div>
        </div>
        <div className="md:flex items-center justify-center px-8 py-6 hidden">
          <img
            src="/Saly-1.png"
            alt=""
            className="drop-shadow-2xl mx-auto w-full"
          />
        </div>
      </div>
      <div className=" bg-[rgb(255,255,255)] rounded-full max-w-screen-xl flex items-center justify-between md:mx-auto mx-8 text-prp font-extrabold md:px-32 md:py-10 px-4 py-8 md:text-[32px] text-[18px] md:my-40 my-15 index-shadow">
        <div>
          <p className="">48+ Мэргэжил</p>
        </div>
        <div className="bg-prp md:w-1 w-0.5 md:h-16 h-8"></div>
        <div>
          <p>16 Төрөл</p>
        </div>
        <div className="bg-prp md:w-1 w-0.5 md:h-16 h-8"></div>
        <div>
          <p>10+ Тэтгэлэг</p>
        </div>
      </div>
      <div className="mx-auto flex max-w-screen-xl items-center justify-center mt-20 text-left text-har">
        <div className=" m-10">
          <img src="/svg/Saly-35.png" alt="" />
        </div>
        <div className=" flex flex-col">
          <h1 className="md:text-[40px] text-[32px] font-bold">
            Тестийн ач холбогдол
          </h1>
          <p className="max-w-[521px] md:text-[24px] text-[16px] my-4">
            Энэхүү тест нь хувь хүмүүст өөрсдийн ур чадвар, сонирхол, үнэт
            зүйлсийн талаар илүү сайн ойлголт өгөх боломжийг олгодог.{" "}
          </p>
          <a href="" className="text-shar font-bold md:text-[20px] text-[12px]">
            Цааш унших
          </a>
        </div>
      </div>
      <div className="mx-auto flex flex-col justify-center items-center text-har font-bold mt-[100px] md:mb-[250px] mb-[125px]">
        <div>
          <h1 className="text-center md:text-[32px] max-w-[937px] text-[24px]">
            Танд аль мэргэжил хамгийн сайн тохирохыг олж мэдэхэд тусална.
          </h1>
        </div>
        <div className="flex max-w-[1000px] justify-between gap-5 items-center m-[40px]">
          <div className="flex flex-col justify-center items-center text-center">
            <img src="/svg/Zan.png" alt="" className="md:w-[88px]  w-[64px] " />
            <h1 className="md:text-[24px] text-[16px] my-5">Зан чанар</h1>
            <p className="md:text-[16px] text-[12px]">
              Create your Legite account on register button
            </p>
          </div>
          <div className="md:w-[108px] w-[55px] h-1 bg-[#FFE4BA]"></div>
          <div className="flex flex-col justify-center items-center text-center">
            <img
              src="/svg/aviyas.png"
              alt=""
              className="md:w-[88px] md:h-[88px] w-[64px]  "
            />
            <h1 className="md:text-[24px] text-[16px] my-5">Сонирхол</h1>
            <p className="md:text-[16px] text-[12px]">
              Add the amount currency you want to invest on Legite
            </p>
          </div>
          <div className="md:w-[108px]  w-[55px]  h-1 bg-[#FFE4BA]"></div>
          <div className="flex flex-col justify-center items-center text-center">
            <img
              src="/svg/interest.png"
              alt=""
              className="md:w-[88px]  w-[64px] h-[64px]"
            />
            <h1 className="md:text-[24px] text-[16px] my-5">
              Төрөлхийн авьяас
            </h1>
            <p className="md:text-[16px] text-[12px]">
              Confirm your crypto invest payment{" "}
            </p>
          </div>
          <div className="absolute left-[7vw] top-[215vh] hidden lg:block">
            <img src="/svg/chimeglel.png" alt="" />
          </div>
        </div>
      </div>
      <div className="mx-auto flex flex-col justify-center items-center text-har font-bold my-[20px] ">
        <div>
          <h1 className="text-center md:text-[40px] max-w-[937px] text-[32px]">
            Бидний давуу тал
          </h1>
        </div>
        <div className="flex max-w-[1000px] justify-between md:space-x-[80px] items-center m-[60px]">
          <div className="flex flex-col justify-center items-center text-center">
            <img
              src="/svg/Saly-9.png"
              alt=""
              className="md:w-[320px] w-[250px]"
            />
            <h1 className="md:text-[24px] text-[16px] text-prp ">
              24 цагийн үйлчилгээ
            </h1>
            <p className="md:text-[16px] text-[12px]">
              Бидний хурдан бөгөөд чанартай үйлчилгээ{" "}
            </p>
          </div>

          <div className="flex flex-col justify-center items-center text-center">
            <img
              src="/svg/Saly-19.png"
              alt=""
              className="md:w-[376px]  w-[270px]  "
            />
            <h1 className="md:text-[24px] text-[16px] text-prp my-5">
              Үнэ төлбөргүй
            </h1>
            <p className="md:text-[16px] text-[12px]">
              Ямар ч төлбөр шаардахгүй{" "}
            </p>
          </div>

          <div className="flex flex-col justify-center items-center text-center">
            <img
              src="/svg/Saly-34.png"
              alt=""
              className="md:w-[320px] w-[250px] "
            />
            <h1 className="md:text-[24px] text-[16px] text-prp my-5">
              Хэрэглэхэд хялбар
            </h1>
            <p className="md:text-[16px] text-[12px]">
              Хүн бүр ашиглахад ойлгомжтой{" "}
            </p>
          </div>
          <div>
            <img
              src="/svg/chimeglel2.png"
              alt=""
              className="absolute right-[2vw] top-[310vh] hidden lg:block"
            />
          </div>
        </div>
      </div>
      <div className="mx-auto md:flex justify-center items-center flex-col my-[100px] hidden">
        <div className="text-har md:text-[40px] font-bold mb-[30px]">
          <h1>Мэргэжлийн чиглэлүүд</h1>
        </div>
        <div className="grid md:grid-cols-4 gap-5 mt-[30px] ">
          <div className="bg-white rounded-[48px] flex items-center my-1 py-5 px-3 index-shadow">
            <div className="p-5">
              {" "}
              <img src="/svg/Icon1.png" alt="" />
            </div>
            <div className="">
              <h1 className="my-5 px-5 text-[24px] font-bold text-prp">
                Ажиглагч
              </h1>
              <p className="text-[14px] px-5">Эмч, Сувилагч</p>
            </div>
          </div>
          <div className="bg-white rounded-[48px] flex items-center my-1 py-5 px-3 index-shadow">
            <div className="p-5">
              {" "}
              <img src="/svg/Icon1.png" alt="" />
            </div>
            <div className="">
              <h1 className="my-5 px-5 text-[24px] font-bold text-prp">
                Ажиглагч
              </h1>
              <p className="text-[14px] px-5">Эмч, Сувилагч</p>
            </div>
          </div>
          <div className="bg-white rounded-[48px] flex items-center my-1 py-5 px-3 index-shadow">
            <div className="p-5">
              {" "}
              <img src="/svg/Icon1.png" alt="" />
            </div>
            <div className="">
              <h1 className="my-5 px-5 text-[24px] font-bold text-prp">
                Ажиглагч
              </h1>
              <p className="text-[14px] px-5">Эмч, Сувилагч</p>
            </div>
          </div>
          <div className="bg-white rounded-[48px] flex items-center my-1 py-5 px-3 index-shadow">
            <div className="p-5">
              {" "}
              <img src="/svg/Icon1.png" alt="" />
            </div>
            <div className="">
              <h1 className="my-5 px-5 text-[24px] font-bold text-prp">
                Ажиглагч
              </h1>
              <p className="text-[14px] px-5">Эмч, Сувилагч</p>
            </div>
          </div>
          <div className="bg-white rounded-[48px] flex items-center my-1 py-5 px-3 index-shadow">
            <div className="p-5">
              {" "}
              <img src="/svg/Icon1.png" alt="" />
            </div>
            <div className="">
              <h1 className="my-5 px-5 text-[24px] font-bold text-prp">
                Ажиглагч
              </h1>
              <p className="text-[14px] px-5">Эмч, Сувилагч</p>
            </div>
          </div>
          <div className="bg-white rounded-[48px] flex items-center my-1 py-5 px-3 index-shadow">
            <div className="p-5">
              {" "}
              <img src="/svg/Icon1.png" alt="" />
            </div>
            <div className="">
              <h1 className="my-5 px-5 text-[24px] font-bold text-prp">
                Ажиглагч
              </h1>
              <p className="text-[14px] px-5">Эмч, Сувилагч</p>
            </div>
          </div>
          <div className="bg-white rounded-[48px] flex items-center my-1 py-5 px-3 index-shadow">
            <div className="p-5">
              {" "}
              <img src="/svg/Icon1.png" alt="" />
            </div>
            <div className="">
              <h1 className="my-5 px-5 text-[24px] font-bold text-prp">
                Ажиглагч
              </h1>
              <p className="text-[14px] px-5">Эмч, Сувилагч</p>
            </div>
          </div>
          <div className="bg-white rounded-[48px] flex items-center my-1 py-5 px-3 index-shadow">
            <div className="p-5">
              {" "}
              <img src="/svg/Icon1.png" alt="" />
            </div>
            <div className="">
              <h1 className="my-5 px-5 text-[24px] font-bold text-prp">
                Ажиглагч
              </h1>
              <p className="text-[14px] px-5">Эмч, Сувилагч</p>
            </div>
          </div>
          <div className="bg-white rounded-[48px] flex items-center my-1 py-5 px-3 index-shadow">
            <div className="p-5">
              {" "}
              <img src="/svg/Icon1.png" alt="" />
            </div>
            <div className="">
              <h1 className="my-5 px-5 text-[24px] font-bold text-prp">
                Ажиглагч
              </h1>
              <p className="text-[14px] px-5">Эмч, Сувилагч</p>
            </div>
          </div>
          <div className="bg-white rounded-[48px] flex items-center my-1 py-5 px-3 index-shadow">
            <div className="p-5">
              {" "}
              <img src="/svg/Icon1.png" alt="" />
            </div>
            <div className="">
              <h1 className="my-5 px-5 text-[24px] font-bold text-prp">
                Ажиглагч
              </h1>
              <p className="text-[14px] px-5">Эмч, Сувилагч</p>
            </div>
          </div>
          <div className="bg-white rounded-[48px] flex items-center my-1 py-5 px-3 index-shadow">
            <div className="p-5">
              {" "}
              <img src="/svg/Icon1.png" alt="" />
            </div>
            <div className="">
              <h1 className="my-5 px-5 text-[24px] font-bold text-prp">
                Ажиглагч
              </h1>
              <p className="text-[14px] px-5">Эмч, Сувилагч</p>
            </div>
          </div>
          <div className="bg-white rounded-[48px] flex items-center my-1 py-5 px-3 index-shadow">
            <div className="p-5">
              {" "}
              <img src="/svg/Icon1.png" alt="" />
            </div>
            <div className="">
              <h1 className="my-5 px-5 text-[24px] font-bold text-prp">
                Ажиглагч
              </h1>
              <p className="text-[14px] px-5">Эмч, Сувилагч</p>
            </div>
          </div>
        </div>
      </div>
      <div className=" md:hidden h-56 ">
        <Carousel indicators={false} className="px-4">
          <div className="flex h-full items-center justify-center bg-white rounded-3xl">
            <div className="p-5">
              {" "}
              <img src="/svg/Icon1.png" alt="" />
            </div>
            <div className="">
              <h1 className=" text-[20px] font-bold text-prp">Ажиглагч</h1>
              <p className="text-[12px] ">Эмч, Сувилагч</p>
            </div>
          </div>
          <div className="flex h-full items-center justify-center bg-white rounded-3xl">
            <div className="p-5">
              {" "}
              <img src="/svg/Icon1.png" alt="" />
            </div>
            <div className="">
              <h1 className=" text-[20px] font-bold text-prp">Ажиглагч</h1>
              <p className="text-[12px] ">Эмч, Сувилагч</p>
            </div>
          </div>
          <div className="flex h-full items-center justify-center bg-white rounded-3xl">
            <div className="p-5">
              {" "}
              <img src="/svg/Icon1.png" alt="" />
            </div>
            <div className="">
              <h1 className=" text-[20px] font-bold text-prp">Ажиглагч</h1>
              <p className="text-[12px] ">Эмч, Сувилагч</p>
            </div>
          </div>
          <div className="flex h-full items-center justify-center bg-white rounded-3xl">
            <div className="p-5">
              {" "}
              <img src="/svg/Icon1.png" alt="" />
            </div>
            <div className="">
              <h1 className=" text-[20px] font-bold text-prp">Ажиглагч</h1>
              <p className="text-[12px] ">Эмч, Сувилагч</p>
            </div>
          </div>
          <div className="flex h-full items-center justify-center bg-white rounded-3xl">
            <div className="p-5">
              {" "}
              <img src="/svg/Icon1.png" alt="" />
            </div>
            <div className="">
              <h1 className=" text-[20px] font-bold text-prp">Ажиглагч</h1>
              <p className="text-[12px] ">Эмч, Сувилагч</p>
            </div>
          </div>
          <div className="flex h-full items-center justify-center bg-white rounded-3xl">
            <div className="p-5">
              {" "}
              <img src="/svg/Icon1.png" alt="" />
            </div>
            <div className="">
              <h1 className=" text-[20px] font-bold text-prp">Ажиглагч</h1>
              <p className="text-[12px] ">Эмч, Сувилагч</p>
            </div>
          </div>
          <div className="flex h-full items-center justify-center bg-white rounded-3xl">
            <div className="p-5">
              {" "}
              <img src="/svg/Icon1.png" alt="" />
            </div>
            <div className="">
              <h1 className=" text-[20px] font-bold text-prp">Ажиглагч</h1>
              <p className="text-[12px] ">Эмч, Сувилагч</p>
            </div>
          </div>
          <div className="flex h-full items-center justify-center bg-white rounded-3xl">
            <div className="p-5">
              {" "}
              <img src="/svg/Icon1.png" alt="" />
            </div>
            <div className="">
              <h1 className=" text-[20px] font-bold text-prp">Ажиглагч</h1>
              <p className="text-[12px] ">Эмч, Сувилагч</p>
            </div>
          </div>
          <div className="flex h-full items-center justify-center bg-white rounded-3xl">
            <div className="p-5">
              {" "}
              <img src="/svg/Icon1.png" alt="" />
            </div>
            <div className="">
              <h1 className=" text-[20px] font-bold text-prp">Ажиглагч</h1>
              <p className="text-[12px] ">Эмч, Сувилагч</p>
            </div>
          </div>
          <div className="flex h-full items-center justify-center bg-white rounded-3xl">
            <div className="p-5">
              {" "}
              <img src="/svg/Icon1.png" alt="" />
            </div>
            <div className="">
              <h1 className=" text-[20px] font-bold text-prp">Ажиглагч</h1>
              <p className="text-[12px] ">Эмч, Сувилагч</p>
            </div>
          </div>
          <div className="flex h-full items-center justify-center bg-white rounded-3xl">
            <div className="p-5">
              {" "}
              <img src="/svg/Icon1.png" alt="" />
            </div>
            <div className="">
              <h1 className=" text-[20px] font-bold text-prp">Ажиглагч</h1>
              <p className="text-[12px] ">Эмч, Сувилагч</p>
            </div>
          </div>
          <div className="flex h-full items-center justify-center bg-white rounded-3xl">
            <div className="p-5">
              {" "}
              <img src="/svg/Icon1.png" alt="" />
            </div>
            <div className="">
              <h1 className=" text-[20px] font-bold text-prp">Ажиглагч</h1>
              <p className="text-[12px] ">Эмч, Сувилагч</p>
            </div>
          </div>
          <div className="flex h-full items-center justify-center bg-white rounded-3xl">
            <div className="p-5">
              {" "}
              <img src="/svg/Icon1.png" alt="" />
            </div>
            <div className="">
              <h1 className=" text-[20px] font-bold text-prp">Ажиглагч</h1>
              <p className="text-[12px] ">Эмч, Сувилагч</p>
            </div>
          </div>
          <div className="flex h-full items-center justify-center bg-white rounded-3xl">
            <div className="p-5">
              {" "}
              <img src="/svg/Icon1.png" alt="" />
            </div>
            <div className="">
              <h1 className=" text-[20px] font-bold text-prp">Ажиглагч</h1>
              <p className="text-[12px] ">Эмч, Сувилагч</p>
            </div>
          </div>
          <div className="flex h-full items-center justify-center bg-white rounded-3xl">
            <div className="p-5">
              {" "}
              <img src="/svg/Icon1.png" alt="" />
            </div>
            <div className="">
              <h1 className=" text-[20px] font-bold text-prp">Ажиглагч</h1>
              <p className="text-[12px] ">Эмч, Сувилагч</p>
            </div>
          </div>
          <div className="flex h-full items-center justify-center bg-white rounded-3xl">
            <div className="p-5">
              {" "}
              <img src="/svg/Icon1.png" alt="" />
            </div>
            <div className="">
              <h1 className=" text-[20px] font-bold text-prp">Ажиглагч</h1>
              <p className="text-[12px] ">Эмч, Сувилагч</p>
            </div>
          </div>
        </Carousel>
      </div>
      <div className="md:mx-auto flex  flex-col md:flex-row items-center justify-center bg-prp max-w-[1200px] p-10 md:my-[30px] mt-[70px] rounded-[48px] mx-4">
        <div className="flex flex-col mr-10 md:gap-5 items-center md:items-start">
          <h1 className="text-white md:text-[32px] text-[20px] font-bold text-center ">
            АНУ-ын засгийн газрын тэтгэлэг
          </h1>
          <p className="text-white md:text-[24px] text-[12px] font-medium max-w-[504px] leading-none mb-6 text-center md:text-start">
            Unlock the power of digital assets and harness the potential of
            cryptocurrency investments with Legite!
          </p>
          <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#FBA728] duration-300  text-prp rounded-full bg-shar px-5 py-3 md:px-7 md:py-4 md:text-[24px] text-[16px] font-bold md:max-w-[260px] max-w-[130px]">
            {" "}
            Дэлгэрэнгүй
          </button>
        </div>
        <div className="bg-prp md:w-[398px] md:h-[301px] w-[250px] mt-5 md:mt-0 ">
          <img src="/svg/homezurag.png" alt="" />
        </div>
      </div>
    </div>
  );
}
