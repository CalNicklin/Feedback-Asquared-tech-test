import React from "react";
import { useNavigate} from "react-router-dom";
import { useLocation } from "react-router-dom";
import './Header.css';

function Header() {

    const navigate = useNavigate();
    const location = useLocation();
  
    const hideBackButton = location.pathname === '/';

    return (
        <div className='header'>
        <h1>Fetch me a cocktail</h1>
        <button className='back' onClick={() => navigate(-1)} style={{ opacity: hideBackButton ? '0' : '10' }}>BACK</button>
        </div>
    )
};

export default Header;