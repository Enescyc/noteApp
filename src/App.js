import NoteHeader from "./components/note/NoteHeader";
import NoteBody from "./components/note/NoteBody";
import NoteList from "./components/NoteList";

import {useSelector} from "react-redux";



function App(){

    const data = useSelector(state=> state.notes.items )
    console.log(data)
    return (
        <div className="min-h-screen text-white bg-slate-700">
            <div className="container m-auto h-full">
                <div className="grid grid-rows-1">
                    <div className="row-span-1 mt-40">
                        <div className={"w-2/4 m-auto pb-5 border-2 rounded-2xl"}>
                            <NoteHeader/>
                            <NoteBody/>
                        </div>
                        <div className={"w-5/6 m-auto pb-5 pt-5"}>
                            <NoteList/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
