export default function Subject() {
  return (
    <div className=" max-w-screen-xl md:grid md:grid-cols-4 justify-items-center gap-3 mx-auto pt-[80px]  h-auto">
      <div className="md:col-span-1 w-full md:pr-5 ">
        <h1 className="font-bold text-[#373737] text-[32px] md:text-start md:pl-5 text-center py-7">
          Хичээлүүд
        </h1>
        <div className="grid grid-cols-2 md:block space-y-5">
          <button className="flex items-center py-3 px-8 mt-5 md:mt-0 lg:w-4/5 w-full rounded-full hover:text-white transition-all hover:-translate-y-2 hover:bg-[#FFBD59] hover:shadow-lg font-bold">
            <img src="maths.png" className="w-[40px]" alt="" />
            <p className="font-[16px] pl-3">Математик</p>
          </button>
          <button className="flex items-center py-3 px-8 w-full rounded-full lg:w-4/5 hover:text-white transition-all hover:-translate-y-2 hover:bg-[#FFBD59] hover:shadow-lg font-bold">
            <img src="Group 135.png" className="w-[40px]" alt="" />
            <p className="font-[16px] pl-3">Монгол хэл</p>
          </button>
          <button className="flex items-center py-3 px-8 w-full rounded-full lg:w-4/5 hover:text-white transition-all hover:-translate-y-2 hover:bg-[#FFBD59] hover:shadow-lg font-bold">
            <img src="Group 136.png" className="w-[40px]" alt="" />
            <p className="font-[16px] pl-3">Англи хэл</p>
          </button>
          <button className="flex items-center py-3 px-8 w-full rounded-full lg:w-4/5 hover:text-white transition-all hover:-translate-y-2 hover:bg-[#FFBD59] hover:shadow-lg font-bold">
            <img src="fizik.png" className="w-[40px]" alt="" />
            <p className="font-[16px] pl-3">Физик</p>
          </button>
          <button className="flex items-center py-3 px-8 w-full rounded-full lg:w-4/5 hover:text-white transition-all hover:-translate-y-2 hover:bg-[#FFBD59] hover:shadow-lg font-bold">
            <img src="plant 1 (1).png" className="w-[40px]" alt="" />
            <p className="font-[16px] pl-3">Биологи</p>
          </button>
          <button className="flex items-center py-3 px-8 w-full rounded-full lg:w-4/5 hover:text-white transition-all hover:-translate-y-2 hover:bg-[#FFBD59] hover:shadow-lg font-bold">
            <img src="Group 139.png" className="w-[40px]" alt="" />
            <p className="font-[16px] pl-3">Хими</p>
          </button>
          <button className="flex items-center py-3 px-8 w-full rounded-full lg:w-4/5 hover:text-white transition-all hover:-translate-y-2 hover:bg-[#FFBD59] hover:shadow-lg font-bold">
            <img src="economy 1.png" className="w-[40px]" alt="" />
            <p className="font-[16px] pl-3">Нийгэм</p>
          </button>
          <button className="flex items-center py-3 px-8 w-full rounded-full lg:w-4/5 hover:text-white transition-all hover:-translate-y-2 hover:bg-[#FFBD59] hover:shadow-lg font-bold">
            <img src="pillars 1.png" className="w-[40px]" alt="" />
            <p className="font-[16px] pl-3">Түүх</p>
          </button>
          <button className="flex items-center py-3 px-8 w-full rounded-full lg:w-4/5 hover:text-white transition-all hover:-translate-y-2 hover:bg-[#FFBD59] hover:shadow-lg font-bold">
            <img src="global-location 1.png" className="w-[40px]" alt="" />
            <p className="font-[16px] pl-3">Газарзүй</p>
          </button>
        </div>
      </div>
      <div className="col-span-3 py-10 px-5">
        <form className=" mx-auto w-full">
          <label
            for="hicheel"
            className="block mb-5 font-bold text-2xl text-[#373737]"
          >
            Математик
          </label>
          <select
            id="hicheel"
            className="w-[90vw] md:w-[50vw] shadow-[0_5px_3px_0px_rgba(255,189,89,0.25)] text-[#373737] transition-all hover:scale-[1.03]
             text-[16px] focus:ring-0 rounded-full border-0 block mr-5 font-bold py-3"
          >
            <option className="w-full" disabled selected>Хичээлийн сэдэв</option>
            <option className="w-full rounded-full" value="sedev1">Сэдэв 1. Квадрат тэгшитгэл ба тэнцэтгэл биш</option>
            <option className="w-full" value="sedev2">Сэдэв 2. Квадрат тэгшитгэл ба тэнцэтгэл биш</option>
            <option className="w-full" value="sedev3">Сэдэв 3. Квадрат тэгшитгэл ба тэнцэтгэл биш</option>
            <option className="w-full" value="sedev4">Сэдэв 4. Квадрат тэгшитгэл ба тэнцэтгэл биш</option>
          </select>
        </form>
        <div className="py-[5vh]">
            <div>
                <h1 className="font-bold text-[20px] text-[#373737]">Сэдэв 1 : Квадрат тэгшитгэл ба тэнцэтгэл биш</h1>
                <h3 className="font-bold text-[#373737] text-[20px] py-4">Хичээлийн товч агуулга</h3>
                <p className="text-[#373737]">Квадрат тэгшитгэлийг үржигдэхүүн болгон задлах болон томьёо хэрэглэн бодох аргуудыг сэргээн бататгах, квадрат функцийн график байгуулж, шинжлэх замаар квадрат тэгшитгэлийн шийдийг олох, тэгшитгэл бодох графикийн аргыг ойлгож, хэрэглэхэд суралцана.
                </p>
                <img src="image 33.png" className="rounded-[20px] py-5 md:w-full xl:w-[40vw] lg:w-[70vw]" alt="" />
            </div>
            <button className=" flex text-[#373737] hover:bg-[#FFBD59] hover:text-[#ffffff] bg-[#FFBD59] focus:ring-3 focus:outline-none focus:ring-[#FFBD59] font-bold rounded-full text-[16px] md:px-5 md:py-2 px-5 py-2 md:mt-5 mt-5 transition-all hover:scale-[1.03] shadow-md">
            <img src="examm.png" className="md:w-[30px] w-[30px]" alt="" />
           <p className="text-center pl-2 md:pt-1 pt-1">Дасгал ажил хийх</p>
            </button>
        </div>
      </div>
    </div>
  );
}
