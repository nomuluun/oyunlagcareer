import SuggestedCareer from "@/components/SuggestedCareer";
import { jobList } from "../../utils/data";
export default function alljob(){
    return <div>
        {jobList.map((data,index)=>{
            return <SuggestedCareer data={data}/>
        })}
    </div>
}