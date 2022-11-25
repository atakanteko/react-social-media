import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import LeftBar from "../components/leftBar/LeftBar";
import RightBar from "../components/rightBar/RightBar";

const Layout = () => {
    return(
        <div className="layout">
            <Navbar />
            <div style={{ display: 'flex' }}>
                <LeftBar />
                <Outlet />
                <RightBar />
            </div>
        </div>
    )
}

export default Layout;