//import * as pages from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home'
import About from './pages/AboutMe/aboutme'
import Contact from './pages/Home/Home'
import NoPage from './pages/404'
import Layout from "./pages/Layout/Layout";
import Apitest from "./pages/Apitest/Apitest";

function Router() {
    return (
        <>
            
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<Home />} />
                        <Route path="home" element={<Home />} />
                        <Route path="aboutme" element={<About />} />
                        <Route path="contact" element={<Contact />} />
                        <Route path="apitest" element={<Apitest />} />
                        <Route path="*" element={<NoPage />} />
                        </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default Router;