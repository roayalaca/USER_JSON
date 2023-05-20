import { Outlet } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

const MainLayout = () => {
    return (
        <div className="general-container">
            <aside className="aside">
            
            </aside>
            <Outlet/>
        </div>
    );
};

export default MainLayout;