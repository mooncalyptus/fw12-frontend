import React from "react";
import { Link } from "react-router-dom";

const Homepage = ()=> {
    return(
        <div className="font-mulish">
            <div className="bg-white flex">
            <div className="flex items-center grow mx-32">
            <img src={require('../assets/images/logo.png')} className="w-32" alt="desc"/>
            <div className="mx-20">Home</div>
            <div className="mx-3">List Movie</div>
            </div>
            <div className="mr-32">
            <>
            <Link to="/homepage"><button type="button" className="text-black bg-[#9ED5C5] hover:bg-blue-800 hover:text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mt-4 w-30">Sign In</button> </Link>
            </>
            </div>
            </div>

            <div className="grid grid-cols-2 my-12">
                <div className="grid content-center justify-center">
                    <div className="text-[#A0A3BD] text-2xl">Nearest Cinema, Newest Movie, </div>
                    <div className="text-[#9ED5C5] text-5xl font-bold">Find out now!</div>
                </div>
                <div className="grid justify-center content-center">
                <img src={require('../assets/images/header.png')} alt="desc"/>
                </div>
            </div>

            <div className="bg-[#F5F6F8]">

            </div>
        </div>

    )
}

export default Homepage;
