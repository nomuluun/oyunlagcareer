export default function CareerResult(){
    return(
        <div className=" max-w-screen-xl flex flex-col items-center justify-between mx-auto p-4 border">
        <div className="flex">
            <div className=" w-[642px] h-[559px] p-12  text-[#373737] flex flex-col">
                <h1 className="text-[48px] font-bold w-[573px] h-auto text-left leading-none py-4 my-4">Ирээдүйгээ тодорхойлж,
                    хичээхэд <span className="text-[#5E17EB]">найз</span> чинь байя.</h1>
                    <p className="text-[24px] w-[630px] h-[116px] font-medium my-4 py-4">Ирээдүйн чиглэлээ тодорхойлох тест, мөрөөдлийн мэргэжлээ олох мэдээллийн сан, илүү ихийг сурах хичээлүүдийг найзаа болгоорой!</p>
            <div className="w-[217px] h-[77px] rounded-full text-[#373737] bg-[#FFBD59] text-center flex items-center justify-center font-bold hover" > <button>Тест өгөх</button></div>
            </div>
            <div className="h-[530px] w-[500px] border-8 px-8"><img src="/Saly-1.png" alt="" className="drop-shadow-2xl" /></div>
        </div>
        </div>
    )
}