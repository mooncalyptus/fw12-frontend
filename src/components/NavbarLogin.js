import React from 'react'
import {useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { logout as logoutAction } from "../redux/reducers/auth";


const NavbarLogin = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const LogoutProcess = () => {
    dispatch(logoutAction())
    navigate("/signin")
  }
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <img src={require('../assets/images/logo.png')} className="w-32" alt="desc" />
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input type="text" placeholder="Search" className="input input-bordered" />
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={require('../assets/images/profile.png')} alt="profile"/>
              </div>
            </label>
            <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li><a>Settings</a></li>
              <li><button onClick={LogoutProcess}>Logout</button></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default NavbarLogin