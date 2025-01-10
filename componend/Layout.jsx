import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className=" text-center main-stayle">
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
}
