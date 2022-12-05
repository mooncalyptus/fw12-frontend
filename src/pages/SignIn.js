import React from "react";

const SignIn = () => {
    return(
        <div className="grid grid-cols-2">
            <div>
            <img src={require('../assets/images/bg.png')} className="h-screen w-screen" alt="desc"/>
            </div>
            <div className="px-12 py-8">
                <div className="text-5xl font-semibold">Sign In</div>
                <div className="text-lg mt-2">Sign in with your data that you entered during your registration</div>
                <div className="mt-6">
                <div className="text-base">Email</div>
                <input type="email" class="form-input w-96 rounded placeholder:text-slate-400 mt-4" placeholder="Write your email"></input>
                <div className="text-base mt-4">Password</div>
                <input type="password" class="form-input w-96 rounded placeholder:text-slate-400 mt-4" placeholder="Write your password"></input>
                <div></div>
                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mt-4 w-96">Default</button>
                <div className="flex flex-col justify-center">
                <div>Forgot your password? Reset now</div>
                <div>Don’t have an account? Sign Up</div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn;