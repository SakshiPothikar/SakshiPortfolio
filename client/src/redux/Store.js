import { configureStore } from "@reduxjs/toolkit";
import { adminapi } from "./admin";

const reduxStore = configureStore({
    reducer: {
        [adminapi.reducerPath]: adminapi.reducer,
    },
    middleware: (def) => [...def(), adminapi.middleware],

});
export default reduxStore