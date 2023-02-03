import {createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
import http from '../../helpers/http'


// const url = "http://localhost:8888/auth/login"
// export const loginAction = createAsyncThunk('auth/loginAsync', async({email, password}) => {
//     const results = await axios.post(url, { email, password })
//     return results.token
//     console.log(results)
// })

export const loginAction = createAsyncThunk(
    "auth/loginAction",
    async ({ email, password, cb }) => {
      try {
        const { data } = await http().post("/auth/login", { email, password });
        cb();
        return data.results;
      } catch (error) {
        return error.response.data.message;
      }
    }
  );

  export const registerAction = createAsyncThunk(
    "auth/registerAction",
    async ({ email, password, phoneNumber, cb }) => {
      try {
        const { data } = await http().post("/auth/register", {
          email,
          password,
          phoneNumber,
        });
        cb();
        return data.results;
      } catch (error) {
        return error.response.data.message;
      }
    }
  );