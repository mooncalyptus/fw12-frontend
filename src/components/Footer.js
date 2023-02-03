import React from "react";

function Footer(){
    return(
        <div>
    <div className="flex flex-col ml-32">
    <div className="grid grid-cols-4">
        <div>
        <img src={require('../assets/images/logo.png')} className="w-32" alt="desc"/>
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
            <img src={require('../assets/images/footer-1.png')} className="w-30" alt="desc"/>
            <img src={require('../assets/images/footer-2.png')} className="w-30" alt="desc"/>
            <img src={require('../assets/images/footer-3.png')} className="w-30" alt="desc"/>
        </div>
        <div className="my-8">
            <div>Follow us</div>
            <div>
                <div className="flex">
                <img src={require('../assets/images/fb.png')} alt="desc"/>
                <div>movietify</div>
                </div>
                <div className="flex">
                <img src={require('../assets/images/ig.png')} alt="desc"/>
                <div>movietify</div>   
                </div>
                <div className="flex">
                <img src={require('../assets/images/twt.png')} alt="desc"/>
                <div>movietify</div> 
                </div>
                <div className="flex">
                <img src={require('../assets/images/yt.png')} alt="desc"/>
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

export default Footer;