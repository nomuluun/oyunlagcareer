import SuggestedCareer from "@/components/SuggestedCareer";
import { jobList } from "../../utils/data";
import Career from "@/components/Career";
export default function alljob(){
    return <div className="bg-[#f5f5f5]">
        <Career/>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full justify-evenly mt-[30px] flex-wrap p-5 gap-9 items-center max-w-screen-xl mx-auto">
        {jobList.map((data,index)=>{
            return <SuggestedCareer data={data}/>
        })}
        </div>
    </div>
}