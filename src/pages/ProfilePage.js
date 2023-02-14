import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import http from "../helpers/http";
import { Formik, Form, Field } from 'formik'
import { logout as logoutAction } from "../redux/reducers/auth";
import Navbar from "../components/Navbar";
import NavbarLogin from "../components/NavbarLogin";
import * as Yup from 'yup'
import YupPasword from 'yup-password'
import FeatherIcon from 'feather-icons-react'
YupPasword(Yup)

const ProfileSchema = Yup.object().shape({
    password: Yup.string()
        .password()
        .min(8, 'Min length 8')
        .minLowercase(1, 'Min lowercase 1')
        .minUppercase(1, 'Min uppercase 1')
        .minSymbols(1, 'Min symbol 1')
        .minNumbers(1, 'Min number 1')
        .required('Password required'),
    confirmPassword: Yup.string().oneOf(
        [Yup.ref('password'), null],
        'Passwords must match',
    )
})
const ProfilePage = () => {
    const [preview, setPreview] = useState('')
    const [file, setFiles] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()

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

    const upload = async (e) => {
        if (file?.size > 1024 * 1024 * 2) {
            window.alert("File too large")
        } else {
            try {
                const form = new FormData()
                form.append("picture", file)
                const { data } = await http(token).patch("/profile", form, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                })
                getProfile()
                document.getElementById('my-modal-4').click()
            } catch (error) {
                window.alert(error.response.data.message)
            }
        }
    }

    const UpdateProfile = async (e) => {
        e.preventDefault()

        const values = {
            firstName: e.target.firstName.value,
            lastName: e.target.lastName.value,
            email: e.target.email.value,
            phoneNumber: e.target.phoneNumber.value
        }
        await http(token).patch("/profile", values)
    }

    const UpdatePassword = async (e) => {
        try{
            e.preventDefault()
            const {data} = await http(token).patch("/profile", {
                password, confirmPassword
            })
            console.log('data masuk')
        } catch (error) {
            if(error) throw error
        }
    }


    const [eyeClicked1, setEyeClicked1] = useState(false)
    const showConfirmPassword = () => {
        if (eyeClicked1 === false) {
            setEyeClicked1(true)
        } else {
            setEyeClicked1(false)
        }
    }

    const [eyeClicked, setEyeClicked] = useState(false)
    const showPassword = () => {
        if (eyeClicked === false) {
            setEyeClicked(true)
        } else {
            setEyeClicked(false)
        }
    }

    return (
        <div className="font-mulish">
            <NavbarLogin />
            <div className="grid grid-cols-3 bg-[#E5E5E5]">
                <div className="ml-[70px] mt-14">
                    <div className="bg-white grid-rows-3 rounded-lg">
                        <div className="text-base font-normal text-[#4E4B66] pl-10 pt-10">INFO</div>
                        <div className="flex-col">
                            {bio?.picture ? (
                                <img src={bio?.picture} className="w-[136px] h-[136px] ml-28 rounded-full" alt="desc" />
                            ) : (
                                <img src={require('../assets/images/pp.png')} className="w-[136px] h-[136px] ml-28" alt="desc" />
                            )}
                            <div className="flex justify-center item-center">
                                {/* The button to open modal */}
                                <label htmlFor="my-modal-4" className="btn btn-outline btn-accent">CHOOSE PICTURE</label>

                                {/* Put this part before </body> tag */}
                                <input type="checkbox" id="my-modal-4" className="modal-toggle" />
                                <label htmlFor="my-modal-4" className="modal cursor-pointer">
                                    <label className="modal-box relative" htmlFor="">
                                        {/* Form upload and preview image */}
                                        <div className="flex flex-col justify-center items-center gap-3">
                                            <div>Upload Image</div>
                                            {preview && <img src={preview} alt="profile" className="w-24 h-24 border border-black rounded-full" />}
                                            {!preview &&
                                                <div className="border border-black py-6 px-6 rounded-full w-24 h-24 overflow-hidden">
                                                    <FeatherIcon icon="upload-cloud" size={48} />
                                                </div>
                                            }
                                            <input type="file" onChange={e => { setPreview(URL.createObjectURL(e.target.files[0])); setFiles(e.target.files[0]) }} className="file-input w-full max-w-xs" />
                                            <button onClick={upload} className="btn btn-outline btn-accent">Select Image</button>
                                        </div>
                                    </label>
                                </label>
                            </div>

                            <div className="text-xl p-0 m-0 font-semibold flex justify-center">{bio.firstName} {bio.lastName}</div>
                            <div className="p-0 m-0 text-sm text-[#4E4B66] flex justify-center">Movieaddict</div>
                        </div>
                        <div>
                            <hr className="my-8 bg-gray-200 border-2 dark:bg-gray-700"></hr>
                            <div className="flex justify-center pb-4">
                                <button className="btn btn-outline btn-accent">Log Out</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-2 ml-8 mt-14">
                    <form onSubmit={UpdateProfile}>
                        <div className="bg-white flex gap-14 rounded-lg mr-[70px]">
                            <div className="pl-12 py-6">Account Settings</div>
                            <div className="py-6">Order History</div>
                        </div>
                        <div className="bg-white mt-12 mr-[70px] rounded-lg">
                            <div className="text-base ml-8 pt-10">Details Information</div>
                            <hr className="my-8 bg-gray-200 border-2 dark:bg-gray-700"></hr>
                            <div className="grid grid-cols-2 pb-16">
                                <div className="ml-8">
                                    <div class="mb-6">
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
                                        <input type="text" id="firstName" className="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                            name="firstName"
                                            defaultValue={bio.firstName} required></input>
                                    </div>
                                    <div class="mb-6">
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                        <input type="email" id="email" className="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" name="email" defaultValue={bio.email} required></input>
                                    </div>
                                </div>
                                <div>
                                    <div class="mb-6 ml-[34px] mr-8">
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
                                        <input type="text" id="lastName" className="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" name="lastName" defaultValue={bio.lastName} required></input>
                                    </div>
                                    <div class="mb-6 ml-[34px] mr-8">
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
                                        <div class="flex">
                                            <input type="text" id="phoneNumber" className="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" name="phoneNumber" defaultValue={bio.phoneNumber} placeholder="Bonnie Green"></input>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 w-[360px] h-[50px] mt-7">Update Changes</button>
                    </form>

                    <div>
                        <form onSubmit={UpdatePassword}>
                            <div className="bg-white pl-8 mt-[22px] rounded-lg mr-[70px]">
                                <form></form>
                                <div className="pt-10">Account and Privacy</div>
                                <hr className="my-8 bg-gray-200 border-2 dark:bg-gray-700"></hr>
                                <div className="flex gap-x-[34px]">
                                    <div className='relative border-b-2 md:border-b-0'>
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">New Password</label>
                                        <FeatherIcon onClick={showPassword} icon={eyeClicked ? 'eye-off' : 'eye'} className='absolute right-5 bottom-3 top-12 opacity-20 cursor-pointer' />
                                        <input type={eyeClicked ? 'text' : 'password'} id="newPassword" className="input md:input-bordered bg-transparent focus:outline-none mt-2 w-64 rounded-2xl" onChange={e => setPassword(e.target.value)} required></input>
                                    </div>
                                    <div className="relative border-b-2 md:border-b-0">
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
                                        <FeatherIcon onClick={showConfirmPassword} icon={eyeClicked1 ? 'eye-off' : 'eye'} className='absolute right-5 bottom-3 top-12 opacity-20 cursor-pointer' />
                                        <input type={eyeClicked1 ? 'text' : 'password'} id="confirmPassword" className="input md:input-bordered bg-transparent focus:outline-none mt-2 w-64 rounded-2xl" onChange={e => setConfirmPassword(e.target.value)} required></input>
                                    </div>
                                </div>
                            </div>
                            <button type="submit" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 w-[360px] h-[50px] mt-7 mb-9">Update Changes</button>
                        </form>
                    </div>
                </div>

            </div>
            <div className="flex flex-col ml-32 mt-9">
                <div className="grid grid-cols-4">
                    <div>
                        <img src={require('../assets/images/logo.png')} className="w-32" alt="desc" />
                        <div>Stop waiting in line. Buy tickets</div>
                        <div>conveniently, watch movies quietly.</div>
                    </div>
                    <div className="my-8">
                        <div>Explore</div>
                        <div>Home</div>
                        <div>List Movie</div>
                    </div>
                    <div className="grid gap-4">
                        <div>Our Sponsor</div>
                        <img src={require('../assets/images/footer-1.png')} className="w-30" alt="desc" />
                        <img src={require('../assets/images/footer-2.png')} className="w-30" alt="desc" />
                        <img src={require('../assets/images/footer-3.png')} className="w-30" alt="desc" />
                    </div>
                    <div className="my-8">
                        <div>Follow us</div>
                        <div>
                            <div className="flex">
                                <img src={require('../assets/images/fb.png')} alt="desc" />
                                <div>movietify</div>
                            </div>
                            <div className="flex">
                                <img src={require('../assets/images/ig.png')} alt="desc" />
                                <div>movietify</div>
                            </div>
                            <div className="flex">
                                <img src={require('../assets/images/twt.png')} alt="desc" />
                                <div>movietify</div>
                            </div>
                            <div className="flex">
                                <img src={require('../assets/images/yt.png')} alt="desc" />
                                <div>movietify</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mr-20 mt-16">
                    <div>
                        © 2022 Tickitz. All Rights Reserved.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage;