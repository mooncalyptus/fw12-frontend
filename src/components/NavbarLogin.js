import React, {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { logout as logoutAction } from "../redux/reducers/auth";
import http from '../helpers/http'


const NavbarLogin = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const LogoutProcess = () => {
    dispatch(logoutAction())
    navigate("/signin")
  }

  const token = useSelector((state) => state?.auth?.token.token)
  const [bio, setBio] = useState({})

   const getProfile = async () => {
    try{
      const response = await http(token).get("/profile")
      setBio(response?.data?.results)
    } catch (error) {
      if(error) throw error
    }
   }

   useEffect(() => {
    if(token){
      getProfile()
    }
   }, [token])

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
                {bio?.picture ? (
                  <img src={bio?.picture} alt="profile"/>
                ) : (
                  <img src={require('../assets/images/profile.png')} alt="profile"/>
                )}
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