import React from "react";

function ProfileContainer() {
    return (
        <div>
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
        </div>
    )
}

export default ProfileContainer