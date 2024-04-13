import Scholarshipinside from "./Scholarshipinside";
import { useRouter } from "next/router";
import { scholarship } from "../../utils/data";
export default function Scholarship() {
  const router=useRouter();
  return (
    <div>
      <div className="max-w-screen-xl mx-auto pt-[20px] font  h-auto">
        <div className="text-[#373737] md:text-[30px] text-[24px] font-bold flex items-center justify-center px-4 mt-10">
          <h1>АНУ-ын засгийн газрын тэтгэлгүүд</h1>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-2 md:gap-10 px-10 my-10 gap-5">
          <div className="bg-white rounded-[10px] px-4 py-2 tetgeleg-shadow transition ease-out delay-50 hover:-translate-y-1 hover:scale-90">
            <button
              onClick={() => {
                router.push({
                  pathname: "tetgelegdotor",
                  query: { data: "0" },
                });
              }}
            >
              <img src="/svg/tetgelegicon1.png" alt="" />
            </button>
          </div>
          <div className="bg-white rounded-[10px] px-4 py-2 tetgeleg-shadow  transition ease-out delay-50 hover:-translate-y-1 hover:scale-90 ">
            <button
              onClick={() => {
                router.push({
                  pathname: "tetgelegdotor",
                  query: { data: "1" },
                });
              }}
            >
              <img src="/svg/tetgelegicon2.png" alt="" />
            </button>
          </div>
          <div className="bg-white rounded-[10px] px-4 py-2 tetgeleg-shadow  transition ease-out delay-50 hover:-translate-y-1 hover:scale-90 ">
            <button
              onClick={() => {
                router.push({
                  pathname: "tetgelegdotor",
                  query: { data: "2" },
                });
              }}
            >
              <img src="/tetgelegicon3.png" alt="" />
            </button>
          </div>
          <div className="bg-white rounded-[10px] px-4 py-2 tetgeleg-shadow  transition ease-out delay-50 hover:-translate-y-1 hover:scale-90 ">
            <button
              onClick={() => {
                router.push({
                  pathname: "tetgelegdotor",
                  query: { data: "3" },
                });
              }}
            >
              <img src="/tetgelegicon4.png" alt="" />
            </button>
          </div>
        </div>
        <div>
          <ul className="px-10 md:text-[20px] text-[14px] text-har font-bold flex flex-col md:gap-[50px] md:py-10  py-4 gap-5">
            <li className="hover:transition hover:delay-100 hover:text-shar">
              {" "}
              <a
                onClick={() => {
                  router.push({
                    pathname: "tetgelegdotor",
                    query: { data: "0" },
                  });
                }}
              >
                1. Fulbright Foreign Student Program{" "}
              </a>
            </li>
            <li className="hover:transition hover:delay-100 hover:text-shar">
              {" "}
              <a
                onClick={() => {
                  router.push({
                    pathname: "tetgelegdotor",
                    query: { data: "1" },
                  });
                }}
              >
                2. Hubert H. Humphrey Fellowship Program{" "}
              </a>
            </li>
            <li className="hover:transition hover:delay-100 hover:text-shar">
              {" "}
              <a
                onClick={() => {
                  router.push({
                    pathname: "tetgelegdotor",
                    query: { data: "2" },
                  });
                }}
              >
                3. Study of the U.S. Institutes for Scholars (SUSI)
              </a>
            </li>
            <li className="hover:transition hover:delay-100 hover:text-shar">
              {" "}
              <a
                onClick={() => {
                  router.push({
                    pathname: "tetgelegdotor",
                    query: { data: "3" },
                  });
                }}
              >
                4. Global Undergraduate Exchange Program (Global UGRAD)
              </a>
            </li>
          </ul>
          <img
            src="/svg/chimeglel2.png"
            alt=""
            className="absolute top-[65vh] right-[20vw] hidden lg:block"
          />
        </div>
        <div className="text-[#373737] md:text-[30px] text-[24px] font-bold flex items-center justify-center m-10">
          <h1 className="">Хятад улсын засгийн газрын тэтгэлгүүд</h1>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-2 md:gap-10 my-10 mx-10 gap-5 px-5">
          <div className="bg-white rounded-[10px] px-4 py-2 tetgeleg-shadow transition ease-out delay-50 hover:-translate-y-1 hover:scale-90 flex justify-center items-center">
            <button
              onClick={() => {
                router.push({
                  pathname: "tetgelegdotor",
                  query: { data: "4" },
                });
              }}
            >
              <img
                src="/svg/tetgelegicon5.png"
                alt=""
                className="w-full flex items-center justify-center"
              />
            </button>
          </div>
          <div className="bg-white rounded-[10px] px-4 py-2 tetgeleg-shadow  transition ease-out delay-50 hover:-translate-y-1 hover:scale-90 flex justify-center items-center ">
            <button
              onClick={() => {
                router.push({
                  pathname: "tetgelegdotor",
                  query: { data: "5" },
                });
              }}
            >
              <img src="/svg/tetgelegicon6.png" alt="" className="w-full" />
            </button>
          </div>
          <div className="bg-white rounded-[10px] px-4 py-2 tetgeleg-shadow  transition ease-out delay-50 hover:-translate-y-1 hover:scale-90 flex justify-center items-center">
            <button
              onClick={() => {
                router.push({
                  pathname: "tetgelegdotor",
                  query: { data: "6" },
                });
              }}
            >
              <img src="/svg/tetgelegicon7.png" alt="" className="w-[200px]" />
            </button>
          </div>
        </div>
        <div>
          <ul className="md:text-[20px] text-[14px] text-har font-bold flex flex-col md:gap-[50px] md:py-10 gap-5 py-4 px-10">
            <li className="hover:transition hover:delay-100 hover:text-shar">
              {" "}
              <a
                onClick={() => {
                  router.push({
                    pathname: "tetgelegdotor",
                    query: { data: "4" },
                  });
                }}
              >
                1. Chinese Government Scholarship{" "}
              </a>
            </li>
            <li className="hover:transition hover:delay-100 hover:text-shar">
              {" "}
              <a
                onClick={() => {
                  router.push({
                    pathname: "tetgelegdotor",
                    query: { data: "5" },
                  });
                }}
              >
                2. Silk Road Scholarship{" "}
              </a>
            </li>
            <li className="hover:transition hover:delay-100 hover:text-shar">
              {" "}
              <a
                onClick={() => {
                  router.push({
                    pathname: "tetgelegdotor",
                    query: { data: "6" },
                  });
                }}
              >
                3. Күнз боловсролын төв
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
