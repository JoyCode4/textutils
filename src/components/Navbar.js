import React from "react"
import PropTypes from "prop-types"

function Navbar(props){
    return (
        <nav className={`navbar navbar-expand-lg bg-body-tertiary bg-${props.mode}`} data-bs-theme={`${props.mode}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">{props.titleName}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                    
                    </ul>
                    <div className={`form-check form-switch m-3 text-${props.mode==="dark"?"light":"dark"} `}>
                        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">DarkMode</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    titleName : PropTypes.string.isRequired
}

// Navbar.defaultProps={
//     name : "Name Here"
// }



export default Navbar;