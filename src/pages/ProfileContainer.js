import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout as logoutAction } from "../redux/reducers/auth";
import http from "../helpers/http";


const ProfileContainer = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [bio, setBio] = React.useState({})
    const token = useSelector((state) => state.auth.token)
    const getProfile = async () => {
        try {
            const response = await http(token).get("/profile")
            setBio(response?.data?.results)
        } catch (error) {
            if (error) throw error
        }
    }

    React.useEffect(() => {
        if (token) {
            getProfile()
        }
    }, [token])

    const LogoutProcess = () => {
        dispatch(logoutAction())
        navigate("/signin")
      }
    return (
        <div>
            <div className="ml-[70px] mt-14 mb-6">
                <div className="bg-white grid-rows-3 rounded-lg">
                    <div className="text-base font-normal text-[#4E4B66] pl-10 pt-10">INFO</div>
                    <div className="flex-col">
                        {bio?.picture ? (
                            <img src={bio?.picture} className="w-[136px] h-[136px] ml-28 rounded-full" alt="desc" />
                        ) : (
                            <img src={require('../assets/images/pp.png')} className="w-[136px] h-[136px] ml-28" alt="desc" />
                        )}
                        <div className="p-0 m-0 text-sm text-[#4E4B66] flex justify-center">{bio.firstName} {bio.lastName}</div>
                        <div className="p-0 m-0 text-sm text-[#4E4B66] flex justify-center">Movieaddict</div>
                    </div>
                    <div>
                        <hr className="my-8 bg-gray-200 border-2 dark:bg-gray-700"></hr>
                        <div className="flex justify-center">
                        <button className="btn btn-outline btn-accent mb-6" onClick={LogoutProcess}>Log Out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileContainer