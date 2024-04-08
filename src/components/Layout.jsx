import Navbar from "./Navbar";
import Putter from "./Footer";

 
export default function Layout({ children }) {
  return (
    <div className="min-h">
      <Navbar />
      <main>{children}</main>
      <Putter />
    </div>
  )
}