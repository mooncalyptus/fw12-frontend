import React from "react";
import { Link } from "react-router-dom";
import GridSeat from "./GridSeat";
import SecondGridSeat from "./SecondGridSeat";

function OrderPage(){
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
                <div className="text-2xl font-bold ml-[70px] pt-6">Movie Selected</div>
                <div className="grid grid-cols-3">
                    <div className="col-span-2">
                        <div className="flex flex-col">

                            <div className="flex bg-white ml-[70px] mt-6">
                                <div className="grow pl-12 py-9">Spider-Man: Homecoming</div>
                                <div className="py-9">
                                    <button className="bg-[#E5E5E5] mr-9 p-1.5 rounded text-[#8EC3B0] font-bold">Change Movie</button>
                                </div>
                            </div>
                            {/* Grid 2 */}
                            <div>
                                <div className="text-2xl font-bold ml-[70px] mt-12">Choose your seat</div>
                                <div className="bg-white ml-[70px] mt-6">
                                    <div className="flex flex-col">
                                        <div className="flex justify-center pt-[106px]">Screen</div>
                                        <hr className="my-8 mx-[152px] bg-gray-200 border-2 dark:bg-gray-700"></hr>
                                    </div>
                                    <div className="grid grid-cols-2 gap-x-11">
                                <GridSeat></GridSeat>
                                <SecondGridSeat></SecondGridSeat>
                                </div>
                                <div className="text-lg font-semibold ml-9">Seating Key</div>
                                <div className="flex mt-5 pb-[102px]">
                                    <div className="flex gap-4 ml-10">
                                        <div className="btn-seat"></div>
                                        <div>Available</div>
                                    </div>
                                    <div className="flex gap-4 ml-10">
                                        <div className="w-[26px] h-[26px] bg-[#8EC3B0]"></div>
                                        <div>Selected</div>
                                    </div>
                                    <div className="flex gap-4 ml-10">
                                        <div className="w-[26px] h-[26px] bg-[#6E7191]"></div>
                                        <div>Sold</div>
                                    </div>
                                </div>
                                </div>
                                <div className="flex ml-[70px] mt-10 gap-[220px] mb-[70px]">
                                    <button className="border-2 border-[#8EC3B0] px-6 py-0.5">Change your movie</button>
                                    <button className="bg-[#9ED5C5] text-white px-6 py-0.5">Checkout now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Column 2 */}
                    <div className="ml-6">
                        <div className="text-2xl font-semibold">Order Info</div>
                        <div className="bg-white mr-6 mt-4">
                            <div className="flex justify-center">
                            <img src={require('../assets/images/footer-2.png')} className="w-[123px] mt-[39px]" alt="desc"/>
                            </div>
                            <div className="text-center mt-[13px]">CineOne 21 Cinema</div>
                            <div className="mx-6 mt-8">
                                <div className="flex">
                                    <div className="grow">Movie selected</div>
                                    <div>Spider-Man: Homecoming</div>
                                </div>
                                <div className="flex">
                                    <div className="grow">Tuesday, 07 July 2020</div>
                                    <div>02:00</div>
                                </div>
                                <div className="flex">
                                    <div className="grow">One ticket price</div>
                                    <div>$10</div>
                                </div>
                                <div className="flex">
                                    <div className="grow">Seat choosed</div>
                                    <div>C4, C5, C6</div>
                                </div>
                            </div>
                            <hr className="my-8 bg-gray-200 border-2 dark:bg-gray-700"></hr>
                            <div className="flex px-6 pb-6">
                                <div className="grow text-lg font-semibold">Total Payment</div>
                                <div className="text-[#8EC3B0] font-bold text-2xl">$30</div>
                            </div>
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

export default OrderPage