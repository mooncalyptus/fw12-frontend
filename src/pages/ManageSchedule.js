import React from "react";
import Dropdown from "./Dropdown";

function ManageSchedule() {
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

            <div className="bg-[#E5E5E5] pl-[70px]">
                <div className="text-2xl font-bold pt-14">Form Schedule</div>
                <div className="bg-white flex">
                    <div className="border-2 border-[#DEDEDE] ml-10 p-9 rounded mt-14">
                        <img src={require('../assets/images/now-1.png')} alt="desc" />
                    </div>
                    <div className="ml-8 mt-12">
                    <div class="mb-6">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                            <Dropdown></Dropdown>
                        </div>
                        <div class="mb-6">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                            <input type="text" id="price" className="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required></input>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ManageSchedule;