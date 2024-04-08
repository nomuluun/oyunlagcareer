import Navbar from "./Navbar";
import Putter from "./Footer";

 
export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Putter />
    </>
  )
}