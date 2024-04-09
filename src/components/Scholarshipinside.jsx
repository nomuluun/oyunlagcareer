export default function Scholarshipinside() {
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
              1. Fulbright Foreign Student Program
            </h1>
            <p className="max-w-[588px] md:text-[20px] text-[16px]">
              Энэхүү програм нь магистрын зэрэг олгох бүрэн хэмжээний тэтгэлэг
              юм. Хөтөлбөрийн сонгон шалгаруулалт 1 жилийн хугацаанд үргэлжилж,
              шалгарсан оролцогчид өргөдөл гаргасны дараа зун хөтөлбөрөө
              эхлүүлнэ. Энэхүү тэтгэлэгт манай улсын оюутнууд түгээмэл
              хамрагддаг бөгөөд жил бүр дэлхийн хэмжээнд{" "}
              <span className="font-extrabold">1800</span> гаруй залууст үнэ
              төлбөргүй <span className="font-extrabold">магистраа </span>
              хамгаалах боломжийг өгдөг. (АНУ-д магистр 1-2 жилээр суралцдаг)...
            </p>
            <div className="mt-4 md:text-[20px] font-bold mb-4">
              <a href="https://www.tomyo.mn/?p=1232" className="text-shar ">
                Цааш унших
              </a>
            </div>
          </div>
        </div>
        {/* <div className=" bg-[rgb(255,255,255)] rounded-full  max-w-screen-xl md:flex items-center justify-between md:mx-auto mx-8 text-prp font-extrabold md:px-32 md:py-10 px-4 py-4 md:text-[32px] text-[18px] md:my-40 my-15 index-shadow">
          <div className="p-3">
            <h1 className="text-center">
              9000 <span className="text-[15px]">сурагч</span>
            </h1>
            <p className="md:text-[16px] text-[12px] text-har font-bold text-center">
              Жил бүр өргөдөл илгээх сурагчдын тоо
            </p>
          </div>
          <div className="bg-prp md:w-1 w-full md:h-16 h-0.5 flex items-center justify-center"></div>
          <div>
            <h1 className="text-center">
              1800 <span className="text-[15px]">сурагч</span>
            </h1>
            <p className="md:text-[16px] text-[12px] text-har font-bold text-center">
              Тэнцэх сурагчдын тоо
            </p>
          </div>
          <div className="bg-prp md:w-1 w-0.5 md:h-16 h-8"></div>
          <div>
            <h1 className="text-center">
              287 <span className="text-[15px]">сая доллар</span>
            </h1>
            <p className="md:text-[16px] text-[12px] text-har font-bold text-center ">
              {" "}
              1 жилд өгдөг нийт тэтгэлэгийн хэмжээ
            </p>
          </div>
        </div> */}
        <div className="md:flex justify-center items-top mt-10">
          <div className="bg-white rounded-[30px] drop-shadow-xl md:w-[286px] md:h-[330px] py-5 px-5 text-left text-har mx-10 my-5">
            <div className="font-bold md:text-[24px] text-center mb-4">
              <h1>Давуу тал</h1>
            </div>
            <div>
              <ul className=" md:text-[16px] text-[12px] space-y-2 font-medium ">
                <li>1.Бүх тээврийн зардал</li>
                <li>2.Амьдрах зардал</li>
                <li>3.Сургалтын төлбөр</li>
                <li>4.Эрүүл мэндийн даатгал</li>
                <li>5.Визний зардал</li>
                <li>6.Аяллын тэтгэмж</li>
                <li>7.Суурьших зардал</li>
              </ul>
            </div>
          </div>
          <div className="bg-white md:w-[579px] md:h-[330px] rounded-[30px] drop-shadow-xl text-har py-6 px-4 mx-10 my-5">
            <div className="md:text-[24px] font-bold text-center">
              <h1>Тавигдах шаардлага</h1>
            </div>
            <div>
              <ul className="md:text-[16px]  text-[12px] space-y-5 font-medium ">
                <li>1,5 болон түүнээс дээш жилийн бүтэн цагаар ажилласан, туршлагатай байх</li>
                <li>Дээд боловсролтой байх</li>
                <li>Англи хэлний чадвар сайтай байж, мэргэжлийн чиглэлээсээ хамааран TOEFL IBT 80-90, TOEFL PBT/ITP 550-575, or IELTS 6.5-7.0 оноотой байх</li>
                <li>АНУ-ын ногоон карт эзэмшигч биш байх</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
