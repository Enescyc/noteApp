import React from 'react';
import NoteCard from "./noteCard/NoteCard";


const NoteList = () => {


    return (
        <div className={"grid lg:grid-cols-4 smd:grid-cols-1 md:grid-cols-2 w-full"}>
            <NoteCard></NoteCard>
        </div>
    );
};

export default NoteList;
