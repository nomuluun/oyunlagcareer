export default function SuggestedCareer({ data }) {
  console.log("suggestCareer=", data);
  let ab = String(data.aboutJob);
  return (
    <div className="md:w-[30%] bg-[#f5f5f5] text-[#5E17EB] hover:bg-[#5E17EB] hover:text-[#ffffff] rounded-[48px] flex flex-col justify-center items-center h-[247px] space-y-[20px] box-shad w-full">
      <h1 className="text-[24px] font-bold ">
        {" "}
        {data.jobTitle.charAt(0).toUpperCase()+data.jobTitle.slice(1)}{" "}
      </h1>
      <div className="flex flex-row space-x-[15px]">
        <img src="/svg/Rectangle 14.png" alt="" className="w-[90px]" />
        <p className="w-[182px] ">{ab.substr(0, 50)}...</p>
      </div>
      <div className="flex space-x-5">
        <p className="font-bold ">ЭЕШ өгөх хичээлүүд</p>
        <div className="flex -space-x-[20px]">
          <img src="/svg/bio.png" alt="" className="w-[38px]" />
          <img src="/svg/chem.png" alt="" className="w-[38px]" />
          <img src="/svg/math.png" alt="" className="w-[38px]" />
        </div>
      </div>
    </div>
  );
}
