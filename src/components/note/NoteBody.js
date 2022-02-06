import React from 'react';

const NoteBody = () => {

    return (
        <div className="flex relative flex-col flex-wrap justify-center items-center pt-5 m-auto w-5/6">

                <textarea className="px-3 py-3  rounded-2xl min-h-[128px] w-full m-auto"
                          placeholder="Enter your Note here..."/>

            <div className="flex flex-wrap justify-between items-center w-full">
                <div className={"flex"}>
                    <input type={"checkbox"} className={"w-6 h-6 rounded-full bg-red-600 m-2"}/>
                    <div className={"w-6 h-6  rounded-full bg-orange-600 m-2"}/>
                    <div className={"w-6 h-6  rounded-full bg-blue-600 m-2"}/>
                    <div className={"w-6 h-6 rounded-full bg-sky-600 m-2"}/>
                    <div className={"w-6 h-6  rounded-full bg-amber-600 m-2"}/>
                </div>

                <div className={""}>
                    <button className={"border-2 border-amber-300 px-3 rounded-2xl text-lg w-24 text-white "}>Add
                    </button>
                </div>
            </div>


        </div>
    );
};

export default NoteBody;
