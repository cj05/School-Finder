
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import styles from './LayoutComponent.module.scss';
import Footer from "./Footer";
import config from "../../../config.js"
const Layout = () => {

        let navigate = useNavigate();
        const routeChange = (path) => {
            path = config.Path+path
            navigate(path);
        }
        return (
            <>
            <div className={styles.layout+" flex h-screen flex-col"}>
                <div className="sticky top-0 z-50 bg-anothershadeofgrey">

                    <nav className="bg-anothershadeofgrey">
                        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                            <ul className="gap-20 font-medium flex flex-col p-2 md:p-0 mt-4 bg-anothershadeofgrey md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:bg-anothershadeofgrey dark:bg-anothershadeofgrey md:dark:bg-anothershadeofgrey ">
                                <div className='text-4xl text-center p-3 '>
                                    Scholar Plan
                                </div>
                                <div>
                                    <button onClick={()=>routeChange("")} className='h-max p-4 text-2xl border-2 border-y-anothershadeofgrey border-x-grey hover:bg-white'>
                                        Home
                                    </button>
                                    <button onClick={()=>routeChange("university")} className='h-max p-4 text-2xl border-2 border-y-anothershadeofgrey border-x-grey hover:bg-white'>
                                        University
                                    </button>
                                    <button onClick={()=>routeChange("program")} className='h-max p-4 text-2xl border-2 border-y-anothershadeofgrey border-x-grey hover:bg-white'>
                                        Program
                                    </button>
                                    <button onClick={()=>routeChange("test")} className='h-max p-4 text-2xl border-2 border-y-anothershadeofgrey border-x-grey hover:bg-white'>
                                        Test
                                    </button>
                                    <button onClick={()=>routeChange("mbti")} className='h-max p-4 text-2xl border-2 border-y-anothershadeofgrey border-x-grey hover:bg-white'>
                                        MBTI
                                    </button>
                                    <button onClick={()=>routeChange("aboutme")} className='h-max p-4 text-2xl border-2 border-y-anothershadeofgrey border-x-grey hover:bg-white'>
                                        About Us
                                    </button>
                                </div>
                            </ul>
                        </div>
                    </nav>


                    
                </div>
                <div className='bg-white flex-1'>
                <Outlet />
                </div>
                <Footer/>
                
            </div>
            
            </>
        )
    };

    export default Layout;