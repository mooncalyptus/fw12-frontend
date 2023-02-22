import { createAsyncThunk } from "@reduxjs/toolkit"
import http from "../../helpers/http"

export const createTransaction = createAsyncThunk('transactions/create', async() => {
const {data} = http()
})