import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { AppState } from "../store";

const initialState = {
    loading: false,
    userActive: false
};

export type AuthSate = typeof initialState;

export const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        setAuthState(state, action) {
            state.userActive = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        }
    },
    extraReducers: {
        [HYDRATE]: (state, action) => ({
            ...state,
            ...action.payload.auth
        })
    }
});

export const { setAuthState } = authSlice.actions;
export const selectAuthSate = (s: AppState) => s.auth.userActive;

const authReducer = authSlice.reducer;
export default authReducer;