import React from "react";
import { useDispatch, useSelector } from "react-redux";
import NavbarLogin from "../components/NavbarLogin";
import Footer from "../components/Footer";
import ProfileContainer from "./ProfileContainer";
import { Link } from "react-router-dom";

const OrderHistory = () => {
    const dispatch = useDispatch()
    
    const {bookingDate, bookingTime, movieTitle} = useSelector((state) => state.transactions)
    return (
        <div className="font-mulish">
            <NavbarLogin />
            <div className="grid grid-cols-3 bg-[#E5E5E5]">
                <div>
                    <ProfileContainer />
                </div>
                <div className="col-span-2">
                    <div className="mt-14 ml-8">
                        <div className="bg-white flex gap-14 rounded-lg mr-[70px]">
                           <Link to="/profilepage"> <div className="pl-12 py-6">Account Settings</div> </Link>
                            <div className="py-6">Order History</div>
                        </div>
                        <div className="bg-white mt-12 mr-[70px] pl-12 rounded-md">
                            <div className="text-[#AAAAAA] pt-10">{bookingDate} - {bookingTime}</div>
                            <div className="text-2xl font-semibold">{movieTitle}</div>
                            <hr className="my-8 bg-gray-200 border-2 dark:bg-gray-700"></hr>
                            <div className="flex pb-8">
                                <div className="grow">
                                    <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Ticket Active</button>
                                </div>
                                <div className="pr-[35px]">See Details</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default OrderHistory