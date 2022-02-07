import {createSlice} from "@reduxjs/toolkit";


export const notesSlice = createSlice({
    name: "note", initialState: {
        items: [{id: 1, title: "Note 1", content: "", color: ""}],
    },
    reducers:{
        setItems:(state,action)=> {
            state.items=action.payload

        },
        addNote:(state,action)=> {
            state.items.push(action.payload)
            localStorage.setItem("notes",JSON.stringify(state.items))

        },
        deleteNote:(state,action) => {
            state.items.splice(action.payload);
            localStorage.setItem("notes",JSON.stringify(state.items))

        }

    }
})

export const {addNote,deleteNote,setItems} = notesSlice.actions;
export default notesSlice.reducer;