export default function Scholarship() {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto pt-[80px] font  h-auto">
        <div className="text-prp md:text-[40px] text-[24px] font-bold flex items-center justify-center mt-10">
          <h1>АНУ-ын засгийн газрын тэтгэлэгүүд</h1>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-2 md:gap-10 my-10 gap-5">
          <div className="bg-white rounded-[10px] px-4 py-2 tetgeleg-shadow transition ease-out delay-50 hover:-translate-y-1 hover:scale-90">
            <button>
              <img src="/svg/tetgelegicon1.png" alt="" />
            </button>
          </div>
          <div className="bg-white rounded-[10px] px-4 py-2 tetgeleg-shadow  transition ease-out delay-50 hover:-translate-y-1 hover:scale-90 ">
            <button>
              <img src="/svg/tetgelegicon2.png" alt="" />
            </button>
          </div>
          <div className="bg-white rounded-[10px] px-4 py-2 tetgeleg-shadow  transition ease-out delay-50 hover:-translate-y-1 hover:scale-90 ">
            <button>
              <img src="/tetgelegicon3.png" alt="" />
            </button>
          </div>
          <div className="bg-white rounded-[10px] px-4 py-2 tetgeleg-shadow  transition ease-out delay-50 hover:-translate-y-1 hover:scale-90 ">
            <button>
              <img src="/tetgelegicon4.png" alt="" />
            </button>
          </div>
        </div>
        <div>
          <ul className="md:text-[24px] text-[16px] text-har font-bold flex flex-col md:gap-[50px] md:py-10  py-4 gap-5">
            <li className="hover:transition hover:delay-100 hover:text-shar">
              {" "}
              <a href="tetgelegdotor">1. Fulbright Foreign Student Program </a>
            </li>
            <li className="hover:transition hover:delay-100 hover:text-shar">
              {" "}
              <a href="">2. Hubert H. Humphrey Fellowship Program </a>
            </li>
            <li className="hover:transition hover:delay-100 hover:text-shar">
              {" "}
              <a href="">3. Study of the U.S. Institutes for Scholars (SUSI)</a>
            </li>
            <li className="hover:transition hover:delay-100 hover:text-shar">
              {" "}
              <a href="">
                4. Global Undergraduate Exchange Program (Global UGRAD)
              </a>
            </li>
          </ul>
          <img
            src="/svg/chimeglel2.png"
            alt=""
            className="absolute top-[65vh] right-[20vw] hidden md:block"
          />
        </div>
        <div className="text-prp md:text-[40px] text-[24px] font-bold flex items-center justify-center mt-10">
          <h1>Хятад улсын засгийн газрын тэтгэлэгүүд</h1>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-2 md:gap-10 my-10 gap-5">
          <div className="bg-white rounded-[10px] px-4 py-2 tetgeleg-shadow transition ease-out delay-50 hover:-translate-y-1 hover:scale-90">
            <button>
              <img src="/svg/tetgelegicon5.png" alt=""  className="h-[20vh] flex items-center justify-center"/>
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
          <ul className="md:text-[24px] text-[16px] text-har font-bold flex flex-col md:gap-[50px] md:py-10 gap-5 py-4">
            <li className="hover:transition hover:delay-100 hover:text-shar">
              {" "}
              <a href="">1. Fulbright Foreign Student Program </a>
            </li>
            <li className="hover:transition hover:delay-100 hover:text-shar">
              {" "}
              <a href="">2. Hubert H. Humphrey Fellowship Program </a>
            </li>
            <li className="hover:transition hover:delay-100 hover:text-shar">
              {" "}
              <a href="">3. Study of the U.S. Institutes for Scholars (SUSI)</a>
            </li>
            <li className="hover:transition hover:delay-100 hover:text-shar">
              {" "}
              <a href="">
                4. Global Undergraduate Exchange Program (Global UGRAD)
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
