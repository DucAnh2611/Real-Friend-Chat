import { createSlice } from "@reduxjs/toolkit";
import { fetchGroups } from "./thunk";

export const groupSlice = createSlice({
    name: "group",
    initialState: {
        status: "init", 
        list: []
    },
    reducers: {
        newList : (state, action) => {
            state.list = action.payload.list;
        },
        removeGroup : (state, action) => {
            state.list = state.list.filter(e=> e!== action.payload.id);
        },
        addGroup: (state, action) => {
            state.list.push(action.payload.group);
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchGroups.pending, (state, action) => {
            state.status = "loading";
        })
        .addCase(fetchGroups.fulfilled, (state, action) => {
            state.status = "ok";
            state.list = action.payload.list;
        })
    }
});