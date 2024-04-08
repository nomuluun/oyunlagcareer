import CareerResult from "@/components/CareerResult"
import Navbar from "@/components/Navbar"
import Putter from "@/components/Footer";
import { SidebarContext } from "@/context/DataContext"
import { useContext } from "react";
export default function Page(){
    const {result, setResult} = useContext(SidebarContext)
    console.log("careerResult",result);
    return (
        <div>
            <CareerResult/>
        </div>
    )
}