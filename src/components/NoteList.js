import React from 'react';
import NoteCard from "./noteCard/NoteCard";

const NoteList = () => {
    return (
        <div className={"grid w-full sm:grid-cols-1 lg:grid-cols-4 m-auto"}>
            <div className={"grid-cols-1 m-2 w-5/6"}>
                <NoteCard message={"Mesaj 1 asdkfalhksdfalkdhfkadflkjsahdfkjahdfkjhadhkafsdf"}></NoteCard>

            </div>
            <div className={"grid-cols-1 m-2 w-5/6"}>
                <NoteCard message={"Mesaj 1 asdkfalhksdfalkdhfkadflkjsahdfkjahdfkjhadhkafsdf"}></NoteCard>
            </div>
            <div className={"grid-cols-1 m-2 w-5/6"}>
                <NoteCard message={"Mesaj 1 asdkfalhksdfalkdhfkadflkjsahdfkjahdfkjhadhkafsdf"}></NoteCard>
            </div>
            <div className={"grid-cols-1 m-2 w-5/6"}>
                <NoteCard message={"Mesaj 1 asdkfalhksdfalkdhfkadflkjsahdfkjahdfkjhadhkafsdf"}></NoteCard>
            </div>
            <div className={"grid-cols-1 m-2 w-5/6"}>
                <NoteCard message={"Mesaj 1 asdkfalhksdfalkdhfkadflkjsahdfkjahdfkjhadhkafsdf"}></NoteCard>
            </div>
            <div className={"grid-cols-1 m-2 w-5/6"}>
                <NoteCard message={"Mesaj 1 asdkfalhksdfalkdhfkadflkjsahdfkjahdfkjhadhkafsdf"}></NoteCard>
            </div>
        </div>
    );
};

export default NoteList;
