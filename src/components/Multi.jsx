import React, { useState } from "react";
// import { MultiSelect } from "react-multi-select-component";
import { MultiSelect } from 'primereact/multiselect';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { jobList } from "../../utils/data";
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
console.log(selectedCities);
const filt=()=>{
  // let res = [];
  
  const selectJob = jobList.filter((data)=>{
    const arr = data.lesson;
    console.log('data',data.lesson[0])
    // console.log('data',arr[0],arr[1],arr[2]);
    // data.lesson[0] == 'mat' ? true : false;
  // console.log(arr.includes('mat'));
    // if(data.lesson.includes('mat')){
    //   return true;
    // }
    // else {
    //   return false;
    // }
  })
}
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
      <button onClick={filt}>haih</button>
    </div>
  );
};
export default Multi;
