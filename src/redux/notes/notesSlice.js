import {createSlice} from "@reduxjs/toolkit";


export const notesSlice = createSlice({
    name: "note", initialState: {
        items: [{id: 1, title: "Note 1", content: "", color: "99ff33"}],
        colors:[{id:1,code:"#0188b2"},{id:2,code:"#ffcc99"},{id:3,code:"#999966"},{id:4,code:"#00ff00"}]

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
            state.items=state.items.filter(value=>value.id!==action.payload);
            localStorage.setItem("notes",JSON.stringify(state.items))
        },
        addColor:(state,action)=> {
            console.log(action.payload)
            const isSame = state.colors.filter(values => values.code.toString() === action.payload.code.toString()).length
            console.log(isSame)
            !isSame ?  state.colors.push(action.payload) : window.alert("Choose another color.")

        }
    }
})

export const {addNote,deleteNote,setItems,addColor} = notesSlice.actions;
export default notesSlice.reducer;