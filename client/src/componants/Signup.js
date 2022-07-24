import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = (props) => {
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpasswowrd: "" })
    let navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        const port =  "https://my-online-notebook.herokuapp.com" || "http://localhost:5000" ;
        const response = await fetch(`${port}/api/auth/createuser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password })
        });
        const json = await response.json()
        console.log(json);
        if (json.Success) {
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken);
            navigate('/');
            props.showAlert("Successfully signed up", "success")


        }
        else {
            props.showAlert("Invalid details", "danger")
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    return (
        <div className='container col-lg-4 col-md-8'>
            <form onSubmit={handleSignup}>
                <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                        <label className="form-label" htmlFor="name">Name</label>
                        <input type="name" id="name" name='name' onChange={onChange} className="form-control" />
                    </div>
                </div>
                <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                        <label className="form-label" htmlFor="email">Your Email</label>
                        <input type="email" id="email" name='email' onChange={onChange} className="form-control" required />
                    </div>
                </div>
                <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                        <label className="form-label" htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" onChange={onChange} className="form-control" required minLength={5} />
                    </div>
                </div>
                <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                        <label className="form-label" htmlFor="cpassword">Confirm Password</label>
                        <input type="password" id="cpassword" name="cpassword" onChange={onChange} className="form-control" required minLength={5} />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary" >Sign Up</button>
            </form>

        </div>
    )
}

export default Signup
