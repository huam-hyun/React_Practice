import React from 'react'
import{
    Link,
    NavLink
} from 'react-router-dom'

const Navbar = () =>{

    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Home</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            {/* NavLink로 얻을 수 있는 이점: active 클래스로 현재 위치에 대한 css처리를 해 줄수 있다 */}
                            <NavLink
                                className="nav-link"
                                to="/movies"
                            >
                                Movies
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className="nav-link"
                                to="/users"
                            >
                                Users
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar