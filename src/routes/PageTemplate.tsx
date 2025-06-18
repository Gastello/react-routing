import { Outlet } from "react-router-dom";
import Navigation from "../components/navigation/Navigation";
import Footer from "../components/navigation/Footer";

export default function PageTemplate(){
    return <div className="flex flex-col h-full">
        <Navigation/>
        <div className="px-[34px] py-2.5 grow-1"><Outlet/></div>
        <Footer/>
    </div>
}