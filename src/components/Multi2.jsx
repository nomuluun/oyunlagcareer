import React, { useState } from "react";
import Select from "react-select";
import { jobList } from "../../utils/data";
import SuggestedCareer from "./SuggestedCareer";
const options = [
  { label: "Математик", value: "mat" },
  { label: "Хими", value: "chem" },
  { label: "Биологи", value: "bio" },
  { label: "Газарзүй", value: "geo" },
  { label: "Түүх", value: "his" },
  { label: "Физик", value: "phy" },
  { label: "Нийгэм", value: "soc" },
  { label: "Орос хэл", value: "rus" },
  { label: "Англи хэл", value: "eng" },
  { label: "Монгол хэл", value: "mon" },
];
export default function App() {
  const [selectedOption, setSelectedOption] = useState(null);
  const selectJob = jobList.filter((data) => {
    // console.log("data lesson " + data.lesson);
    // console.log("selected cities " +selectedCities);
    for (let i = 0; i < selectedOption?.length; i++) {
      if (!data.lesson.includes(selectedOption[i].value)) {
        return false;
      }
    }
    return true;
  });
  return (
    <div className=" col-span-2 my-2 ">
      <div className="flex flex-row justify-evenly">
        <div>
          <h1 className=" font font-extrabold text-[30px] text-[#373737]">
            Хичээлтэй холбоотой мэргэжлүүд
          </h1>
          <p className="text-[20px] font pb-7 mt-5 text-[#373737] max-w-[550px] ">
            Хичээлүүд сонгон, мэргэжлүүдийн талаарх мэдээллийг авна уу.
          </p>
          <div className="items-center justify-center w-full lg:w-[30vw]">
            <div className="App">
              <Select
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                isMulti
                options={options}
                className="border-solid w-[80%] justify-center"
              />
            </div>
          </div>
        </div>
        <div>
          <img
            src="Saly-10.png"
            className="relative col-span-1 hidden md:block w-full max-w-[500px] "
            alt=""
          />
          <img
            src="gurvljin.png"
            className="absolute hidden md:block  top-[80px] left-[350px] w-[20vw] max-w-[200px] md:top-[250px] md:left-[45vw] rotate-12 md: "
            alt=""
          />
        </div>
      </div>
      <div className=" w-full">
        <h1 className="font-bold pt-5 font">Хайсан илэрцүүд:</h1>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full justify-evenly mt-[30px] flex-wrap p-5 gap-9 items-center
          max-w-screen-xl mx-auto"
        >
          {/* className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full
          justify-evenly mt-[30px] flex-wrap p-5 gap-9 items-center
          max-w-screen-xl mx-auto" */}
          {selectJob.map((data, index) => {
            return <SuggestedCareer data={data} />;
          })}
        </div>
      </div>
    </div>
  );
}
