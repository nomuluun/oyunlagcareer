import CareerTest from "@/components/CareerTest";
import Navbar from "@/components/Navbar"
import Signup from "@/components/Signup"
import Signin from "@/components/Signin"
import Job from "@/components/Job"
import Putter from "@/components/Putter"
import Subject from "@/components/Subject"
import { DataContext, NowJobContext } from "@/context/DataContext";
import { useContext } from "react";
export default function Home() {
    const {nowJob, setNowJob} = useContext(NowJobContext)
    console.log("nowjob",nowJob)
  return (
    <div>
      <Job data={nowJob}/>
    </div>
  )
}
