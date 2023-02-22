import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector , useDispatch} from "react-redux";
import { createTransaction as trxAction} from "../redux/actions/transactions";
import http from "../helpers/http";
import NavbarLogin from "../components/NavbarLogin";
import Footer from "../components/Footer"

const PaymentPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const token = useSelector((state) => state.auth.token)
    const data = useSelector((state) => state.transactions)
    const [form, setForm] = React.useState({
        fullName: "",
        email: "",
        phoneNumber: "",
        paymentMethodId: ""
    })
    const [paymentList, setPaymentList] = React.useState([])
    const { bookingDate, bookingTime, movieTitle, cinemaName, seatNumber, price } = useSelector((state) => state.transactions)
    // console.log(seatNumber.split(",").length)
    React.useEffect(() => {
        getPaymentMethod()
    }, [])
    const getPaymentMethod = async () => {
        const { data } = await http().get("/payment");
        setPaymentList(data.result)
    }
    React.useEffect(() => {
        console.log(form)
    }, [form])
    const pay = () => {
        dispatch(trxAction({...data, ...form, token}))
        navigate("/orderhistory")
    }
    return (
        <div className="font-mulish">
            <NavbarLogin />

            <div className="bg-[#E5E5E5]">
                <div className="grid grid-cols-2 pl-[70px]">
                    <div>
                        <div className="text-2xl font-bold pt-14">Payment Info</div>
                        <div className="bg-white px-10 py-12 mt-6">
                            <div className="flex">
                                <div className="grow text-[#6B6B6B]">Date & time</div>
                                <div className="text-xl">{bookingDate} at {bookingTime} </div>
                            </div>
                            <hr className="bg-gray-200 border-2 dark:bg-gray-700"></hr>
                            <div className="flex">
                                <div className="grow text-[#6B6B6B]">Movie title</div>
                                <div className="text-xl">{movieTitle}</div>
                            </div>
                            <hr className="bg-gray-200 border-2 dark:bg-gray-700"></hr>
                            <div className="flex">
                                <div className="grow text-[#6B6B6B]">Cinema name</div>
                                <div className="text-xl">{cinemaName}</div>
                            </div>
                            <hr className="bg-gray-200 border-2 dark:bg-gray-700"></hr>
                            <div className="flex">
                                <div className="grow text-[#6B6B6B]">Number of tickets</div>
                                <div className="text-xl">{seatNumber.split(",").length} pieces</div>
                            </div>
                            <hr className="bg-gray-200 border-2 dark:bg-gray-700"></hr>
                            <div className="flex">
                                <div className="grow text-[#6B6B6B]">Total payment</div>
                                <div className="text-xl">{price * seatNumber.split(",").length}</div>
                            </div>
                        </div>

                        <div>
                            <div className="text-2xl font-bold pt-12">Choose a Payment Method</div>
                            <div className="bg-white mt-6">
                                <div className="grid grid-cols-4 px-12 pt-14 gap-4">
                                    {paymentList.map((item) => (
                                        <button onClick={() => setForm({...form, paymentMethodId: item.id})} className={`btn btn-outline btn-accent${form.paymentMethodId === item.id ? " bg-teal-600 text-zinc-50" : ""}`}>{item.name}</button>
                                    ))}
                                </div>
                                <div className="flex justify-center content-center pb-14">
                                    <div>Pay via cash.<span className="text-[#8EC3B0]"> See how it work</span></div>
                                </div>
                            </div>
                            <div className="flex mt-6 gap-[220px] mb-6">
                                <button className="btn btn-outline btn-accent">Previous step</button>
                                <button onClick={pay} className="btn btn-accent">Pay your order</button>
                            </div>
                        </div>
                    </div>

                    <div className="ml-6 mr-6 mt-14">
                        <div className="text-2xl font-bold">Personal Info</div>
                        <div className="bg-white px-10 mt-6">
                            <form className="pb-4">
                                <div className="pt-[47px]">Full Name</div>
                                <input type="text" onChange={e => setForm({...form, [e.target.name]: e.target.value})} placeholder="Input your Name" name="fullName" className="input input-bordered w-full max-w-xs" />
                                <div className="mt-8">Email</div>
                                <input type="email" onChange={e => setForm({...form, [e.target.name]: e.target.value})} placeholder="Input your Email" name="email" className="input input-bordered w-full max-w-xs" />
                                <div className="mt-8">Phone Number</div>
                                <input type="text" onChange={e => setForm({...form, [e.target.name]: e.target.value})} placeholder="Input your Phone Number" name="phoneNumber" className="input input-bordered w-full max-w-xs" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default PaymentPage