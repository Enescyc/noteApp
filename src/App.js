import NoteBody from "./components/note/NoteBody";
import NoteList from "./components/NoteList";

import {useDispatch} from "react-redux";
import React, {useEffect} from "react";
import {setItems} from "./redux/notes/notesSlice";


function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        const notes = JSON.parse(localStorage.getItem("notes"));
        if (notes !== null) {
            dispatch(setItems(notes))
        }
    }, [dispatch])

    return (
        <div className="min-h-screen bg-white opacity-75 bg-gray-100">
            <div className="container m-auto w-full h-full pt-24 flex flex-col items-center justify-center">
                <div className={"lg:w-1/2 sm:w-5/6 shadow-2xl bg-amber-50 m-10"}><NoteBody/></div>
                <div className={"w-5/6 m-10"}><NoteList/></div>
            </div>
        </div>
    );
}

export default App;
