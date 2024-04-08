import React, { useState } from "react";
// import { MultiSelect } from "react-multi-select-component";
import { MultiSelect } from "primereact/multiselect";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { jobList } from "../../utils/data";
import SuggestedCareer from "./SuggestedCareer";
const Multi = () => {
  const options = [
    { name: "Математик", code: "mat" },
    { name: "Хими", code: "chem" },
    { name: "Биологи", code: "bio" },
    { name: "Газарзүй", code: "geo" },
    { name: "Түүх", code: "his" },
    { name: "Физик", code: "phy" },
    { name: "Нийгэм", code: "soc" },
    { name: "Орос хэл", code: "rus" },
    { name: "Англи хэл", code: "eng" },
    { name: "Монгол хэл", code: "mon" },
  ];
  const [selectedCities, setSelectedCities] = useState(null);
  // console.log(selectedCities);
  const selectJob = jobList.filter((data) => {
    for (let i = 0; i < selectedCities?.length; i++) {
      if (!data.lesson.includes(selectedCities[i].code)) {
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
            <MultiSelect
              value={selectedCities}
              onChange={(e) => setSelectedCities(e.value)}
              options={options}
              optionLabel="name"
              display="chip"
              placeholder="Сонгох"
              maxSelectedLabels={10}
              className="border-solid w-full justify-center"
            />
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
        <div className="flex md:flex-row justify-evenly mt-[30px] flex-wrap flex-col p-5 gap-9 items-center max-w-screen-xl mx-auto ">
          {selectJob.map((data, index) => {
            return <SuggestedCareer data={data} />;
          })}
        </div>
      </div>
    </div>
  );
};
export default Multi;
