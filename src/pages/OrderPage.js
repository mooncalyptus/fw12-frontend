import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch , useSelector} from "react-redux";
import { chooseSeat as chooseSeatAction } from "../redux/reducers/transactions";
import GridSeat from "./GridSeat";
import SecondGridSeat from "./SecondGridSeat";
import NavbarLogin from "../components/NavbarLogin";

const OrderPage = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [selectedSeat, setSelectedSeat] = React.useState([])
    const {movieTitle, bookingDate, bookingTime, price, cinemaName} = useSelector((state) => state.transactions)
    // console.log(selectedSeat.length)

    const selectSeat = (seat) => {
        // console.log(seat)
        if (selectedSeat.includes(seat)) {
            setSelectedSeat([...selectedSeat.filter((exist) => exist !== seat)])
        } else {
            setSelectedSeat([
                ...selectedSeat, seat
            ])
        }
    }


// console.log(selectedSeat)
    const checkout = () => {
        dispatch(chooseSeatAction({seatNumber: selectedSeat.join(", "), total_price: price * selectedSeat.length}))
        navigate('/paymentpage')
    }
    return (
        <div className="font-mulish">
            <NavbarLogin />

            <div className="bg-[#E5E5E5]">
                <div className="text-2xl font-bold ml-[70px] pt-6">Movie Selected</div>
                <div className="grid grid-cols-3">
                    <div className="col-span-2">
                        <div className="flex flex-col">

                            <div className="flex bg-white ml-[70px] mt-6">
                                <div className="grow pl-12 py-9">{movieTitle}</div>
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
                                    <div className="grid grid-cols-2 gap-11">
                        <div className="grid grid-rows-8 gap-3">{["A", "B", "C", "D", "E", "F", "G", " "].map((alphabet, _i) => {
                            return <div className="grid grid-cols-8 gap-4">
                                {[0, 1, 2, 3, 4, 5, 6, 7].map((index, _i) => {
                                    if (index > 0) {
                                        if (alphabet !== " ") {
                                            const seatNumber = alphabet + String(index)
                                            return <button onClick={() => selectSeat(seatNumber)} className={`w-6 h-6 bg-[#D6D8E7] hover:bg-[#8EC3B0] rounded ${selectedSeat.includes(seatNumber) ? ' bg-[#8EC3B0]' : ' '}`} />
                                        } else {
                                            return <button className="w-6 h-6" >{index}</button>
                                        }
                                    } else {
                                        return <button className="w-5 h-5" >{alphabet}</button>
                                    }
                                })}
                            </div>
                        })}</div>
                        <div className="grid grid-rows-8 gap-4">{["A", "B", "C", "D", "E", "F", "G", " "].map((alphabet, _i) => {
                            return <div className="grid grid-cols-8 gap-4">
                                {[8, 9, 10, 11, 12, 13, 14].map((index, _i) => {
                                    if (index > 0) {
                                        if (alphabet !== " ") {
                                            const seatNumber = alphabet + String(index)
                                            return <button onClick={() => selectSeat(seatNumber)} className={`w-6 h-6 bg-[#D6D8E7] hover:bg-[#8EC3B0] rounded ${selectedSeat.includes(seatNumber) ? 'bg-[#8EC3B0]' : ' '}`} />
                                        } else {
                                            return <button className="w-6 h-6" >{index}</button>
                                        }
                                    } else {
                                        return <button className="w-5 h-5" >{alphabet}</button>
                                    }
                                })}
                            </div>
                        })}</div>
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
                                    <button className="btn btn-outline btn-accent">Change your movie</button>
                                    <button onClick={checkout} className="btn btn-accent">Checkout now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Column 2 */}
                    <div className="ml-6">
                        <div className="text-2xl font-semibold">Order Info</div>
                        <div className="bg-white mr-6 mt-4">
                            <div className="flex justify-center">
                                <img src={require('../assets/images/footer-2.png')} className="w-[123px] mt-[39px]" alt="desc" />
                            </div>
                            <div className="text-center mt-[13px]">{cinemaName}</div>
                            <div className="mx-6 mt-8">
                                <div className="flex">
                                    <div className="grow">Movie selected</div>
                                    <div>{movieTitle}</div>
                                </div>
                                <div className="flex">
                                    <div className="grow">{bookingDate}</div>
                                    <div>{bookingTime}</div>
                                </div>
                                <div className="flex">
                                    <div className="grow">One ticket price</div>
                                    <div>{price}</div>
                                </div>
                                <div className="flex">
                                    <div className="grow">Seat choosed</div>
                                    {/* {selectedSeat.map((item) => (
                                        return <div></div>
                                    ))} */}
                                    <div>{selectedSeat.join(",")}</div>
                                    
                                </div>
                            </div>
                            <hr className="my-8 bg-gray-200 border-2 dark:bg-gray-700"></hr>
                            <div className="flex px-6 pb-6">
                                <div className="grow text-lg font-semibold">Total Payment</div>
                                <div className="text-[#8EC3B0] font-bold text-2xl">{price * selectedSeat.length}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col ml-32">
                <div className="grid grid-cols-4">
                    <div>
                        <img src={require('../assets/images/logo.png')} className="w-32" alt="desc" />
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
                        <img src={require('../assets/images/footer-1.png')} className="w-30" alt="desc" />
                        <img src={require('../assets/images/footer-2.png')} className="w-30" alt="desc" />
                        <img src={require('../assets/images/footer-3.png')} className="w-30" alt="desc" />
                    </div>
                    <div className="my-8">
                        <div>Follow us</div>
                        <div>
                            <div className="flex">
                                <img src={require('../assets/images/fb.png')} alt="desc" />
                                <div>movietify</div>
                            </div>
                            <div className="flex">
                                <img src={require('../assets/images/ig.png')} alt="desc" />
                                <div>movietify</div>
                            </div>
                            <div className="flex">
                                <img src={require('../assets/images/twt.png')} alt="desc" />
                                <div>movietify</div>
                            </div>
                            <div className="flex">
                                <img src={require('../assets/images/yt.png')} alt="desc" />
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