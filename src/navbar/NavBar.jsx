import { NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";


const NavBar = () => {
  const {user,logout}= useAuth()
  const handleLogout= ()=>{
    logout().then(()=>{
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "LogOut Success",
        showConfirmButton: false,
        timer: 1500
      });
    })
  }
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
              user ? <li className=""> <button className="btn btn-ghost" onClick={()=> handleLogout()}>LogOut</button></li> : <li className=""><NavLink to={'/login'}>Login</NavLink></li>
            }

          </ul>
        </div>
      </div>
    );
};

export default NavBar;