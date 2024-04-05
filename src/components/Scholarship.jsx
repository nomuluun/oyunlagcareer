export default function Scholarship() {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto pt-[80px]  h-auto">
        <div className="text-har md:text-[40px] font-bold flex items-center justify-center mt-10">
          <h1>АНУ-ын засгийн газрын тэтгэлэгүүд</h1>
        </div>
        <div className="grid grid-cols-3 gap-10 my-10">
          <div className="bg-white rounded-[10px] px-4 py-2 tetgeleg-shadow transition ease-out delay-50 hover:-translate-y-1 hover:scale-90">
            <button>
              <img src="/svg/tetgelegicon1.png" alt="" />
            </button>
          </div>
          <div className="bg-white rounded-[10px] px-4 py-2 tetgeleg-shadow  transition ease-out delay-50 hover:-translate-y-1 hover:scale-90 ">
            <button>
              <img src="/svg/tetgelegicon1.png" alt="" />
            </button>
          </div>
          <div className="bg-white rounded-[10px] px-4 py-2 tetgeleg-shadow  transition ease-out delay-50 hover:-translate-y-1 hover:scale-90 ">
            <button>
              <img src="/svg/tetgelegicon1.png" alt="" />
            </button>
          </div>
          <div className="bg-white rounded-[10px] px-4 py-2 tetgeleg-shadow  transition ease-out delay-50 hover:-translate-y-1 hover:scale-90 ">
            <button>
              <img src="/svg/tetgelegicon1.png" alt="" />
            </button>
          </div>
          <div className="bg-white rounded-[10px] px-4 py-2 tetgeleg-shadow   transition ease-out delay-50 hover:-translate-y-1 hover:scale-90">
            <button>
              <img src="/svg/tetgelegicon1.png" alt="" />
            </button>
          </div>
          <div className="bg-white rounded-[10px] px-4 py-2 tetgeleg-shadow   transition ease-out delay-50 hover:-translate-y-1 hover:scale-90">
            <button>
              <img src="/svg/tetgelegicon1.png" alt="" />
            </button>
          </div>
        </div>
        <div>
            <ul className="text-[24px] text-har font-bold flex flex-col gap-[50px] py-10"> 
                <li>1. Fulbright Foreign Student Program</li>
                <li>2. Hubert H. Humphrey Fellowship Program</li>
                <li>3. Study of the U.S. Institutes for Scholars (SUSI)</li>
                <li>4. Global Undergraduate Exchange Program (Global UGRAD)</li>
            </ul>
            <p className="text-right text-shar text-[20px]">Цааш үзэх</p>
            <img src="/svg/chimeglel2.png" alt="" className="absolute top-[65vh] right-[20vw]"/>
        </div>
      </div>
    </div>
  );
}
