import React from 'react'
import { Link, useLocation, useNavigate } from "react-router-dom";


const Navbar = (props) => {
    let navigate= useNavigate()
    let location = useLocation();
    const handleLogout=()=>{
        localStorage.removeItem('token');
        navigate('/login');
        props.showAlert("Successfully loged out","primary")
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><i className="fa-solid fa-book"></i> myNoteBook</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About</Link>
                            </li>
                        </ul>
                        {!localStorage.getItem('token')?<form className="d-flex">
                            <Link className="btn btn-primary mx-1" to="/login" role="button"><i className="fa-solid fa-arrow-right-to-bracket"></i> Login</Link>
                            <Link className="btn btn-primary mx-1" to="/signup" role="button"><i className="fa-solid fa-user-plus"></i> Signup</Link>
                        </form>:<button onClick={handleLogout} className="btn btn-primary mx-1"><i className="fa-solid fa-arrow-right-from-bracket"></i> Logout</button>}
                    </div>
                </div>
            </nav>
            
        </>
    )
}

export default Navbar
