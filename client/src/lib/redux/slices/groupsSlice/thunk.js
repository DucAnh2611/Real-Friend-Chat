import { createAsyncThunk } from "@reduxjs/toolkit";

//THUNK!!!

export const fetchGroups = createAsyncThunk('groups/fetchGroups', async (state, action) => {
    let res = await fetch("localhost:3001/getgroup");
    let data = await res.json();

    return {
        list: data.list
    };
});

export const findGroups = createAsyncThunk('groups/findGroups', async (state, action) => {

})