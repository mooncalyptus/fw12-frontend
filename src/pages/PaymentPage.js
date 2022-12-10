import React from "react";
import { Link } from "react-router-dom";

function PaymentPage(){
    return(
    <div className="font-mulish">
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

            <div className="bg-[#E5E5E5]">
                <div className="grid grid-cols-2">
                    <div>
                        <div className="text-2xl font-bold">Payment Info</div>
                        <div className="bg-white px-10 py-12 mt-6">
                            <div className="flex">
                                <div className="grow text-[#6B6B6B]">Date & time</div>
                                <div className="text-xl">Tuesday, 07 July 2020 at 02:00 </div>
                            </div>
                            <hr className="bg-gray-200 border-2 dark:bg-gray-700"></hr>
                            <div className="flex">
                                <div className="grow text-[#6B6B6B]">Movie title</div>
                                <div className="text-xl">Spider-Man: Homecoming</div>
                            </div>
                            <hr className="bg-gray-200 border-2 dark:bg-gray-700"></hr>
                            <div className="flex">
                                <div className="grow text-[#6B6B6B]">Cinema name</div>
                                <div className="text-xl">CineOne21 Cinema</div>
                            </div>
                            <hr className="bg-gray-200 border-2 dark:bg-gray-700"></hr>
                            <div className="flex">
                                <div className="grow text-[#6B6B6B]">Number of tickets</div>
                                <div className="text-xl">3 pieces</div>
                            </div>
                            <hr className="bg-gray-200 border-2 dark:bg-gray-700"></hr>
                            <div className="flex">
                                <div className="grow text-[#6B6B6B]">Total payment</div>
                                <div className="text-xl">$30,00</div>
                            </div>
                        </div>

                        <div>
                            <div className="text-2xl font-bold">Choose a Payment Method</div>
                            <div className="bg-white">
                                <div className="grid grid-cols-4 px-12 pt-14 gap-4">
                                <div className="border-2 border-[#DEDEDE] flex justify-center">
                                   <img src={require('../assets/images/gpay.png')} className="h-6 mt-2" alt="desc"/>
                                </div>
                                <div className="border-2 border-[#DEDEDE] flex justify-center">
                                    <img src={require('../assets/images/visa.png')} className="h-6 mt-2" alt="desc"/>
                                </div>
                                <div className="border-2 border-[#DEDEDE] flex justify-center">
                                    <img src={require('../assets/images/gopay.png')} className="h-6 mt-2" alt="desc"/>
                                </div>
                                <div className="border-2 border-[#DEDEDE] flex justify-center">
                                    <img src={require('../assets/images/paypal.png')} className="h-6 mt-2" alt="desc"/>
                                </div>
                                <div className="border-2 border-[#DEDEDE] flex justify-center">
                                    <img src={require('../assets/images/dana.png')} className="h-6 mt-2" alt="desc"/>
                                </div>
                                <div className="border-2 border-[#DEDEDE] flex justify-center">
                                    <img src={require('../assets/images/bca.png')} className="h-6 mt-2" alt="desc"/>
                                </div>
                                <div className="border-2 border-[#DEDEDE] flex justify-center">
                                    <img src={require('../assets/images/bri.png')} className="h-6 mt-2" alt="desc"/>
                                </div>
                                <div className="border-2 border-[#DEDEDE] flex justify-center">
                                    <img src={require('../assets/images/ovo.png')} className="h-6 mt-2" alt="desc"/>
                                </div>
                                </div>
                                <div className="flex justify-center content-center pb-14">
                                    <div>Pay via cash.<span className="text-[#8EC3B0]"> See how it work</span></div>
                                </div>
                            </div>
                            <div className="flex mt-6 gap-[220px] mb-6">
                                    <button className="border-2 border-[#8EC3B0] px-6 py-0.5">Previous step</button>
                                    <button className="bg-[#9ED5C5] text-white px-6 py-0.5">Pay your order</button>
                                </div>
                        </div>
                        </div>    

                        <div>
                            <div className="text-2xl font-bold">Personal Info</div>
                            <div className="bg-white">
                                <div>Full Name</div>
                                <input type="text" name="fullName"></input>
                                <div>Email</div>
                                <input type="email" name="email"></input>
                            </div>
                        </div>                
                </div>
            </div>

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

export default PaymentPage