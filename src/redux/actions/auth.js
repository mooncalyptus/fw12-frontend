import {createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'


const url = "http://localhost:8888/auth/login"
export const loginAction = createAsyncThunk('auth/loginAsync', async({email, password}) => {
    const results = await axios.post(url, { email, password })
    return results.token
    console.log(results)
})