import React from "react";
import { useParams } from "react-router-dom";
import http from "../helpers/http";
import moment from 'moment'
import NavbarLogin from "../components/NavbarLogin"
import Footer from "../components/Footer";

const MovieDetails = () => {
    const [movie, setMovie] = React.useState({})
    const [date, setDate] = React.useState('')
    const [city, setCity] = React.useState('')
    const [cityList, setCityList] = React.useState([])
    const { id } = useParams()
    React.useEffect(() => {
        getMovieDetails(id)
    }, [id])

    React.useEffect(() => {
        getCinemas()
    }, [city, date])

    console.log(date, city)
    console.log(cityList)
    // console.log(movie)
    const getMovieDetails = async (id) => {
        const { data } = await http().get("/movies/" + id)
        setMovie(data?.results)
    }

    const getCinemas = async () => {
        try {
            const { data } = await http().get(`/cinemas/${id}/selectCinemas?date=${date}&city=${city}`)
            setCityList(data.result)
        } catch (err) {
            if (err) throw err
        }
    }
    return (
        <>
            <NavbarLogin />

            {/* Film image and description */}
            <div className="flex bg-[#fff] px-8 gap-20 font-mulish py-8">
                <div>
                    <div className="border border-[#DEDEDE] py-3 px-3 rounded">
                        {movie?.picture ? (
                            <img src={movie?.picture} className="w-[237px] h-[363px]" alt="movie" />
                        ) : (
                            <img src={require('../assets/images/default-film.png')} className="w-[300px] h-[300px]" alt="desc" />
                        )}
                    </div>
                </div>
                <div>
                    <div className="flex flex-col">
                        <span className="font-bold text-[32px]">{movie?.title}</span>
                        <span className="text-lg">{movie?.genre}</span>
                    </div>

                    <div className="flex mt-8">
                        <div className="grow">
                            <div className="flex flex-col gap-2">
                                <div>Release Date</div>
                                <div>{moment(movie?.releaseDate).format('LL')}</div>
                            </div>
                            <div className="flex flex-col gap-2 mt-3">
                                <div>Duration</div>
                                <div>{String(movie?.duration).split(':')[0]} Hours {String(movie?.duration).split(':')[1]} minutes</div>
                            </div>
                        </div>

                        <div>
                            <div className="flex flex-col gap-2">
                                <div>Directed By</div>
                                <div>{movie?.director}</div>
                            </div>
                            <div className="flex flex-col gap-2 mt-3">
                                <div>Casts</div>
                                <div>{movie?.casts}</div>
                            </div>
                        </div>
                    </div>

                    <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

                    <div className=" w-[600px] h-[150px]">
                        <div>Synopsis</div>
                        <div>{movie?.synopsis}</div>
                    </div>
                </div>
            </div>

            {/* Konten Showtime */}
            <div className="bg-[#F5F6F8] font-mulish py-6 rounded-lg">
                <div className="flex justify-center items-center">
                    <span className="font-bold text-2xl">Showtimes and Tickets</span>
                </div>
                <div className="flex justify-center align center gap-4 pt-4">
                    <div>
                        <input type="date" placeholder="Select date" defaultValue={date} onChange={e => setDate(e.target.value)} className="input input-bordered w-56 max-w-xs" />
                    </div>
                    <div>
                        <select className="select select-bordered w-56 max-w-xs" onChange={e => setCity(e.target.value)}>
                            <option value="" selected disabled>Select City</option>
                            <option value="Jakarta">Jakarta</option>
                            <option value="Depok">Depok</option>
                        </select>
                    </div>
                </div>

                <div>
                    {cityList.map(items => {
                        return (<div key={items.id} className="flex justify-center items-center mt-6">
                            <div className="bg-[#fff] w-[400px] border border-black rounded-lg">
                                <div className="flex flex-col gap-3 pt-3">
                                <span className="text-2xl font-semibold flex justify-center items-center">{items.name}</span>
                                <div className="text-xs px-8">{items.address}</div>
                                </div>
                                <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                                <div className="flex gap-3 justify-center items-center pb-6">
                                <div>{items.time[0]}</div>
                                <div>{items.time[1]}</div>
                                <div>{items.time[2]}</div>
                                </div>
                            </div>
                        </div>)
                    })}
                </div>
            </div>

            <Footer />
        </>
    )
}

export default MovieDetails;