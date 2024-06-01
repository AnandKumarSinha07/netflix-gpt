import {  createSlice } from "@reduxjs/toolkit";

const configSlice=createSlice({
    name:"config",
    initialState:{
        lang:"en"
    },
    reducers:{
        changeLnaguage:(state,actions)=>{
        state.lang=actions.payload;
    }
  }
})

export const {changeLnaguage}=configSlice.actions
export default configSlice.reducer;