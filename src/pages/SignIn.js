import React from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
    const navigate = useNavigate()
    const url = "http://localhost:8888/auth/login"
    const login = async (e) => {
        try {
            e.preventDefault()
            const email = e.target.email.value
            const password = e.target.password.value
            const results = await axios.post(url, { email, password })
            console.log(results)
            if (email && password) {
                navigate('/home')
            }
        } catch (err) {
            console.log(err.response.data)
            alert('Unknown email/password. Please Sign Up First')
        }
    }
    return (
        <div className="grid grid-cols-3 font-mulish">
            <div className="col-span-2">
                <img src={require('../assets/images/bg.png')} alt="desc" />
            </div>
            <div className="px-8 py-8">
                <div className="text-5xl font-semibold">Sign In</div>
                <div className="text-lg mt-2 text-[#AAAAAA]">Sign in with your data that you entered during your registration</div>
                <div className="">
                    <form onSubmit={login}>
                        <div className="text-base">Email</div>
                        <input type="email" name="email" className="form-input w-full rounded placeholder:text-slate-400 mt-4" placeholder="Write your email"></input>
                        <div className="text-base mt-4">Password</div>
                        <input type="password" name="password" className="form-input w-full rounded placeholder:text-slate-400 mt-4" placeholder="Write your password"></input>
                        <div></div>
                        <>
                            <button type="submit" className="text-black bg-[#9ED5C5] hover:bg-blue-800 hover:text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mt-4 w-full">Sign In</button>
                        </>
                    </form>
                    <div className="flex flex-col">
                        <div className="flex justify-center">Forgot your password? <span className="text-[#8EC3B0]"> Reset now </span></div>
                        <div className="flex justify-center">Don’t have an account? <Link to="/signup"><span className="text-[#8EC3B0]"> Sign Up </span></Link></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn;