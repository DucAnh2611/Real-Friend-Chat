import { configureStore } from "@reduxjs/toolkit";
import { groupSlice } from "./slices/groupsSlice/slice";

const store = configureStore({
    reducer: {
        groups: groupSlice.reducer
    }
});

export default store;