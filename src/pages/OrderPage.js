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
                <div className="text-2xl font-bold ml-[70px]">Movie Selected</div>
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
                                <div className="flex mt-5">
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
                            </div>
                        </div>
                    </div>
                    {/* Column 2 */}
                    <div className="ml-6 border-2 border-black">
                        <div className="text-2xl font-semibold">Order Info</div>
                        <div className="bg-white">
                            <div className="flex flex-col">
                            <img src={require('../assets/images/footer-2.png')} className="w-[123px] flex justify-center" alt="desc"/>
                            <div className="text-center">CineOne 21 Cinema</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderPage