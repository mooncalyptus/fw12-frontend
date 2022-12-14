import React from "react";
import Dropdown from "./Dropdown";
import DropdownLocation from "./DropdownLocation";
import DropdownPremiere from "./DropdownPremiere";
import Footer from "./Footer";

function Dashboard() {
    return (
        <div className="font-mulish">
            <div className="flex">
                <div className="flex items-center grow mx-32">
                    <img src={require('../assets/images/logo.png')} className="w-32" alt="desc" />
                    <div className="mx-3 text-base font-semibold text-[#414141]">Dashboard</div>
                    <div className="mx-3 text-base font-semibold text-[#414141]">Manage Movie</div>
                    <div className="mx-3 text-base font-semibold text-[#414141]">Manage Schedule</div>
                </div>
                <div className="mr-32 mt-4 flex">
                    <>
                        <img src={require('../assets/images/search.png')} className="h-6 mt-2" alt="desc" />
                        <img src={require('../assets/images/profile.png')} className="h-10 ml-2.5" alt="desc" />
                    </>
                </div>
            </div>

            <div className="bg-[#E5E5E5] pb-[73px]">
                <div className="grid grid-cols-3 ml-[70px]">
                    <div className="col-span-2">
                        <div className="text-2xl font-bold pt-14">Dashboard</div>
                        <img src={require('../assets/images/grafik.png')} className="mt-[27px]" alt="desc" />
                    </div>
                    <div className="ml-[26px]">
                        <div className="text-2xl font-bold pt-14">Filtered</div>
                        <div className="bg-white rounded flex flex-col gap-y-7 px-6 mt-[27px] mr-[71px] pb-9">
                            <Dropdown></Dropdown>
                            <DropdownPremiere></DropdownPremiere>
                            <DropdownLocation></DropdownLocation>
                            <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Reset</button>
                            <button type="button" className="focus:outline-none text-green-700 bg-white border border-green-700 hover:bg-green-700 hover:text-white focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 ">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Dashboard