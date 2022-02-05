import NoteHeader from "./components/note/NoteHeader";
import NoteBody from "./components/note/NoteBody";
import NoteList from "./components/NoteList";

function App() {
    return (
        <div className="min-h-screen text-white bg-slate-700">
            <div className="container m-auto h-full">
                <div className="grid grid-rows-1">
                    <div className="row-span-1 mt-40">
                        <div className={"w-5/6 m-auto pb-5 shadow-2xl"}>
                            <NoteHeader/>
                            <NoteBody/>
                        </div>
                        <div className={"w-5/6 m-auto pb-5 pt-5 shadow-2xl"}>
                            <NoteList/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
