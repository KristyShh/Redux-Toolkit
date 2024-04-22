import { useDispatch, useSelector } from "react-redux";
import { countReducer } from "./count/index";
import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./users";

import { registrFormReducer } from "./registrationForm/index";

export const store = configureStore({
    reducer : {
        count : countReducer,
        users : userReducer,
        form: registrFormReducer 
    }    
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()

