import SuggestedCareer from "@/components/SuggestedCareer";
import { jobList } from "../../utils/data";
import Career from "@/components/Career";
export default function alljob(){
    return <div>
        <Career/>
        {jobList.map((data,index)=>{
            return <SuggestedCareer data={data}/>
        })}
    </div>
}