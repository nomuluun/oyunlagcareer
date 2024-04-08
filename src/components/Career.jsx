import Multi from "@/components/Multi";
export default function Career() {
  return (
    <div className="bg-[#F5F4F9] max-w-screen-xl gap-x-3 gap-y-10 mx-auto px-5 md:pt-[40px] pt-[30px] h-auto">
     <div className="flex">
        <div className=" grid md:grid-cols-3 md:pt-[10px]">
          <Multi />
      <img
        src="Saly-10.png"
        className="relative col-span-1 hidden md:block w-full max-w-[500px] "
        alt=""
        />
         <img src="gurvljin.png" className="absolute hidden md:block  top-[80px] left-[350px] w-[20vw] max-w-[200px] md:top-[250px] md:left-[45vw] rotate-12 md: " alt="" />
        </div>
        </div>
        <h1 className="font-bold pt-5 font">Хайсан илэрцүүд:</h1>
    </div>
  );
}
