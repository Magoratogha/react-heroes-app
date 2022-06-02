import { Link, NavLink, useNavigate } from "react-router-dom";

function Navbar() {

    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/login', { replace: true });
    };

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/marvel">HeroesApp</Link>
                <div className="navbar-collapse">
                    <div className="navbar-nav">
                        <NavLink className="nav-item nav-link" to="/marvel">Marvel</NavLink>
                        <NavLink className="nav-item nav-link" to="/dc">DC</NavLink>
                        <NavLink className="nav-item nav-link" to="/search">Search</NavLink>
                    </div>
                </div>
                <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end ">
                    <ul className="navbar-nav ml-auto">
                        <span className="nav-item nav-link text-warning">Magora</span>
                        <button
                            onClick={handleLogout}
                            className="btn nav-item nav-link">
                                Logout
                        </button>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;