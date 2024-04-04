export default function Nuurhuudas(){
    return(
        <div>
        <div className=" max-w-screen-xl md:grid grid-cols-2 gap-3 mx-auto pt-[80px]  h-auto">
        
            <div className="  p-12  text-[#373737]">
                <h1 className="md:text-[48px]  text-[32px] font-bold text-left leading-none py-4 my-4">Ирээдүйгээ тодорхойлж, <br />
                    хичээхэд <span className="text-[#5E17EB]">найз</span> чинь байя.</h1>
                    <p className="md:text-[24px] text-[16px] font-medium my-4 py-4">Ирээдүйн чиглэлээ тодорхойлох тест, мөрөөдлийн мэргэжлээ олох мэдээллийн сан, илүү ихийг сурах хичээлүүдийг найзаа болгоорой!</p>
            <div className="md:text-[24px] text-[16px] rounded-full text-[#373737] bg-[#FFBD59] text-center flex items-center justify-center font-bold hover:text-[#ffffff] hover:bg-amber-500 w-48 h-16" > <button> <a href="test">Тест өгөх</a></button></div>
            <div><img src="/svg/Vector 3.png" alt="" className="absolute  left-[34vw] top-[55vh] hidden md:block"/></div>
            </div>
            <div className="md:flex items-center justify-center px-8 py-6 hidden"><img src="/Saly-1.png" alt="" className="drop-shadow-2xl mx-auto w-full" /></div>
        </div>
        <div className="border-4 bg-[rgb(255,255,255)] rounded-full max-w-screen-xl flex items-center justify-between mx-auto text-[#5E17EB] font-extrabold md:px-32 md:py-10 px-10 py-8 md:text-[32px] text-[18px] mt-40" >
            <div>
                <p className="">48+ Мэргэжил</p>
            </div>
            <div className="bg-[#5E17EB] md:w-1 w-0.5 md:h-16 h-8"></div>
            <div>
                <p>16 Төрөл</p>
            </div>
            <div className="bg-[#5E17EB] md:w-1 w-0.5 md:h-16 h-8"></div>
            <div>
                <p>10+ Тэтгэлэг</p>
            </div>
        </div>
        </div>
        
    
    );
}