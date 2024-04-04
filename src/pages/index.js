import CareerTest from "@/components/CareerTest";
import Navbar from "@/components/Navbar"
import Signup from "@/components/Signup"
import Signin from "@/components/Signin"
import Job from "@/components/Job"
import Putter from "@/components/Putter"
export default function Home() {
  return (<div>
    <Navbar/>
    {/* <CareerTest/> */}
    {/* <Signin/>  */}
    <Job/>
    <Putter/>
    </div>
  )
}