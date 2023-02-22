import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import http from "../helpers/http";
import { chooseMovie as chooseMovieActions } from "../redux/reducers/transactions";
import moment from 'moment'
import NavbarLogin from "../components/NavbarLogin"
import Footer from "../components/Footer";

const MovieDetails = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [movie, setMovie] = React.useState({})
    const [date, setDate] = React.useState('')
    const [city, setCity] = React.useState('')
    const [cityList, setCityList] = React.useState([])
    const [selectedCinema, setSelectedCinema] = React.useState(null)
    const [selectedTime, setSelectedTime] = React.useState('')
    const { id } = useParams()
    React.useEffect(() => {
        getMovieDetails(id)
    }, [id])

    React.useEffect(() => {
        getCinemas()
    }, [city, date])

    // console.log(date, city)
    // console.log(cityList)
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

    const chooseTime = (time, cinema) => {
        setSelectedTime(time)
        setSelectedCinema(cinema)
    }

    const book = (price, cinemaName) => {
        dispatch(chooseMovieActions({
            movieId: id,
            cinemaId: selectedCinema,
            bookingDate: date,
            bookingTime: selectedTime,
            movieTitle: movie?.title,
            price,
            cinemaName
            // price: cinema.price,
        }))
        navigate('/orderpage')
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
                    {cityList.map(cinema => {
                        return (<div key={cinema.id} className="flex justify-center items-center mt-6">
                            <div className="bg-[#fff] w-[400px] border border-black rounded-lg">
                                <div className="flex flex-col gap-3 pt-3">
                                    <span className="text-2xl font-semibold flex justify-center items-center">{cinema.name}</span>
                                    <div className="text-xs px-8">{cinema.address}</div>
                                </div>
                                <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                                <div className="grid grid-cols-4 pl-4 gap-3">
                                    {cinema.time.map(time => <div>
                                        <button className={`btn-ghost${cinema.id === selectedCinema && time === selectedTime && " text-emerald-400 font-bold"}`} onClick={() => chooseTime(time, cinema.id)}>{time}</button>
                                    </div>)}
                                </div>
                                <div className="flex px-8">
                                    <span className="grow">Price</span>
                                    <span className="text-base font-semibold">{cinema.price}</span>
                                </div>
                                <div className="px-3 py-6"><button className="btn w-full btn-outline btn-accent"
                                    disabled={selectedCinema !== cinema.id} onClick={() => book(cinema.price, cinema.name)}>Book Now</button>
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