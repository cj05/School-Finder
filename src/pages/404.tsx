import { Outlet, Link } from "react-router-dom";
import { useLocation } from 'react-router-dom'
const NoPage = () => {
  const location = useLocation();
  console.log("Not found: "+location.pathname);
  return <h1>404 "{location.pathname}" not found </h1>;
};

export default NoPage;