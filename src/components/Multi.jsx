import React, { useState } from "react";
// import { MultiSelect } from "react-multi-select-component";
import { MultiSelect } from 'primereact/multiselect';
import "primereact/resources/themes/lara-light-cyan/theme.css";

const Multi = () => {
  const options = [
    { name: "Математик", code: "maths" },
    { name: "Хими", code: "chem" },
    { name: "Биологи", code: "bio" },
    { name: "Газарзүй", code: "gzui" },
    { name: "Түүх", code: "tuuh" },
    { name: "Физик", code: "fizik" },
    { name: "Нийгэм", code: "niigem" },
    { name: "Орос хэл", code: "ohel" },
    { name: "Англи хэл", code: "ahel" },
    { name: "Монгол хэл", code: "mhel" },
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
          <h1 className="font-extrabold text-[30px] text-[#373737]">
          Хичээлтэй холбоотой мэргэжлүүд
        </h1>
       
      <p className="text-[20px] pb-7 mt-5 text-[#373737] max-w-[550px] " >Хичээлүүд сонгон, мэргэжлүүдийн талаарх мэдээллийг авна уу.</p>
      <div className="items-center justify-center w-full lg:w-[30vw]">
            <MultiSelect value={selectedCities} onChange={(e) => setSelectedCities(e.value)} options={options} optionLabel="name" display="chip" 
                placeholder="Сонгох" maxSelectedLabels={10} className="border-solid w-full justify-center" />
      </div>
      {/* <div>
        <MultiSelect
          className="w-[150px] bg-[#aaa]"
          options={options}
          value={selected}
          onChange={setSelected}
          labelledBy="Select"
        />
      </div> */}
    </div>
  );
};
export default Multi;
