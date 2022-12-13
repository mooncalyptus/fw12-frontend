import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

function TicketExpired() {
    return (
        <div className="font-mulish">
            <Navbar></Navbar>
            <div className="bg-[#E5E5E5]">
                <div className="flex justify-center content-center">
                    <div className="bg-white mt-[72px] mb-24">
                        <div className="pt-14 text-center text-2xl font-bold">Proof Payment</div>
                        <div className="flex border-2 border-[#AAAAAA] ml-[72px] mr-[70px] mb-32 mt-12 rounded-lg">
                            {/* Bagian tiket pertama */}
                            <div>
                                <div className="flex gap-x-60 bg-[#8EC3B0]">
                                    <div className="pl-14">
                                        <img src={require('../assets/images/removed.png')} className="w-32" alt="desc" />
                                    </div>
                                    <div className="pt-[18px] text-lg font-semibold">Admit One</div>
                                </div>
                                <div className="ml-14">
                                    <div className="text-xs text-[#AAAAAA] mt-8">Movie</div>
                                    <div className="text-base font-semibold">Spider-Man: Homecoming</div>
                                    <div className="grid grid-cols-3 mt-4 mb-[43px]">
                                        <div>
                                            <div className="ticket-title">Date</div>
                                            <div className="ticket-value">07 July</div>
                                        </div>

                                        <div>
                                            <div className="ticket-title">Time</div>
                                            <div className="ticket-value">02:00pm</div>
                                        </div>

                                        <div>
                                            <div className="ticket-title">Category</div>
                                            <div className="ticket-value">Action</div>
                                        </div>

                                        <div>
                                            <div className="ticket-title">Count</div>
                                            <div className="ticket-value">3 pieces</div>
                                        </div>

                                        <div>
                                            <div className="ticket-title">Seats</div>
                                            <div className="ticket-value">C4, C5, C6</div>
                                        </div>

                                        <div>
                                            <div className="ticket-title">Price</div>
                                            <div className="ticket-value">$30.00</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="flex bg-[#8EC3B0] pl-[68px] pr-8">
                                <img src={require('../assets/images/removed.png')} className="w-32" alt="desc" />
                                </div>
                                <div className="flex justify-center pl-[68px] mt-12 pr-8">
                                <div className="bg-[#F5F6F8] pl-10 pr-[50px] pt-[65px] pb-[50px] mb-[47px]">
                                    <div className="text-center text-base font-bold my-8">Ticket Expired</div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default TicketExpired;