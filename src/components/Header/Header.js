import React, {useState} from "react";
import "./Header.css";
import down from '../../images/icon-arrow-down.svg'
import up from '../../images/icon-arrow-up.svg'
import menu from '../../images/icon-menu.svg'
import cross from '../../images/icon-close-menu.svg'
import { featureData } from "../../Lib/data";
import { companyData } from "../../Lib/data";

import Menu from "./Menu";
const Header = () => {
  const [showFeatures, setShowFeatures] = useState(false)
  const [showCompany, setShowCompany] = useState(false)
  const [showMenu, setShowmenu] = useState(false)
  const toggleFeatures = e => {
    setShowFeatures(prev => !prev)
  }
  const toggleCompany = e => {
    setShowCompany(prev => !prev)
  }
  const toggleMenu = e => {
    setShowmenu(prev => !prev)
  }
  return (
    <div className="header">
      <div className="brand">
        <h1>snap</h1>
      </div>
      <div className="menu-icon" ><img src={showMenu ? cross : menu} onClick={toggleMenu}/></div>
    <div className={`responsive-menu ${showMenu ? 'active' : ''}`}>
    
      <ul>
        <li  onMouseEnter={toggleFeatures} onMouseLeave={toggleFeatures} ><div >Features <img src={showFeatures ? up : down}/></div> {showFeatures && <Menu list={featureData} isFeatures={true}/>}</li>
        <li onMouseEnter={toggleCompany} onMouseLeave={toggleCompany}> <div>Company <img src={showCompany ? up : down}/></div>{showCompany && <Menu list={companyData} isFeatures={false}/>}</li>
        <li>Careers</li>
        <li>About</li>
      </ul>
      <div className="auth">
        <button>Login</button>
        <button>Register</button>
      </div>
      </div>
    </div>
  );
};

export default Header;
