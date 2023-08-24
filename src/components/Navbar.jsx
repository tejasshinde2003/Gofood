import React from 'react'
import {Link} from 'react-router-dom'
export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-success">
                <div className="container-fluid">
                    <Link className="navbar-brand fs-1 text-danger fst-italic" to="/">GoFood</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <Link className="nav-link fst-italic" to="/">Home <span className="sr-only"></span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fst-italic" to="/login">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fst-italic" to="/creatuser">Signup</Link>
                            </li>
                        </ul>
                    </div>
                    </div>
            </nav>

        </div>
    )
}
