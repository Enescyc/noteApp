import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addColor, addNote, setItems} from "../../redux/notes/notesSlice";


const NoteBody = () => {

    const notes = useSelector((state) => state.notes.items);
    const colors = useSelector(state => state.notes.colors);
    const [activeColor, setActiveColor] = useState("#669999");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [newClr, setNewClr] = useState({id: colors.length + 1, code: "#669999"});
    const dispatch = useDispatch();


    return (
        <div className={"flex flex-wrap justify-start items-center  lg:flex-nowrap  mb-12 font-mono relative"}>
            <div className="flex flex-col justify-center items-center pt-10 w-full">
                <div className=" pt-10 text-5xl font-extrabold text-center">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-amber-400">
                            Welcome the Note App
                </span>

                </div>
                <div className={"w-full flex items-center justify-center mt-4"}>

                    <input type={"search"} placeholder={"Search a note"}
                           onChange={(e) => {
                               if (e.target.value !== "") {
                                   let filter = (notes.filter(value => value.title.toLowerCase().includes(e.target.value.toLowerCase())));
                                   dispatch(setItems(filter));
                               } else {
                                   dispatch(setItems(JSON.parse(localStorage.getItem("notes"))))
                               }

                           }}
                           className={"py-2 px-2 text-black font-mono rounded-xl m-2 bg-white outline-sky-600   border border-sky-500"}/>
                </div>
                <div className={"w-full"}>
                    <form className={"flex-col flex m-auto px-2 py-2 justify-center items-center w-3/4 "}
                          onSubmit={event => {
                              let note = {id: notes.length + 1, title: title, content: content, color: activeColor}
                              event.preventDefault();
                              dispatch(addNote(note));
                              setTitle("")
                              setContent("")
                          }
                          }>
                        <input id="title" name={"title"} value={title} type={"text"}
                               className="mb-2 w-full h-12 border border-sky-500 rounded-xl px-2 py-2" placeholder={"Title"}
                               onChange={(e) => setTitle(e.target.value)}/>
                        <textarea id="note" name="content" value={content}
                                  className="h-12 border w-full border-sky-500 min-h-[196px] px-2 py-2 rounded-xl"
                                  placeholder={"Write your note here..."}
                                  onChange={(e) => setContent(e.target.value)}></textarea>
                        <button
                            className={"bg-slate-800 px-4 py-4 rounded-xl text-white hover:bg-gray-500 hover:text-black self-end m-3"}>Add
                            Note
                        </button>
                    </form>

                    <div className={"flex flex-col px-4 py-4 justify-between items-center"}>

                        <div className={"flex flex-wrap  px-4 py-4 items-center justify-start lg:w-1/3 sm:w-full md:w-1/2"}>
                            <label htmlFor={"colorPicker"} className={"text-gray-700 opacity-75"}>Select a new color</label>
                            <input
                                name={"colorPicker"}
                                value={newClr.code}
                                onChange={(e) => setNewClr(({id: colors.length + 1, code: e.target.value}))}
                                type={"color"} className={"w-full min-h-[48px]"}/>
                            <button onClick={(e) => {
                                if (newClr.id - 1 !== colors.length) {
                                    dispatch(addColor(newClr))
                                } else {
                                    setNewClr({id: newClr.id + 1, code: newClr.code})
                                    dispatch(addColor(newClr))
                                }
                            }}

                                    className={"bg-slate-800 px-4 py-4 rounded-xl text-white hover:bg-gray-500 hover:text-black mt-2 w-full"}>Add a new Color
                            </button>
                        </div>

                        <div className={"flex flex-wrap justify-center items-center"}>
                            {colors.map(color => {
                                return (<button key={color.id}
                                                onClick={(e) => setActiveColor(e.target.value)} name={"color"}
                                                value={color.code}
                                                className={"w-8 h-8 rounded-full m-1 "}
                                                style={{backgroundColor: color.code}}>
                                        {
                                            activeColor === color.code ?
                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                     className="m-auto w-5 h-5 text-white"
                                                     viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd"
                                                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                          clipRule="evenodd"/>
                                                </svg> : false
                                        }
                                    </button>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
        ;
};

export default NoteBody;
