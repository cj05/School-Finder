import { useNavigate } from "react-router-dom";
import config from "../../../config.js"
export default function revert(props) {
    let navigate = useNavigate();
    const routeChange = (path) => {
        path = config.Path + path
        navigate(path);
    }
    return (
        <div className="flex gap-2.5 text-lg border-2 border-blue p-2 rounded-xl text-black whitespace-nowrap">
            {props.tab.map((x) => <><button onClick={()=>routeChange(x[1])} className="grow my-auto">{x[0]}</button><div className="grow my-auto"> 	&#60; </div></>)}
            <button className="grow my-auto">{props.curr}</button>
        </div>
    )
}