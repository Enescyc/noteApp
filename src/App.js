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
        <div className="min-h-screen bg-white opacity-75">
            <div className="container m-auto w-full h-full">
                <div className={"lg:w-3/4 sm:w-full m-auto shadow-2xl bg-amber-50"}><NoteBody/></div>
                <div className={"w-full m-auto"}><NoteList/></div>
            </div>
        </div>
    );
}

export default App;
