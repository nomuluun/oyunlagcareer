import Multi from "@/components/Multi";
export default function Career() {
  return (
    <div className="bg-[#F5F4F9] max-w-screen-xl flex justify-items-center gap-x-3 gap-y-10 mx-auto px-5 md:pt-[40px] pt-[30px] h-auto">
      <div>
        <h1 className="font-extrabold text-[30px] text-[#373737]">
          Хичээлтэй холбоотой мэргэжлүүд
        </h1>
        <div className="bg-[#F5F4F9] grid md:grid-cols-4 md:pt-[10px]"></div>
          <Multi />
      </div>
      <img
        src="Saly-10.png"
        className="relative col-span-1 md:w-[30vw] "
        alt=""
      />
      <div className="">
        <h1 className="font-bold">Хайсан илэрцүүд:</h1>
      </div>
    </div>
  );
}
