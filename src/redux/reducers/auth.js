import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    token: null
}

const authReducer = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, payload)=> {
            state.token = payload
        }
    },
    extraReducers: (build)=> {}
})

export const {login} = authReducer.actions
export default authReducer.reducer