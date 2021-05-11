import React, { useState } from 'react';
import { NavLink,Link} from 'react-router-dom';
import { Drawer, Button } from 'antd';
import './navbar.css';
import logo from '../../assets/img/logo_trans_low.png';

function Navbar() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  return (
    <nav id='navbar'>
      <div className="logo">
        <NavLink to="/home" className="nav-logo" activeClassName="none">
          <img src={logo} />
        </NavLink>
      </div>

      <ul className="nav-links">
        <li>
          <NavLink to="/home" className="nav-item" activeClassName="active">
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink to="/sponsors" className="nav-item" activeClassName="active">
            SPONSORS
          </NavLink>
        </li>

        <li>
          <NavLink to="/gallery" className="nav-item" activeClassName="active">
            GALLERY
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/achievements"
            className="nav-item"
            activeClassName="active"
          >
            ACHIEVEMENTS
          </NavLink>
        </li>

        <li>
          <NavLink to="/contact" className="nav-item" activeClassName="active">
            CONTACT US
          </NavLink>
        </li>
        <li>
          <Link to={{ pathname: "https://blog.roboconcrce.org/" }} target="_blank" className="nav-item" activeClassName="active">
            
              BLOGS
          </Link> 
          
        </li>

      </ul>

      <Button className="burger" onClick={showDrawer}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </Button>

      <Drawer
        title="ROBOCON CRCE"
        placement="right"
        closable={true}
        onClose={onClose}
        visible={visible}
      >
        <div className="drawer">
          <NavLink to="/home" className="nav-item" activeClassName="active">
            HOME
          </NavLink>

          <NavLink to="/sponsors" className="nav-item" activeClassName="active">
            SPONSORS
          </NavLink>

          <NavLink to="/gallery" className="nav-item" activeClassName="active">
            GALLERY
          </NavLink>

          <NavLink
            to="/achievements"
            className="nav-item"
            activeClassName="active"
          >
            ACHIEVEMENTS
          </NavLink>

          <NavLink to="/contact" className="nav-item" activeClassName="active">
            CONTACT US
          </NavLink>

          <Link to={{ pathname: "https://blog.roboconcrce.org/" }} target="_blank" className="nav-item" activeClassName="active">
            
            BLOGS
        </Link> 
        </div>
      </Drawer>
    </nav>
  );
}

export default Navbar;
