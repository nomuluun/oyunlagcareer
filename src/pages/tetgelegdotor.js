import Navbar from "@/components/Navbar";
import Scholarshipinside from "@/components/Scholarshipinside";
import Putter from "@/components/Footer";
import { useRouter } from "next/router";
export default function Home(){
    const router=useRouter();
    const {data}=router.query;
    console.log("dataa " + data);
    return (
      <div>
        <Scholarshipinside data={data} />
      </div>
    );
}