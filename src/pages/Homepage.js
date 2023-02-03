import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import http from "../helpers/http";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer";

function ShowingGrid({ data }) {
    const [isShown, setisShown] = useState(false)
    return (
        <div className="grid justify-items-center">
            <img src={data.picture} className="w-40 rounded" alt={data.title}
                onMouseEnter={() => setisShown(true)}
                onMouseLeave={() => setisShown(false)} />
            {isShown && (
                <div className="grid justify-items-center">
                    <div>{data.title}</div>
                    <div>{data.genre}</div>
                    <button type="button" class="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800 mt-4">Details</button>
                </div>
            )}
        </div>
    )
}
function UpcomingGrid({ data }) {
    return (
        <div className="grid justify-items-center gap-3">
            <img src={"http://localhost:5555/uploads/".concat(data.picture)} className="rounded" alt={data.title}></img>
            <div>{data.title}</div>
            <Link to="/viewall"> <button type="button" class="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800 mt-4">Details</button></Link>
        </div>
    )
}
function Homepage() {
    const [nowShowing, setNowShowing] = React.useState([])
    const [upcomingMovies, setUpcomingMovies] = React.useState([])
    React.useEffect(() => {
        getNowShowing().then((data) => {
            setNowShowing(data.results);
        });
        getUpcomingMovies().then((data) => {
            setUpcomingMovies(data.results);
        });
    }, []);

    const getNowShowing = async () => {
        const { data } = await http().get("/movies/nowShowing");
        return data;
    }
    const getUpcomingMovies = async () => {
        const { data } = await http().get("/movies/upcoming");
        return data;
    }
    return (
        <>
            <Navbar />
            <div className="font-mulish">
                {/* Header */}
                <div className="grid grid-cols-1 lg:grid-cols-2 py-12 gap-3">
                    <div className="grid content-center justify-center">
                        <div className="text-[#A0A3BD] text-2xl">Nearest Cinema, Newest Movie, </div>
                        <div className="text-[#9ED5C5] text-5xl font-bold">Find out now!</div>
                    </div>
                    <div className="grid justify-center content-center">
                        <img src={require('../assets/images/header.png')} alt="desc" />
                    </div>
                </div>

                {/* Konten Now Showing */}
                <div className="bg-[#F5F6F8] flex flex-col pb-8">
                    <div className="flex px-16 py-8 lg:px-32 lg:py-16 gap-3">
                        <div className="grow">
                            <div className="text-[#9ED5C5] text-2xl font-bold">Now Showing</div>
                            <hr class="w-48 h-1 bg-[#8EC3B0] rounded"></hr>
                        </div>
                        <div className="text-[#9ED5C5] font-bold">view all</div>
                    </div>
                    <div className="ml-28 mr-8 grid grid-cols-3">
                        {nowShowing?.map((items) => {
                            return (
                                <React.Fragment key={String(items.id)}>
                                    <ShowingGrid data={items} />
                                </React.Fragment>
                            )
                        })}
                    </div>
                </div>

                {/* Konten Upcoming */}
                <div className="flex flex-col">
                    <div className="flex px-16 py-8 lg:px-32 lg:py-16 gap-3">
                        <div className="grow">
                            <div className="text-[#9ED5C5] text-2xl font-bold">Upcoming Movies</div>
                            <hr class="w-48 h-1 bg-[#8EC3B0] rounded"></hr>
                        </div>
                        <div className="text-[#9ED5C5] font-bold">view all</div>
                    </div>
                    <div className="ml-24 flex overflow-x-auto">
                        <button type="button" class="btn-month">January</button>
                        <button type="button" class="btn-month">February</button>
                        <button type="button" class="btn-month">March</button>
                        <button type="button" class="btn-month">April</button>
                        <button type="button" class="btn-month">May</button>
                        <button type="button" class="btn-month">June</button>
                        <button type="button" class="btn-month">July</button>
                        <button type="button" class="btn-month">August</button>
                        <button type="button" class="btn-month">September</button>
                        <button type="button" class="btn-month">October</button>
                        <button type="button" class="btn-month">November</button>
                        <button type="button" class="btn-month">December</button>
                    </div>
                    <div className="ml-28 mt-14 grid grid-cols-5">
                    {upcomingMovies?.map((items)=> {
                            return(
                                <React.Fragment key={String(items.id)}>
                                <UpcomingGrid data={items} />
                                </React.Fragment>
                            )
                        })}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}




export default Homepage;
