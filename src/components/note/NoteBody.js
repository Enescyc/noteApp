import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addColor, addNote} from "../../redux/notes/notesSlice";


const NoteBody = () => {

    const notes = useSelector((state) => state.notes.items);
    const colors = useSelector(state => state.notes.colors);
    const [activeColor, setActiveColor] = useState("");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [newClr, setNewClr] = useState({id: colors.length + 1, code: "#669999"});
    const dispatch = useDispatch();


    return (
        <div className="flex flex-col justify-center items-center mt-32">
           <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-800 to-sky-900 ">
                     <h1 className={"text-2xl font-bold"}>ADD A NEW NOTE !</h1>
                </span>
            <div className={"self-start w-full"}>
                <form className={"flex-col flex m-5 px-2 py-2"}
                      onSubmit={event => {
                          let note = {id: notes.length + 1, title: title, content: content, color: activeColor}
                          event.preventDefault();
                          dispatch(addNote(note));
                          setTitle("")
                          setContent("")
                      }
                      }>
                    <input id="title" name={"title"} value={title} type={"text"}
                           className="mb-2 w-1/2 h-12 border-2 border-b-cyan-900" placeholder={"Title"}
                           onChange={(e) => setTitle(e.target.value)}/>
                    <textarea id="note" name="content" value={content}
                              className="h-12 border-cyan border-2 min-h-[196px]"
                              placeholder={"Write your note here..."}
                              onChange={(e) => setContent(e.target.value)}></textarea>
                    <button
                        className={"px-2 py-2 border-2 border-blue-900 text-blue-900 rounded-xl text-md w-1/12 self-end mt-2 min-w-fit"}>Add Note
                    </button>
                </form>

            <div className={"flex flex-wrap px-4 py-4 justify-between items-center"}>

                <div>
                    {colors.map(color => {
                        return (<button key={color.id}
                                        onClick={(e) => setActiveColor(e.target.value)} name={"color"}
                                        value={color.code}
                                        className={"w-8 h-8 rounded-full m-1 "}
                                        style={{backgroundColor: color.code}}>
                                {
                                    activeColor === color.code ?
                                        <svg xmlns="http://www.w3.org/2000/svg" className="m-auto w-5 h-5 text-white"
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
                <div className={"flex flex-wrap  px-4 py-4  items-center justify-start"}>
                    <input
                            value={newClr.code}
                            onChange={(e) => setNewClr(({id: colors.length + 1, code: e.target.value}))} name="color"
                           type={"color"} className={"w-24"}/>
                    <button onClick={(e) => {
                        if (newClr.id-1 !== colors.length) {
                            dispatch(addColor(newClr))
                        } else {
                            setNewClr({id: newClr.id + 1, code: newClr.code})
                            dispatch(addColor(newClr))
                        }
                    }}

                            className={"px-2 py-2 bg-sky-800 text-white rounded-xl ml-2"}>Add a new Color
                    </button>
                </div>


            </div>

        </div>
</div>
)
    ;
};

export default NoteBody;
