export default function Signup() {
  return (
    <div className="bg-[#F5F4F9] h-dvh flex justify-center items-center">
      <div className="grid grid-cols-12 gap-4 max-w-[1200px] w-full items-center">
        <div className="col-span-7">
          <h1 className="font-extrabold md:text-[48px] text-xl md:leading-[60px] text-[#373737] pl-5">
            Бидэнтэй <br /> нэгдээрэй!
          </h1>
          <img className=" w-full max-w-[600px]" src="svg/Saly-22 .png" alt="" />
        </div>
        <div className="relative col-span-5">
          <button className="font-bold absolute -right-10 -top-[120px] text-[#5E17EB] text-[20px]">
            Өөрийн хаяг руу нэвтрэх
          </button>
          <h3 className="font-bold text-[24px] text-[#373737] absolute -top-[70px] -left-[40px]">Бүртгүүлэх</h3>
          <form action="" className="flex flex-col ">
            <label htmlFor="" className="font-bold mb-3 text-[20px] text-[#373737]">
              Нэр
            </label>
            <div className="relative mb-5">
              <img
                src="svg/x.png"
                className="absolute right-5 top-5 w-6"
                alt=""
              />
              <input
                type="text"
                placeholder="Нэр"
                className="rounded-full w-full p-[20px] pl-7 shadow-[0_0px_120px_0px_rgba(94,23,235,0.09)]"
              />
            </div>
            <label htmlFor="" className="font-bold mb-3 text-[20px] text-[#373737]">
              Цахим хаяг
            </label>
            <div className="relative mb-5 ">
              <img
                src="svg/x.png"
                className="absolute right-5 top-5 w-6"
                alt=""
              />
              <input
                type="text"
                placeholder="Хаяг@email.com"
                className="rounded-full w-full p-[20px] pl-7 shadow-[0_0px_120px_0px_rgba(94,23,235,0.09)]"
              />
            </div>
            <label htmlFor="" className="font-bold mb-3 text-[20px] text-[#373737]">
              Нууц үг
            </label>
            <div className="relative mb-5">
              <img
                src="svg/eye.png"
                className="absolute right-5 top-5 w-6"
                alt=""
              />
              <input
                type="text"
                placeholder="Нууц үгээ оруулна уу."
                className="rounded-full w-full p-[20px] pl-7 shadow-[0_0px_120px_0px_rgba(94,23,235,0.09)]"
              />
            </div>
            <button className=" bg-[#FFBD59] h-[58px] text-[#373737] rounded-full font-bold p-[9px] text-[20px] shadow-lg w-full max-w-[230px] mx-auto mt-[40px]">
              Хаяг үүсгэх
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
