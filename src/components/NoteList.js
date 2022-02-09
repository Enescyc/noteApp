import React from 'react';
import NoteCard from "./noteCard/NoteCard";


const NoteList = () => {


    return (
        <div className={"grid w-full sm:grid-cols-1 lg:grid-cols-3 m-auto w-full"}>
            <NoteCard></NoteCard>
        </div>
    );
};

export default NoteList;
