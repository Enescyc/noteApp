import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {deleteNote} from "../../redux/notes/notesSlice";

const NoteCard = () => {
    const notes = useSelector(state => state.notes.items)

    const dispatch = useDispatch();

    return (

        notes.map(value => {
            return (
                <div key={value.id}
                     style={{background: value.color}}
                     className={"flex flex-col min-h-[512px] max-h-fit shadow-2xl px-3 py-3 m-4 relative overflow-y-auto text-black grid-cols-1 border-2 border-white font-mono "}>
                    <div className={"px-2 py-2 text-4xl text-center text-white font-extrabold"}>
                        {value.title}
                        <hr/>
                    </div>
                    <div className={"px-2 py-2 text-md text-white font-semibold"}>
                        {value.content}
                    </div>
                    <div className={"absolute left-1 top-1"}>
                        <button
                            onClick={() => dispatch(deleteNote(value.id))}
                            className={"w-5 h-5"}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="m-auto w-5 h-5 text-black"
                                 viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd"
                                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                      clipRule="evenodd"/>
                            </svg>
                        </button>
                    </div>
                </div>
            )
        })


    );
};

export default NoteCard;
