import React from "react";
import { Link } from "react-router-dom";

function Navbar(){
    return(
        <div>
                            <div className="flex">
                <div className="flex items-center grow mx-32">
                <img src={require('../assets/images/logo.png')} className="w-32" alt="desc"/>
                <Link to ="/homepage"><div className="mx-20">Home</div></Link>
                <div className="mx-3">List Movie</div>
                </div>
                <div className="mr-32 mt-4 flex">
                <>
                <img src={require('../assets/images/search.png')} className="h-6 mt-2" alt="desc"/>
                <img src={require('../assets/images/profile.png')} className="h-10 ml-2.5" alt="desc"/>
                </>
                </div>
                </div>
        </div>
    )
}

export default Navbar;