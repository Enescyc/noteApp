import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addNote} from "../../redux/notes/notesSlice";


const NoteBody = () => {

    const notes = useSelector((state)=>state.notes.items);
    const dispatch = useDispatch()


    let newNote = {id:notes.length+1,title:"",content:"",color:""};


    const handleChange = (e) => {
        newNote[e.target.name]=e.target.value;

    }

    return (
        <div className="flex flex-col items-center justify-center mt-32">
            <div className={"text-4xl font-mono font-bold"}>
                <h1>Add a new Note!</h1>
            </div>
            <div className={"self-start w-full"}>
                <form className={"flex-col flex m-5 px-2 py-2"}
                      onSubmit={event =>
                      {event.preventDefault();dispatch(addNote(newNote))}}>
                    <input id="title" name={"title"}   type={"text"} className="w-1/2 h-12 border-b-cyan-900 border-2 mb-2 " placeholder={"Title"} onChange={handleChange}/>
                    <textarea id="note" name="content" className="h-12 border-cyan border-2 min-h-[196px]" placeholder={"Write your note here..."} onChange={handleChange}></textarea>
                    <button className={"px-2 py-2 border-2 border-blue-900 text-blue-900 rounded-xl text-md w-1/12 self-end mt-2 min-w-fit"}>Add</button>
                    <div className={"flex"}>
                        <div className={"w-6 h-6 rounded-full bg-red-700 m-1"} ></div>
                        <div className={"w-6 h-6 rounded-full bg-pink-700 m-1"}></div>
                        <div className={"w-6 h-6 rounded-full bg-emerald-800 m-1"}></div>
                        <div className={"w-6 h-6 rounded-full bg-blue-700 m-1"}></div>
                        <div className={"w-6 h-6 rounded-full bg-slate-700 m-1"}></div>
                    </div>

                </form>
            </div>
            <div className={"flex flex-wrap items-center justify-between w-full"}>

                <div className={"flex mr-10 mb-2"}>

                </div>
            </div>


        </div>
    );
};

export default NoteBody;
