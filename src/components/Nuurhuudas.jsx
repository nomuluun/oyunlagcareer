import { Carousel } from "flowbite-react";
export default function Nuurhuudas() {
  return (
    <div>
      <div className=" font max-w-screen-xl md:grid grid-cols-2 gap-3 mx-auto   h-auto">
        <div className="  p-12  text-[#373737]">
          <h1 className="md:text-[48px]  text-[32px] font-bold text-left leading-none py-4 my-4">
            Ирээдүйгээ тодорхойлж, <br />
            хичээхэд <span className="text-prp">найз</span> чинь байя.
          </h1>
          <p className="md:text-[24px] text-[16px] font-medium my-4 py-4">
            Ирээдүйн чиглэлээ тодорхойлох тест, мөрөөдлийн мэргэжлээ олох
            мэдээллийн сан, илүү ихийг сурах хичээлүүдийг найзаа болгоорой!
          </p>
          <div className="tovch   md:text-[24px] text-[16px] rounded-full text-[#373737] bg-shar text-center flex items-center justify-center font-bold hover:text-white hover:bg-amber-500 md:w-48 md:h-16 w-36">
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

      <div className=" bg-[rgb(255,255,255)] rounded-full max-w-screen-xl flex items-center justify-between md:mx-auto mx-8 text-prp font-extrabold md:px-24 md:py-10 px-6 py-6 md:text-[28px] text-[16px] md:my-40 my-15 index-shadow">

        <div>
          <p className="">48+ Мэргэжил</p>
        </div>
        <div className="bg-prp border-solid md:w-1 w-0.5 md:h-16 h-8"></div>
        <div>
          <p>16 Төрөл</p>
        </div>
        <div className="bg-prp border-solid md:w-1 w-0.5 md:h-16 h-8"></div>
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
          <p className="max-w-[521px] md:text-[24px] text-[16px] my-4 pr-8">
            Энэхүү тест нь хувь хүмүүст өөрсдийн ур чадвар, сонирхол, үнэт
            зүйлсийн талаар илүү сайн ойлголт өгөх боломжийг олгодог.{" "}
          </p>
          <a href="" className="text-shar font-bold md:text-[20px] text-[12px]">
            Цааш унших
          </a>
        </div>
      </div>
      <div className="mx-auto flex flex-col justify-center items-center text-har font-bold mt-[100px] md:mb-[250px] ">
        <div>
          <h1 className="text-center md:text-[32px] max-w-[937px] text-[24px]">
            Танд аль мэргэжил хамгийн сайн тохирохыг олж мэдэхэд тусална.
          </h1>
        </div>
        <div className="md:flex max-w-[1000px] justify-between gap-5 items-center m-[40px] ">
          <div className="flex flex-col justify-center items-center text-center">
            <img src="/svg/Zan.png" alt="" className="md:w-[88px]  w-[64px] " />
            <h1 className="md:text-[24px] text-[16px] md:my-5">Зан чанар</h1>
            <p className="md:text-[16px] text-[12px]">
              Create your Legite account on register button
            </p>
          </div>
          <div className="md:w-[108px] w-[55px] h-1 bg-[#FFE4BA] hidden md:block"></div>
          <div className="flex flex-col justify-center items-center text-center md:mt-0 mt-5">
            <img
              src="/svg/aviyas.png"
              alt=""
              className="md:w-[88px] md:h-[88px] w-[64px]  "
            />
            <h1 className="md:text-[24px] text-[16px] md:my-5 ">Сонирхол</h1>
            <p className="md:text-[16px] text-[12px]">
              Add the amount currency you want to invest on Legite
            </p>
          </div>
          <div className="md:w-[108px]  w-[55px]  h-1 bg-[#FFE4BA] hidden md:block"></div>
          <div className="flex flex-col justify-center items-center text-center md:mt-0 mt-5">
            <img
              src="/svg/interest.png"
              alt=""
              className="md:w-[88px]  w-[64px] h-[64px]"
            />
            <h1 className="md:text-[24px] text-[16px] md:my-5">
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
      <div className="mx-auto md:flex justify-center items-center flex-col my-[100px] hidden max-w-screen-xl">
        <div className="text-har md:text-[40px] font-bold mb-[30px]">
          <h1>Мэргэжлийн зан чанарууд</h1>
        </div>
        <div className="grid md:grid-cols-4 gap-5 mt-[30px] ">
          <div className="bg-white rounded-[48px] flex items-center justify-center my-1 py-5 px-3 index-shadow transition delay-100 hover:bg-[#DFDFDF]">
            <button>
              <div className="p-5 flex items-center justify-center">
                {" "}
                <img
                  src="/svg/Zanchanar/inspector.png"
                  alt=""
                  className="w-[88px]"
                />
              </div>
              <div className="">
                <h1 className="my-3  text-[24px] font-bold text-prp">
                  Ажиглагч
                </h1>
                <p className="text-[14px] px-5">
                  Кибер аюулгүй байдал хангагч, Архелогич
                </p>
              </div>
            </button>
          </div>
          <div className="bg-white rounded-[48px] flex items-center justify-center my-1 py-5 px-3 index-shadow transition delay-100 hover:bg-[#DFDFDF]">
            <button>
              <div className="p-5 flex items-center justify-center">
                {" "}
                <img
                  src="/svg/Zanchanar/supporter.png"
                  alt=""
                  className="w-[88px]"
                />
              </div>
              <div className="">
                <h1 className="my-3  text-[24px] font-bold text-prp">
                  Дэмжигч
                </h1>
                <p className="text-[14px] px-5">Нийгмийн ажилтан, Мэргэжил сонголтын зөвлөх</p>
              </div>
            </button>
          </div>
          <div className="bg-white rounded-[48px] flex items-center justify-center my-1 py-5 px-3 index-shadow transition delay-100 hover:bg-[#DFDFDF]">
            <button>
              <div className="p-5 flex items-center justify-center">
                {" "}
                <img
                  src="/svg/Zanchanar/counselor.png"
                  alt=""
                  className="w-[88px]"
                />
              </div>
              <div className="">
                <h1 className="my-3  text-[24px] font-bold text-prp">
                  Зөвлөгч
                </h1>
                <p className="text-[14px] px-5">Сэтгэл зүйч, Аялал жуучлагч</p>
              </div>
            </button>
          </div>
          <div className="bg-white rounded-[48px] flex items-center justify-center my-1 py-5 px-3 index-shadow transition delay-100 hover:bg-[#DFDFDF]">
            <button>
              <div className="p-5 flex items-center justify-center">
                {" "}
                <img
                  src="/svg/Zanchanar/strategist.png"
                  alt=""
                  className="w-[88px]"
                />
              </div>
              <div className="">
                <h1 className="my-3  text-[24px] font-bold text-prp">
                  Стратегич
                </h1>
                <p className="text-[14px] px-5">
                  Хэрэглээний математикч, Эдийн засагч
                </p>
              </div>
            </button>
          </div>
          <div className="bg-white rounded-[48px] flex items-center justify-center my-1 py-5 px-3 index-shadow transition delay-100 hover:bg-[#DFDFDF]">
            <button>
              <div className="p-5 flex items-center justify-center">
                {" "}
                <img
                  src="/svg/Zanchanar/artisan.png"
                  alt=""
                  className="w-[88px]"
                />
              </div>
              <div className="">
                <h1 className="my-3  text-[24px] font-bold text-prp">Дархан</h1>
                <p className="text-[14px] px-5">Гар урлаач, Барилгын инженер</p>
              </div>
            </button>
          </div>
          <div className="bg-white rounded-[48px] flex items-center justify-center my-1 py-5 px-3 index-shadow transition delay-100 hover:bg-[#DFDFDF]">
            <button>
              <div className="p-5 flex items-center justify-center">
                {" "}
                <img
                  src="/svg/Zanchanar/artist.png"
                  alt=""
                  className="w-[88px]"
                />
              </div>
              <div className="">
                <h1 className="my-3  text-[24px] font-bold text-prp">
                  Уран бүтээлч
                </h1>
                <p className="text-[14px] px-5">График дизайнер, Тоглоом зохион бүтээгч</p>
              </div>
            </button>
          </div>
          <div className="bg-white rounded-[48px] flex items-center justify-center my-1 py-5 px-3 index-shadow transition delay-100 hover:bg-[#DFDFDF]">
            <button>
              <div className="p-5 flex items-center justify-center">
                {" "}
                <img
                  src="/svg/Zanchanar/dreamer.png"
                  alt=""
                  className="w-[88px]"
                />
              </div>
              <div className="">
                <h1 className="my-3  text-[24px] font-bold text-prp">
                  Мөрөөдөгч
                </h1>
                <p className="text-[14px] px-5">Судлаач, Төслийн менежер</p>
              </div>
            </button>
          </div>
          <div className="bg-white rounded-[48px] flex items-center justify-center my-1 py-5 px-3 index-shadow transition delay-100 hover:bg-[#DFDFDF]">
            <button>
              <div className="p-5 flex items-center justify-center">
                {" "}
                <img
                  src="/svg/Zanchanar/thinker.png"
                  alt=""
                  className="w-[88px]"
                />
              </div>
              <div className="">
                <h1 className="my-3  text-[24px] font-bold text-prp">Бодогч</h1>
                <p className="text-[14px] px-5">
                  Компьютерийн сүлжээ, Биохимич
                </p>
              </div>
            </button>
          </div>
          <div className="bg-white rounded-[48px] flex items-center justify-center my-1 py-5 px-3 index-shadow transition delay-100 hover:bg-[#DFDFDF]">
            <button>
              <div className="p-5 flex items-center justify-center">
                {" "}
                <img
                  src="/svg/Zanchanar/entreprenuer.png"
                  alt=""
                  className="w-[88px]"
                />
              </div>
              <div className="">
                <h1 className="my-3  text-[24px] font-bold text-prp">
                  Хувиараа бизнес эрхлэгч
                </h1>
                <p className="text-[14px] px-5">Бизнесийн удирдагч,Маркетинг</p>
              </div>
            </button>
          </div>
          <div className="bg-white rounded-[48px] flex items-center justify-center my-1 py-5 px-3 index-shadow transition delay-100 hover:bg-[#DFDFDF]">
            <button>
              <div className="p-5 flex items-center justify-center">
                {" "}
                <img
                  src="/svg/Zanchanar/entertainer.png"
                  alt=""
                  className="w-[88px]"
                />
              </div>
              <div className="">
                <h1 className="my-3  text-[24px] font-bold text-prp">
                  Хөгжөөгч
                </h1>
                <p className="text-[14px] px-5">дуучин, бүжигчин</p>
              </div>
            </button>
          </div>
          <div className="bg-white rounded-[48px] flex items-center justify-center my-1 py-5 px-3 index-shadow transition delay-100 hover:bg-[#DFDFDF]">
            <button>
              <div className="p-5 flex items-center justify-center">
                {" "}
                <img
                  src="/svg/Zanchanar/inspirer.png"
                  alt=""
                  className="w-[88px]"
                />
              </div>
              <div className="">
                <h1 className="my-3  text-[24px] font-bold text-prp">
                  Зоригжуулагч
                </h1>
                <p className="text-[14px] px-5">Улс төрч, Хүний нөөцийн менежмент </p>
              </div>
            </button>
          </div>
          <div className="bg-white rounded-[48px] flex items-center justify-center my-1 py-5 px-3 index-shadow transition delay-100 hover:bg-[#DFDFDF]">
            <button>
              <div className="p-5 flex items-center justify-center">
                {" "}
                <img
                  src="/svg/Zanchanar/supervisor.png"
                  alt=""
                  className="w-[88px]"
                />
              </div>
              <div className="">
                <h1 className="my-3  text-[24px] font-bold text-prp">Хянагч</h1>
                <p className="text-[14px] px-5">Хүний нөөц,Зохион байгуулагч </p>
              </div>
            </button>
          </div>
          <div className="bg-white rounded-[48px] flex items-center justify-center my-1 py-5 px-3 index-shadow transition delay-100 hover:bg-[#DFDFDF]">
            <button>
              <div className="p-5 flex items-center justify-center">
                {" "}
                <img
                  src="/svg/Zanchanar/caregiver.png"
                  alt=""
                  className="w-[88px]"
                />
              </div>
              <div className="">
                <h1 className="my-3  text-[24px] font-bold text-prp">
                  Санаа тавигч
                </h1>
                <p className="text-[14px] px-5">Эх баригч, Сувилагч</p>
              </div>
            </button>
          </div>
          <div className="bg-white rounded-[48px] flex items-center justify-center my-1 py-5 px-3 index-shadow transition delay-100 hover:bg-[#DFDFDF]">
            <button>
              <div className="p-5 flex items-center justify-center">
                {" "}
                <img
                  src="/svg/Zanchanar/executive.png"
                  alt=""
                  className="w-[88px]"
                />
              </div>
              <div className="">
                <h1 className="my-3  text-[24px] font-bold text-prp">
                  Захирагч
                </h1>
                <p className="text-[14px] px-5">Улс төрч, Найруулагч</p>
              </div>
            </button>
          </div>
          <div className="bg-white rounded-[48px] flex items-center justify-center my-1 py-5 px-3 index-shadow transition delay-100 hover:bg-[#DFDFDF]">
            <button>
              <div className="p-5 flex items-center justify-center">
                {" "}
                <img
                  src="/svg/Zanchanar/visionary.png"
                  alt=""
                  className="w-[88px]"
                />
              </div>
              <div className="">
                <h1 className="my-3  text-[24px] font-bold text-prp">
                  Зөгнөгч
                </h1>
                <p className="text-[14px] px-5">Хот төлөвлөгч, Хиймэл оюун ухаан хөгжүүлэгч</p>
              </div>
            </button>
          </div>
          <div className="bg-white rounded-[48px] flex items-center justify-center my-1 py-5 px-3 index-shadow transition delay-100 hover:bg-[#DFDFDF]">
            <button>
              <div className="p-5 flex items-center justify-center">
                {" "}
                <img
                  src="/svg/Zanchanar/mentor.png"
                  alt=""
                  className="w-[88px]"
                />
              </div>
              <div className="">
                <h1 className="my-3  text-[24px] font-bold text-prp">
                  Чиглүүлэгч
                </h1>
                <p className="text-[14px] px-5">Маркетинг, Дасгалжуулагч</p>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className=" md:hidden h-56 ">
        <Carousel indicators={false} className="px-4">
          <button>
            <div className="flex h-full items-center justify-center bg-[#DFDFDF] rounded-3xl hover:bg-[#DFDFDF]">
              <div className="p-5">
                {" "}
                <img
                  src="/svg/Zanchanar/inspector.png"
                  alt=""
                  className="w-[60px]"
                />
              </div>
              <div className="">
                <h1 className=" text-[20px] font-bold text-prp">Ажиглагч</h1>
                <p className="text-[12px] ">Кибер аюулгүй байдал хангагч, Архелогич</p>
              </div>
            </div>
          </button>
          <button>
            <div className="flex h-full items-center justify-center bg-[#DFDFDF] rounded-3xl hover:bg-[#DFDFDF]">
              <div className="p-5">
                {" "}
                <img
                  src="/svg/Zanchanar/supporter.png"
                  alt=""
                  className="w-[60px]"
                />
              </div>
              <div className="">
                <h1 className=" text-[20px] font-bold text-prp">Дэмжигч</h1>
                <p className="text-[12px] ">Нийгмийн ажилтан, Мэргэжил сонголтын зөвлөх</p>
              </div>
            </div>
          </button>
          <button>
            <div className="flex h-full items-center justify-center bg-[#DFDFDF] rounded-3xl hover:bg-[#DFDFDF]">
              <div className="p-5">
                {" "}
                <img
                  src="/svg/Zanchanar/counselor.png"
                  alt=""
                  className="w-[60px]"
                />
              </div>
              <div className="">
                <h1 className=" text-[20px] font-bold text-prp">Зөвлөгч </h1>
                <p className="text-[12px] ">Сэтгэл зүйч, Аялал жуучлагч</p>
              </div>
            </div>
          </button>
          <button>
            <div className="flex h-full items-center justify-center bg-[#DFDFDF] rounded-3xl hover:bg-[#DFDFDF]">
              <div className="p-5">
                {" "}
                <img
                  src="/svg/Zanchanar/strategist.png"
                  alt=""
                  className="w-[60px]"
                />
              </div>
              <div className="">
                <h1 className=" text-[20px] font-bold text-prp">Стратегич</h1>
                <p className="text-[12px] ">Хэрэглээний математикч, Эдийн засагч</p>
              </div>
            </div>
          </button>
          <button>
            <div className="flex h-full items-center justify-center bg-[#DFDFDF] rounded-3xl hover:bg-[#DFDFDF]">
              <div className="p-5">
                {" "}
                <img
                  src="/svg/Zanchanar/artisan.png"
                  alt=""
                  className="w-[60px]"
                />
              </div>
              <div className="">
                <h1 className=" text-[20px] font-bold text-prp">Дархан </h1>
                <p className="text-[12px] ">Гар урлаач, Барилгын инженер</p>
              </div>
            </div>
          </button>
          <button>
            <div className="flex h-full items-center justify-center bg-[#DFDFDF] rounded-3xl hover:bg-[#DFDFDF]">
              <div className="p-5">
                {" "}
                <img
                  src="/svg/Zanchanar/artist.png"
                  alt=""
                  className="w-[60px]"
                />
              </div>
              <div className="">
                <h1 className=" text-[20px] font-bold text-prp">Уран бүтээлч</h1>
                <p className="text-[12px] ">График дизайнер, Тоглоом зохион бүтээгч</p>
              </div>
            </div>
          </button>
          <button>
            <div className="flex h-full items-center justify-center bg-[#DFDFDF] rounded-3xl hover:bg-[#DFDFDF]">
              <div className="p-5">
                {" "}
                <img
                  src="/svg/Zanchanar/dreamer.png"
                  alt=""
                  className="w-[60px]"
                />
              </div>
              <div className="">
                <h1 className=" text-[20px] font-bold text-prp">Мөрөөдөгч </h1>
                <p className="text-[12px] ">Судлаач, Төслийн менежер</p>
              </div>
            </div>
          </button>
          <button>
            <div className="flex h-full items-center justify-center bg-[#DFDFDF] rounded-3xl hover:bg-[#DFDFDF]">
              <div className="p-5">
                {" "}
                <img
                  src="/svg/Zanchanar/thinker.png"
                  alt=""
                  className="w-[60px]"
                />
              </div>
              <div className="">
                <h1 className=" text-[20px] font-bold text-prp">Бодогч </h1>
                <p className="text-[12px] ">Компьютерийн сүлжээ, Биохимич</p>
              </div>
            </div>
          </button>
          <button>
            <div className="flex h-full items-center justify-center bg-[#DFDFDF] rounded-3xl hover:bg-[#DFDFDF]">
              <div className="p-5">
                {" "}
                <img
                  src="/svg/Zanchanar/entreprenuer.png"
                  alt=""
                  className="w-[60px]"
                />
              </div>
              <div className="">
                <h1 className=" text-[20px] font-bold text-prp">Хувиараа бизнес эрхлэгч</h1>
                <p className="text-[12px] ">Бизнесийн удирдагч,Маркетинг</p>
              </div>
            </div>
          </button>
          <button>
            <div className="flex h-full items-center justify-center bg-[#DFDFDF] rounded-3xl hover:bg-[#DFDFDF]">
              <div className="p-5">
                {" "}
                <img
                  src="/svg/Zanchanar/entertainer.png"
                  alt=""
                  className="w-[60px]"
                />
              </div>
              <div className="">
                <h1 className=" text-[20px] font-bold text-prp">Хөгжөөгч </h1>
                <p className="text-[12px] ">дуучин, бүжигчин</p>
              </div>
            </div>
          </button>
          <button>
            <div className="flex h-full items-center justify-center bg-[#DFDFDF] rounded-3xl hover:bg-[#DFDFDF]">
              <div className="p-5">
                {" "}
                <img
                  src="/svg/Zanchanar/inspirer.png"
                  alt=""
                  className="w-[60px]"
                />
              </div>
              <div className="">
                <h1 className=" text-[20px] font-bold text-prp">Зоригжуулагч </h1>
                <p className="text-[12px] ">Улс төрч, Хүний нөөцийн менежмент</p>
              </div>
            </div>
          </button>
          <button>
            <div className="flex h-full items-center justify-center bg-[#DFDFDF] rounded-3xl hover:bg-[#DFDFDF]">
              <div className="p-5">
                {" "}
                <img
                  src="/svg/Zanchanar/supervisor.png"
                  alt=""
                  className="w-[60px]"
                />
              </div>
              <div className="">
                <h1 className=" text-[20px] font-bold text-prp"> Хянагч </h1>
                <p className="text-[12px] ">Хүний нөөц,Зохион байгуулагч</p>
              </div>
            </div>
          </button>
          <button>
            <div className="flex h-full items-center justify-center bg-[#DFDFDF] rounded-3xl hover:bg-[#DFDFDF]">
              <div className="p-5">
                {" "}
                <img
                  src="/svg/Zanchanar/caregiver.png"
                  alt=""
                  className="w-[60px]"
                />
              </div>
              <div className="">
                <h1 className=" text-[20px] font-bold text-prp"> Санаа тавигч</h1>
                <p className="text-[12px] ">Эх баригч, Сувилагч</p>
              </div>
            </div>
          </button>
          <button>
            <div className="flex h-full items-center justify-center bg-[#DFDFDF] rounded-3xl hover:bg-[#DFDFDF]">
              <div className="p-5">
                {" "}
                <img
                  src="/svg/Zanchanar/executive.png"
                  alt=""
                  className="w-[60px]"
                />
              </div>
              <div className="">
                <h1 className=" text-[20px] font-bold text-prp">Захирагч </h1>
                <p className="text-[12px] ">Улс төрч, Найруулагч</p>
              </div>
            </div>
          </button>
          <button>
            <div className="flex h-full items-center justify-center bg-[#DFDFDF] rounded-3xl hover:bg-[#DFDFDF]">
              <div className="p-5">
                {" "}
                <img
                  src="/svg/Zanchanar/visionary.png"
                  alt=""
                  className="w-[60px]"
                />
              </div>
              <div className="">
                <h1 className=" text-[20px] font-bold text-prp">Зөгнөгч </h1>
                <p className="text-[12px] ">Хот төлөвлөгч, Хиймэл оюун ухаан хөгжүүлэгч</p>
              </div>
            </div>
          </button>
          <button>
            <div className="flex h-full items-center justify-center bg-[#DFDFDF] rounded-3xl hover:bg-[#DFDFDF]">
              <div className="p-5">
                {" "}
                <img
                  src="/svg/Zanchanar/mentor.png"
                  alt=""
                  className="w-[60px]"
                />
              </div>
              <div className="">
                <h1 className=" text-[20px] font-bold text-prp">Чиглүүлэгч  </h1>
                <p className="text-[12px] ">Маркетинг, Дасгалжуулагч</p>
              </div>
            </div>
          </button>
        </Carousel>
      </div>
      <div className="md:mx-auto flex  flex-col md:flex-row items-center justify-center bg-prp max-w-[1200px]  p-10 my-[30px] mt-[50px] rounded-[48px] mx-4">
        <div className="flex flex-col md:mr-10  md:gap-5  justify-center items-center md:items-start">
          <h1 className="text-white md:text-[32px] text-[20px] font-bold text-center ">
            АНУ-ын засгийн газрын тэтгэлэг
          </h1>
          <p className="text-white md:text-[24px] text-[12px] font-medium max-w-[504px] leading-none mb-6 text-center md:text-start">
            Монголд алдартай тэтгэлэгүүдийн тухай мэдэхийг хүсвэл доор байгаа товчийг дараарай.
          </p>
          <button className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:bg-[#FBA728] duration-300  text-prp rounded-full bg-shar px-5 py-3 md:px-7 md:py-4 md:text-[24px] text-[16px] font-bold md:max-w-[260px] max-w-[130px] text-center flex items-center justify-center">

            {" "}
            <a href="Tetgeleg">Дэлгэрэнгүй</a>
          </button>
        </div>

        <div className="bg-prp md:w-[398px]  w-[250px] mt-5 md:mt-0 flex items-center justify-center">
          <img src="/svg/hometetgeleg.png" alt="" className="rounded-2xl" />

        </div>
      </div>
    </div>
  );
}
