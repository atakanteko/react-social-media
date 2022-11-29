import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import LeftBar from "../components/leftBar/LeftBar";
import RightBar from "../components/rightBar/RightBar";

const Layout = () => {
    return(
        <div className="layout theme-dark">
            <Navbar />
            <div className="layout-container">
                <LeftBar />
                <div style={{ flex:6 }}>
                    <Outlet />
                </div>
                <RightBar />
            </div>
        </div>
    )
}

export default Layout;