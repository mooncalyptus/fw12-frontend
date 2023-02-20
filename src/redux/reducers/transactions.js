import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    movieId: "",
    cinemaId: "",
    bookingDate: "",
    bookingTime: "",
    seatNumber: "",
    paymentMethod: "",
    fullName: "",
    email: "",
    phoneNumber: ""
}

const transactions = createSlice({
    name: 'transactions',
    initialState,
    reducers: {
        chooseMovie: (state, {payload}) => {
            state.movieId = payload.movieId
            state.cinemaId = payload.cinemaId
            state.bookingDate = payload.bookingDate
            state.bookingTime = payload.bookingTime
            // return initialState
        },
        chooseSeat: (state, {payload}) => {
            state.seatNumber = payload.seatNumber
        }
    },
    extraReducers: (build)=> {}
})

export const {chooseMovie, chooseSeat} = transactions.actions
export default transactions.reducer