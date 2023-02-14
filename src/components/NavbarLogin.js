import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout as logoutAction } from "../redux/reducers/auth";
import http from '../helpers/http'


const NavbarLogin = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const LogoutProcess = () => {
    dispatch(logoutAction())
    navigate("/signin")
  }

  const token = useSelector((state) => state.auth.token)
  const [bio, setBio] = useState({})

  const getProfile = async () => {
    try {
      const response = await http(token).get("/profile")
      setBio(response?.data?.results)
    } catch (error) {
      if (error) throw error
    }
  }

  useEffect(() => {
    if (token) {
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
          {/* <div className="form-control">
            <input type="text" placeholder="Search" className="input input-bordered" />
          </div> */}
          <div className="dropdown dropdown-end">
            {!token &&
              <Link to="/signin"> <button className="btn btn-outline btn-accent">Sign In</button></Link>}
            {token &&
              <>
              <div className='flex gap-2'>
                <div className="form-control">
                  <input type="text" placeholder="Search" className="input input-bordered" />
                </div>
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    {bio?.picture ? (
                      <img src={bio?.picture} alt="profile" />
                    ) : (
                      <img src={require('../assets/images/profile.png')} alt="profile" />
                    )}
                  </div>
                </label>
                <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                  <li>
                    <Link to="/profilepage">
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/viewall">
                      List Movie
                    </Link>
                  </li>
                  <li><button onClick={LogoutProcess}>Logout</button></li>
                </ul>
                </div>
              </>}
          </div>
        </div>
      </div>
    </>
  )
}

export default NavbarLogin