import React from "react";
import Navbar from "./Navbar";

function ProfilePage() {
    return (
        <div className="font-mulish">
            <Navbar></Navbar>
            <div className="grid grid-cols-3 bg-[#E5E5E5]">
                <div className="ml-[70px] mt-14">
                    <div className="bg-white grid-rows-3 rounded-lg">
                        <div className="text-base font-normal text-[#4E4B66] pl-10 pt-10">INFO</div>
                        <div className="flex-col">
                            <img src={require('../assets/images/pp.png')} className="w-[136px] h-[136px] ml-28" alt="desc" />
                            <div className="text-xl p-0 m-0 font-semibold flex justify-center">Jonas El Rodriguez</div>
                            <div className="p-0 m-0 text-sm text-[#4E4B66] flex justify-center">Movieaddict</div>
                        </div>
                        <div>
                            <hr className="my-8 bg-gray-200 border-2 dark:bg-gray-700"></hr>
                            <div className="flex justify-center">
                                <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Logout</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-2 ml-8 mt-14">
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
                                    <input type="text" id="firstName" className="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required></input>
                                </div>
                                <div class="mb-6">
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                    <input type="email" id="email" className="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required></input>
                                </div>
                            </div>
                            <div>
                                <div class="mb-6 ml-[34px] mr-8">
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
                                    <input type="text" id="lastName" className="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required></input>
                                </div>
                                <div class="mb-6 ml-[34px] mr-8">
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
                                    <div class="flex">
                                        <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                                            +62
                                        </span>
                                        <input type="text" id="phoneNumber" className="rounded-none rounded-r-lg bg-white border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Bonnie Green"></input>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 w-[360px] h-[50px] mt-7">Update Changes</button>
                    <div className="bg-white pl-8 mt-[22px] rounded-lg mr-[70px]">
                        <div className="pt-10">Account and Privacy</div>
                        <hr className="my-8 bg-gray-200 border-2 dark:bg-gray-700"></hr>
                        <div className="flex gap-x-[34px]">
                        <div class="mb-6">
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">New Password</label>
                                    <input type="password" id="newPassword" className="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required></input>
                                </div>
                                <div class="mb-6">
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
                                    <input type="password" id="confirmPassword" className="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required></input>
                                </div>
                        </div>
                    </div>
                    <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 w-[360px] h-[50px] mt-7 mb-9">Update Changes</button>
                </div>
            </div>
            <div className="flex flex-col ml-32 mt-9">
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

export default ProfilePage;