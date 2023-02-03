import React from "react";
import axios from "axios";
import Footer from "../components/Footer";

function DisplayData({ data }) {
    return (
            <div className="grid justify-items-center my-20">
            <img src={"http://localhost:8888/uploads/".concat(data.picture)} className="w-40 rounded" alt={data.title}/>
            <div>{data.title}</div>
            <button type="button" class="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800 mt-4">Details</button>
            </div>
    )
}
function ManageMovie() {
    const [viewAll, setViewAll] = React.useState([])
    React.useEffect(() => {
        getViewAll().then((data) => {
            setViewAll(data.result);
        });
    }, [])

    const getViewAll = async () => {
        const { data } = await axios.get("http://localhost:8888/movies?limit=8");
        return data;
    }
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
                <div className="text-2xl font-bold pt-14">Form Movie</div>
                <div className="bg-white mx-[70px]">
                    <div className="flex">
                        <div className="border-2 border-[#DEDEDE] ml-10 p-9 rounded mt-14">
                            <img src={require('../assets/images/now-1.png')} alt="desc" />
                        </div>
                        <div className="mt-14 ml-4">
                            <div class="mb-6">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Movie Name</label>
                                <input type="text" id="movieName" className="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required></input>
                            </div>

                            <div class="mb-6">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Director</label>
                                <input type="text" id="director" className="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required></input>
                            </div>

                            <div class="mb-6">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Release Date</label>
                                <input type="text" id="releaseDate" className="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required></input>
                            </div>
                        </div>

                        <div className="mt-14 ml-4">
                            <div class="mb-6">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                                <input type="text" id="category" className="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required></input>
                            </div>

                            <div class="mb-6">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Casts</label>
                                <input type="text" id="Casts" className="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required></input>
                            </div>

                            <div className="flex gap-x-8">
                                <div class="mb-6">
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Duration Hour</label>
                                    <input type="text" id="durationHour" className="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required></input>
                                </div>
                                <div class="mb-6">
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Duration Minute</label>
                                    <input type="text" id="durationMinute" className="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required></input>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ml-10">
                        <div className="mt-[25px]">Synopsis</div>
                        <div className="border-2 border-[#DEDEDE] pl-[39px] py-[22px] mr-14 mt-3">
                            <div>Thrilled by his experience with the Avengers, Peter returns home, where he lives with his Aunt May</div>
                        </div>
                        <div className="flex justify-end gap-[23px]">
                            <button type="button" className="focus:outline-none text-green-700 bg-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 px-14 mt-7 mb-9">Reset</button>
                            <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 px-14 mt-7 mb-9 mr-[54px]">Submit</button>
                        </div>
                    </div>
                </div>

                    <div className="flex mr-[70px] mt-[59px]">
                        <div className="grow text-2xl font-bold">Data Movie</div>
                        <div>
                            <input type="text" id="durationMinute" className="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Search Movie" required></input>
                        </div>
                    </div>
                    <div className="bg-white grid gap-4 mt-14">
                        {/* Put movie from API here */}
                            {viewAll?.map((items) => {
                                return (
                                    <React.Fragment key={String(items.id)}>
                                        <DisplayData data={items} />
                                    </React.Fragment>
                                )
                            })}
                </div>
                <div className="flex justify-center content-center space-x-4 my-8 py-8">
                <button className="border border-[#9ED5C5] bg-[#9ED5C5] w-6 rounded">1</button>
                <button className="border border-[#9ED5C5] w-6 rounded">2</button>
                <button className="border border-[#9ED5C5] w-6 rounded">3</button>
                <button className="border border-[#9ED5C5] w-6 rounded">4</button>
            </div>

            </div>
            <Footer></Footer>
        </div>
    )
}

export default ManageMovie