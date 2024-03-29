import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import http from "../helpers/http"
import withAuth from "../components/hoc/WithAuth"
import NavbarLogin from "../components/NavbarLogin";



function ShowingGrid({data}){
    const [isShown, setisShown] = useState(false)
    return(
        <div className="grid justify-items-center">
            <img src={data.picture} className="w-40 rounded" alt={data.title}
            onMouseEnter={()=> setisShown(true)}
            onMouseLeave={()=> setisShown(false)}/>
            {isShown && (
                <div className="grid justify-items-center">
                <div>{data.title}</div>
                <div>{data.genre}</div>
                <Link to="/viewall"><button type="button" class="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800 mt-4">Details</button></Link>
                </div>
            )}
        </div>
    )
}
function UpcomingGrid({data}){
    return(
        <div className="grid justify-items-center">
            <img src={data.picture} className="w-40 h-60 rounded" alt={data.title}></img>
            <div className="text-center">{data.title}</div>
            <Link to="/viewall"> <button type="button" class="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800 mt-4">Details</button></Link>
        </div>
    )
}
function Home(){
    const [nowShowing, setNowShowing] = useState([])
    const [upcomingMovies, setUpcomingMovies] = useState([])
    React.useEffect(()=> {
        getNowShowing().then((data)=> {
            setNowShowing(data.results);
        });
        getUpcomingMovies().then((data)=> {
            setUpcomingMovies(data.results);
        });
    },[]);

    const getNowShowing = async ()=> {
        const {data} = await http().get("/movies/nowShowing");
        return data;
    }
    const getUpcomingMovies = async()=> {
        const {data} = await http().get("/movies/upcoming");
        return data;
    }
        return(
            <>
            <div className="font-mulish">
                <NavbarLogin />
                <div className="grid grid-cols-2 my-12">
                    <div className="grid content-center justify-center">
                        <div className="text-[#A0A3BD] text-2xl">Nearest Cinema, Newest Movie, </div>
                        <div className="text-[#9ED5C5] text-5xl font-bold">Find out now!</div>
                    </div>
                    <div className="grid justify-center content-center">
                    <img src={require('../assets/images/header.png')} alt="desc"/>
                    </div>
                </div>

                <div className="bg-[#F5F6F8] flex flex-col">
                    <div className="mx-32 my-16">
                        <div className="text-[#9ED5C5] text-2xl font-bold">Now Showing</div>
                        <hr class="w-48 h-1 bg-[#8EC3B0] rounded"></hr>
                    </div>
                    <div className="ml-28 mr-8 grid grid-cols-5">
                        {nowShowing?.map((items)=> {
                            return(
                                <React.Fragment key={String(items.id)}>
                                <ShowingGrid data={items} />
                                </React.Fragment>
                            )
                        })}
                    </div>
                </div>

                <div className="mx-32 my-16 flex">
                <div className="text-[#9ED5C5] text-2xl font-bold flex grow">Upcoming Movies</div>
                <Link to="/viewall"><div className="text-[#9ED5C5] font-bold">View All</div></Link> 
                </div>
                <div className="ml-24 overflow-x-auto">
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

                    <div className="flex justify-center content-center">
                        <div className="drop-shadow-md w-3/5 mt-32">
                            <div className="flex flex-col">
                            <div className="flex justify-center">Be the vanguard of the</div>
                            <div className="text-[#9ED5C5] text-5xl font-bold flex justify-center">Movietify</div>
                            </div>
                            <div className="flex justify-center mt-12">
                            <input type="email" class="form-input rounded placeholder:text-slate-400 h-12 w-72" placeholder="Write your email"></input>
                            <div className="ml-4 mt-0.5">
                            <button type="button" class="focus:outline-none text-black bg-[#9ED5C5] hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Join Now</button>
                            </div>
                            </div>
                            <div className="flex flex-col mt-10">
                                <div className="flex justify-center">By joining you as a Tickitz member,</div>
                                <div className="flex justify-center">we will always send you the latest updates via email .</div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col mt-24 ml-32">
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
                        © 2020 Tickitz. All Rights Reserved.
                        </div>
                        </div>
                    </div>
            </div>
            </>
        )
    }




export default Home;
// export default withAuth(Home)
