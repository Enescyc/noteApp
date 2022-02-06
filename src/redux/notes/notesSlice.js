import {createSlice} from "@reduxjs/toolkit";

export const notesSlice= createSlice({
    name:"note",
    initialState:{
        items:[
            {
            id:1,
            color:"red",
            title:"Baslik",
            content:"icerik"
             },
            {
                id:2,
                color:"red",
                title:"Baslik",
                content:"icerik"
            },
            {
                id:3,
                color:"red",
                title:"Baslik",
                content:"icerik"
            },
            {
                id:4,
                color:"red",
                title:"Baslik",
                content:"icerik"
            },

        ],
        },
    reducers:{},
})

export default notesSlice.reducer;