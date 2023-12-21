import { NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";


const NavBar = ({setSelectedIndex}) => {
  const {user}= useAuth()
    return (
        <div className="navbar bg-transparent sticky">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Todo</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1  space-x-4">
            <li><NavLink to={'/'}>Home</NavLink></li>
            <li><NavLink to={'/dashboard'}>DashBoard</NavLink></li>
            {
              user ? <li className=""> <button className="btn btn-ghost">LogOut</button></li> : <li className=""><NavLink to={'/login'}>Login</NavLink></li>
            }

          </ul>
        </div>
      </div>
    );
};

export default NavBar;