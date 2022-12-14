import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import LeftBar from "../components/leftBar/LeftBar";
import RightBar from "../components/rightBar/RightBar";
import { useContext } from "react";
import { DarkModeContext } from "../context/darkModeContext";

const Layout = () => {
    const { darkMode } = useContext(DarkModeContext)

    return(
        <div className={`layout theme-${darkMode ? 'dark' : 'light'}`}>
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