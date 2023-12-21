import { NavLink } from "react-router-dom";


const NavBar = () => {
    return (
        <div className="navbar bg-transparent sticky">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Todo</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li><NavLink to={''}>Home</NavLink></li>
            <li><a>Home</a></li>
            <li className=""><NavLink to={'/login'}>Login</NavLink></li>

          </ul>
        </div>
      </div>
    );
};

export default NavBar;