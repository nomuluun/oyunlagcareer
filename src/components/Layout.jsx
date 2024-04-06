import Navbar from "./Navbar";
import Putter from "./Putter";

 
export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Putter />
    </>
  )
}