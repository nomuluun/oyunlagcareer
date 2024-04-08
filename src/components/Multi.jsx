import React, { useState } from "react";
// import { MultiSelect } from "react-multi-select-component";
import { MultiSelect } from 'primereact/multiselect';
import "primereact/resources/themes/lara-light-cyan/theme.css";
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
  // const [selected, setSelected] = useState([]);
  const [selectedCities, setSelectedCities] = useState(null);
  const cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
  ];
  return (
    <div className=" col-span-2 my-2">
          <h1 className=" font font-extrabold text-[30px] text-[#373737]">
          Хичээлтэй холбоотой мэргэжлүүд
        </h1>
      <p className="text-[20px] font pb-7 mt-5 text-[#373737] max-w-[550px] " >Хичээлүүд сонгон, мэргэжлүүдийн талаарх мэдээллийг авна уу.</p>
      <div className="items-center justify-center w-full lg:w-[30vw]">
            <MultiSelect value={selectedCities} onChange={(e) => setSelectedCities(e.value)} options={options} optionLabel="name" display="chip" 
                placeholder="Сонгох" maxSelectedLabels={10} className="border-solid w-full justify-center" />
      </div>
    </div>
  );
};
export default Multi;
