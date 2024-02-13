//import * as pages from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home'
import About from './pages/AboutMe/aboutme'
import Contact from './pages/Home/Home'
import NoPage from './pages/404'
import Layout from "./assets/Layout/Layout/Layout.js";
import Viewer from "./pages/Viewer/Viewer";
import Apitest from "./pages/Apitest/Apitest";
import Result from "./pages/Result/result"
import Test from "./pages/Test/test"
import TestPreview from "./pages/TestPreview/test"
import TestForm from "./pages/TestForm/testForm"
import University from "./pages/University/University"
import Program from "./pages/Program/program"
import ComponentTest from "./pages/ComponentTest/aboutme"
import TestResults from "./pages/TestResult/testResult"
import config from "../config.js"
function Router() {
    return (
        <>
            
            <BrowserRouter>
                <Routes>
                    <Route path={config.Path} element={<Layout/>}>
                        <Route index element={<Home />} />
                        <Route path="testResult" element={<TestResults />} />
                        <Route path="home" element={<Home />} />
                        <Route path="aboutme" element={<About />} />
                        <Route path="contact" element={<Contact />} />
                        <Route path="apitest" element={<Apitest />} />
                        <Route path="result" element={<Result />} />
                        <Route path="view" element={<Viewer />} />
                        <Route path="test" element={<Test />} />
                        <Route path="testp" element={<TestPreview />} />
                        <Route path="testdo" element={<TestForm />} />
                        <Route path="university" element={<University />} />
                        <Route path="program" element={<Program />} />
                        <Route path="componenttest" element={<ComponentTest />} />
                        <Route path="*" element={<NoPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
            
        </>
    )
}
export default Router;