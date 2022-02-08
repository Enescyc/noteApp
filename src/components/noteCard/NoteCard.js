import React from 'react';
import {useDispatch} from "react-redux";
import {deleteNote} from "../../redux/notes/notesSlice";

const NoteCard = ({id,title, message}) => {
    const dispatch = useDispatch();
    return (
            <div

                className={"flex flex-col min-h-[512px] max-h-fit text-white text-mono text-md shadow-2xl px-3 py-3 mb-4 mt-4 relative overflow-y-auto  bg-amber-50 text-black"}>
                <div className={"px-2 py-2 text-2xl text-center"}>
                    {title}
                    <hr/>
                </div>
                <div className={""}>
                    {message}
                </div>
                <div className={"absolute left-1 top-1"}>
                        <button
                            onClick={()=>dispatch(deleteNote(id-1))}
                            className={"w-5 h-5"}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 m-auto text-red-900" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>
                </div>
            </div>
    );
};

export default NoteCard;
