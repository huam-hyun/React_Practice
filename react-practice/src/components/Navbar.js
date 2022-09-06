import React from 'react'
import{
    Link,
    NavLink
} from 'react-router-dom'

const Navbar = () =>{

    return (
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
                <Link class="navbar-brand" to="/">Home</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            {/* NavLink로 얻을 수 있는 이점: active 클래스로 현재 위치에 대한 css처리를 해 줄수 있다 */}
                            <NavLink
                                className="nav-link"
                                activeClassName="active"
                                to="/movies"
                            >
                                Movies
                            </NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink
                                className="nav-link"
                                to="/users"
                                activeClassName="active"
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