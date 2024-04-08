import SuggestedCareer from "@/components/SuggestedCareer";
import { jobList } from "../../utils/data";
import Career from "@/components/Career";
export default function alljob(){
    return <div className="bg-[#f5f5f5]">
        <Career/>
        <div className="flex md:flex-row justify-evenly mt-[30px] flex-wrap flex-col p-5 gap-9 items-center max-w-screen-xl mx-auto">
        {jobList.map((data,index)=>{
            return <SuggestedCareer data={data}/>
        })}
        </div>
    </div>
}