import React from "react";
import PropTypes from "prop-types";
function Navbar(props) {
  return (
    <nav className={`navbar bg-${props.mode ? 'dark': 'light'}`}>
      <div className="container-fluid">
        <h1 className={`navbar-brand text-${props.mode ? 'light': 'dark'}`}>Text Utils</h1>
       
         
        <div className="form-check form-switch">
  <input onChange={()=> {
    props.changeDarkMode();
  }} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked={props.mode}/>
  <label className={`form-check-label text-${props.mode ? 'light': 'dark'}`} htmlFor="flexSwitchCheckChecked ">Enable Dark Mode</label>
</div>
        
      </div>
    </nav>
  );
}

export default Navbar;

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};
Navbar.defaultProps = {
  title: "Title",
};
