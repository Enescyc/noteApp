import NoteBody from "./components/note/NoteBody";
import NoteList from "./components/NoteList";

import {useDispatch} from "react-redux";
import React, {useEffect} from "react";
import {setItems} from "./redux/notes/notesSlice";


function App() {
    const dispatch = useDispatch();

    useEffect(()=> {
        const notes = JSON.parse(localStorage.getItem("notes"));
        if(notes!==null){
            dispatch(setItems(notes))
        }
    },[dispatch])

    return (
        <div className="min-h-screen opacity-75 bg-amber-50">

            <div className="text-center text-5xl font-extrabold pt-10">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-amber-400">
                            Welcome the Note App
                </span>
            </div>

            <div className="container m-auto h-full">
                <div className={"lg:w-1/2 sm:w-full m-auto shadow-2xl bg-amber-50" }><NoteBody/></div>
                <div className={"w-5/6 m-auto"}><NoteList/></div>
            </div>
        </div>
    );
}

export default App;
