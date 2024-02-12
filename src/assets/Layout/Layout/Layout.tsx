
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import styles from './LayoutComponent.module.scss';
import Footer from "./Footer.js";
import config from "../../../../config.js"
const Layout = () => {

  let navigate = useNavigate();
  const routeChange = (path) => {
    path = config.Path + path
    navigate(path);
  }
  return (
    <div>
      <div className="sticky top-0  z-50 flex gap-5 justify-between items-center px-11 py-2.5 bg-blue-darker max-md:flex-wrap max-md:px-5">
        <button onClick={() => routeChange("")} className="grow self-stretch my-auto text-2xl text-black whitespace-nowrap">
          Scholar Plan
        </button>
        <div className="flex gap-5 justify-between self-stretch my-auto text-xl text-white whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
          <button onClick={() => routeChange("")} className="grow">Home</button>
          <button onClick={() => routeChange("result")}>University</button>
          <button onClick={() => routeChange("program")}>Program</button>
          <button onClick={() => routeChange("test")}>Test</button>
          <button onClick={() => routeChange("mbti")}>MBTI</button>
          <button onClick={() => routeChange("mbti")} className="grow">About Us</button>
        </div>
        <div className="flex gap-5 justify-between self-stretch">
          <img
            loading="lazy"
            srcSet="img/search.png"
            className="my-auto aspect-square w-[35px]"
          />
          <img
            loading="lazy"
            srcSet="img/user.png"
            className="w-10 aspect-square"
          />
        </div>
      </div>

      <Outlet />
      <Footer />


    </div>
  )
};



export default Layout;