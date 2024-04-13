export default function Suggestion() {
  return (
    <div className="min-h-body mx-auto md:flex max-w-screen-xl justify-center items-center  font-bold ">
        <div className="flex justify-center items-center">
        <img src="Saly-15.png" alt="" className="md:w-[500px] w-[200px] drop-shadow-md md:hidden block"/>
      </div>
      <div className=" max-w-[600px] flex flex-col items-center justify-center p-4 pb-[100px]">
        <h1 className="md:text-[36px] text-[24px] text-center py-8">Манай веб хуудсаар зочилсонд баярлалаа.</h1>
        <p className="md:text-[20px]  py-5 px-2">Хэрэв та манай вэб хуудастай танилцсан бол доорх холбоосоор судалгааг бөглөөд өгнө үү. Баярлалаа.</p>
        <button className="rounded-full drop-shadow-xl bg-shar p-5 transition hover:ease-in-out delay-75 hover:text-white tovch ">
        <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=VltWETdsrEeinzPNpy1uNnLykvUH2uxHntU4Zf9ArWRURUVQNlVHNkMzVVRHM1lWTllSSk4xMVpQOS4u" className="font-bold md:text-[20px] text-[14px]">Судалгаа бөглөх </a>

        </button>
      </div>
      <div>
        <img src="Saly-15.png" alt="" className="md:w-[500px] drop-shadow-md hidden md:block"/>
      </div>

    </div>
  );
}
