import { Outlet } from "react-router-dom";
import Navigation from "../components/navigation/Navigation";

export default function PageTemplate(){
    return <>
        <Navigation/>
        <div className="px-[34px] py-2.5"><Outlet/></div>
    </>
}