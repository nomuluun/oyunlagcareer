export default function Subject() {
  return (
    <div className=" max-w-screen-xl font justify-items-center mx-auto pt-[10px] flex-col h-auto">
      <div>
        <h1 className="text-har md:text-[32px] text-[24px] text-center m-8 p-6 font-bold">
          Хичээл үзэж, давтаж болох Монгол веб хуудсууд
        </h1>
        <div className="flex flex-wrap md:flex-wrap   justify-evenly items-center font-medium  drop-shadow-xl">
          <div className="md:m-5 max-w-[320px]">
            <button className=" rounded-2xl  flex flex-col items-center text-center justify-center transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 ">
              <a href="https://www.tomyo.mn/?cat=2">
                <img src="/svg/hicheel/tomyo.png" alt="" className="p-2 md:h-[130px] max-w-[320px]"/>
              </a>
            </button>
          </div>
          <div className="md:m-5 max-w-[320px] ">
            <button className=" rounded-2xl   flex flex-col items-center text-center justify-center transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 ">
              <a href="https://yesh.mn/">
                <img src="/svg/hicheel/yesh.png" alt="" className=" p-2 md:h-[130px] max-w-[320px]" />
              </a>
            </button>
          </div>
          <div className="md:m-5 max-w-[320px]">
            <button className=" rounded-2xl   flex flex-col items-center text-center justify-center transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 ">
              <a href="https://itembank.eec.mn/items/1">
                <img src="/svg/hicheel/but.png" alt="" className=" p-2 md:h-[130px] max-w-[320px]" />
              </a>
            </button>
          </div>
          <div className="md:m-5 max-w-[320px] ">
            <button className=" rounded-2xl   flex flex-col items-center text-center justify-center transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 ">
              <a href="https://integral.mn/problems">
                <img src=" /svg/hicheel/integral.png" alt="" className="  p-2 md:h-[130px] max-w-[320px]" />
              </a>
            </button>
          </div>
          <div className="md:m-5 max-w-[320px]">
            <button className=" rounded-2xl   flex flex-col items-center text-center justify-center transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 ">
              <a href="https://mn.khanacademy.org/">
                <img src="/svg/hicheel/khan.png" alt="" className="p-2 md:h-[130px] max-w-[320px]" />
              </a>
            </button>
          </div>
          <div className="md:m-5 max-w-[320px] ">
            <button className=" rounded-2xl flex flex-col items-center text-center justify-center transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 ">
              <a href="https://www.bagshiintuslah800.mn/">
                <img src="/svg/hicheel/tuslah.png" alt="" className=" p-2 h-[130px] max-w-[320px]" />
              </a>
            </button>
          </div>
        </div>
      </div>
      {/* <div className="md:col-span-1 w-full md:pr-5 ">
        <h1 className="font-bold font text-[#373737] text-[32px] md:text-start md:pl-5 text-center py-7">
          Хичээлүүд
        </h1>
        <div className="grid grid-cols-2 md:block space-y-5">
          <button className="flex items-center py-3 px-8 mt-5 md:mt-0 lg:w-4/5 w-full rounded-full hover:text-white transition-all hover:-translate-y-2 hover:bg-[#FFBD59] hover:shadow-lg font-bold">
            <img src="maths.png" className="w-[40px]" alt="" />
            <p className="font-[16px] font pl-3">Математик</p>
          </button>
          <button className="flex items-center py-3 px-8 w-full rounded-full lg:w-4/5 hover:text-white transition-all hover:-translate-y-2 hover:bg-[#FFBD59] hover:shadow-lg font-bold">
            <img src="Group 135.png" className="w-[40px]" alt="" />
            <p className="font-[16px]  font pl-3">Монгол хэл</p>
          </button>
          <button className="flex items-center py-3 px-8 w-full rounded-full lg:w-4/5 hover:text-white transition-all hover:-translate-y-2 hover:bg-[#FFBD59] hover:shadow-lg font-bold">
            <img src="Group 136.png" className="w-[40px]" alt="" />
            <p className="font-[16px] font pl-3">Англи хэл</p>
          </button>
          <button className="flex items-center py-3 px-8 w-full rounded-full lg:w-4/5 hover:text-white transition-all hover:-translate-y-2 hover:bg-[#FFBD59] hover:shadow-lg font-bold">
            <img src="fizik.png" className="w-[40px]" alt="" />
            <p className="font-[16px]  font pl-3">Физик</p>
          </button>
          <button className="flex items-center py-3 px-8 w-full rounded-full lg:w-4/5 hover:text-white transition-all hover:-translate-y-2 hover:bg-[#FFBD59] hover:shadow-lg font-bold">
            <img src="plant 1 (1).png" className="w-[40px]" alt="" />
            <p className="font-[16px] font pl-3">Биологи</p>
          </button>
          <button className="flex items-center py-3 px-8 w-full rounded-full lg:w-4/5 hover:text-white transition-all hover:-translate-y-2 hover:bg-[#FFBD59] hover:shadow-lg font-bold">
            <img src="Group 139.png" className="w-[40px]" alt="" />
            <p className="font-[16px] font pl-3">Хими</p>
          </button>
          <button className="flex items-center py-3 px-8 w-full rounded-full lg:w-4/5 hover:text-white transition-all hover:-translate-y-2 hover:bg-[#FFBD59] hover:shadow-lg font-bold">
            <img src="economy 1.png" className="w-[40px]" alt="" />
            <p className="font-[16px] font pl-3">Нийгэм</p>
          </button>
          <button className="flex items-center py-3 px-8 w-full rounded-full lg:w-4/5 hover:text-white transition-all hover:-translate-y-2 hover:bg-[#FFBD59] hover:shadow-lg font-bold">
            <img src="pillars 1.png" className="w-[40px]" alt="" />
            <p className="font-[16px] font pl-3">Түүх</p>
          </button>
          <button className="flex items-center py-3 px-8 w-full rounded-full lg:w-4/5 hover:text-white transition-all hover:-translate-y-2 hover:bg-[#FFBD59] hover:shadow-lg font-bold">
            <img src="global-location 1.png" className="w-[40px]" alt="" />
            <p className="font-[16px] font pl-3">Газарзүй</p>
          </button>
        </div>
      </div> */}
      {/* <div className="col-span-3 py-10 px-5">
        <form className=" mx-auto w-full">
          <label
            for="hicheel"
            className="block mb-5 font-bold text-2xl text-[#373737] font"
          >
            Математик
          </label>
          <select
            id="hicheel"
            className="w-[90vw] md:w-[50vw] shadow-[0_5px_3px_0px_rgba(255,189,89,0.25)] text-[#373737] transition-all hover:scale-[1.03]
             text-[16px] focus:ring-0 rounded-full border-0 block mr-5 font-bold py-3"
          >
            <option className="w-full font" disabled selected>Хичээлийн сэдэв</option>
            <option className="w-full font rounded-full font" value="sedev1">Сэдэв 1. Квадрат тэгшитгэл ба тэнцэтгэл биш</option>
            <option className="w-full font" value="sedev2">Сэдэв 2. Квадрат тэгшитгэл ба тэнцэтгэл биш</option>
            <option className="w-full font" value="sedev3">Сэдэв 3. Квадрат тэгшитгэл ба тэнцэтгэл биш</option>
            <option className="w-full font" value="sedev4">Сэдэв 4. Квадрат тэгшитгэл ба тэнцэтгэл биш</option>
          </select>
        </form>
        <div className="py-[5vh]">
            <div>
                <h1 className="font-bold text-[20px] text-[#373737] font">Сэдэв 1 : Квадрат тэгшитгэл ба тэнцэтгэл биш</h1>
                <h3 className="font-bold text-[#373737] text-[20px] py-4 font">Хичээлийн товч агуулга</h3>
                <p className="text-[#373737] font">Квадрат тэгшитгэлийг үржигдэхүүн болгон задлах болон томьёо хэрэглэн бодох аргуудыг сэргээн бататгах, квадрат функцийн график байгуулж, шинжлэх замаар квадрат тэгшитгэлийн шийдийг олох, тэгшитгэл бодох графикийн аргыг ойлгож, хэрэглэхэд суралцана.
                </p>
                <img src="image 33.png" className=" font rounded-[20px] py-5 md:w-full xl:w-[40vw] lg:w-[70vw]" alt="" />
            </div>
            <button className=" flex text-[#373737] font hover:bg-[#FFBD59] hover:text-[#ffffff] bg-[#FFBD59] focus:ring-3 focus:outline-none focus:ring-[#FFBD59] font-bold rounded-full text-[16px] md:px-5 md:py-2 px-5 py-2 md:mt-5 mt-5 transition-all hover:scale-[1.03] shadow-md">
            <img src="examm.png" className="md:w-[30px] font w-[30px]" alt="" />
           <p className="text-center pl-2 md:pt-1 pt-1 font">Дасгал ажил хийх</p>
            </button>
        </div>
      </div> */}
    </div>
  );
}
