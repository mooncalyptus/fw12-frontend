import React, { useState } from "react";
import axios from "axios";

function SignUp(){   
    const url = "http://localhost:8888/auth/register"
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        password: ""
    })  
    function submit(e){
        e.preventDefault()
        axios.post(url, {
            firstName: data.firstName,
            lastName: data.lastName,
            phoneNumber: data.phoneNumber,
            email: data.email,
            password: data.password
        })
        .then(res=> {
            console.log(res.data)
        })
    }

    function handle(e){
        const newData = {...data}
        newData[e.target.id] = e.target.value
        setData(newData)
    }
    return(
        <div className="grid grid-cols-3 font-mulish">
            <div className="header">
            <img src={require('../assets/images/bg.png')} alt="desc"/>
            </div>
            <div>
                <div className="mt-28 ml-20">
                <div className="text-5xl font-semibold">Sign Up</div>
                <div className="text-lg font-normal">Fill your additional details</div>
                </div>
                <div className="flex flex-col mx-20 mt-10">
                    {/* FORM */}
                    <form onSubmit={(e)=> submit(e)}>
                    <div className="grid gap-6 mb-6">
                    <div>
            <label className="label-form">First name</label>
            <input onChange={(e)=>handle(e)} value={data.firstName} type="text" name="firstName" className="w-full" placeholder="Please write your first name" id="firstName"></input>
                     </div>
                     <div>
            <label className="label-form">Last name</label>
            <input onChange={(e)=>handle(e)} value={data.lastName} type="text" name="lastName" className="w-full" placeholder="Please write your last name" id="lastName"></input>
                     </div>
                     <div>
            <label className="label-form">Phone Number</label>
            <input onChange={(e)=>handle(e)} value={data.phoneNumber} type="text" name="phoneNumber" className="w-full" placeholder="Please write your phone number" id="phoneNumber"></input>
                     </div>
                     <div>
            <label className="label-form">Email</label>
            <input onChange={(e)=>handle(e)} value={data.email} type="email" name="email" className="w-full" placeholder="Please write your email" id="email"></input>
                     </div>
                     <div>
            <label className="label-form">Password</label>
            <input onChange={(e)=>handle(e)} value={data.password} type="password" name="password" className="w-full" placeholder="Please write your password" id="password"></input>
                     </div>
                     <div className="flex justify-center">
                     <button type="submit" className="btn-form">Submit</button>
                     </div>
                    </div>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default SignUp;