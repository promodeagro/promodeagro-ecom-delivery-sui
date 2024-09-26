import { createAsyncThunk } from "@reduxjs/toolkit";
import { postLoginService } from "Services";


export const fetchUsers = createAsyncThunk("users", async (params) => {
    try {
        let url = 'https://dummyjson.com/user';
        const response = await postLoginService.get(url, params);
        return response.data;
    } catch (error) {
        return error
    }
});