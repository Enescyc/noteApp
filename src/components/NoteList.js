import React from 'react';
import NoteCard from "./noteCard/NoteCard";
import {useSelector} from "react-redux";

const NoteList = () => {
    const data = useSelector((state)=>state.notes.items)

    return (
        <div className={"grid w-full sm:grid-cols-1 lg:grid-cols-3 m-auto w-full"}>

                  {data.map((data)=> {
                      return (
                          <div key={data.id} className={"col-span-1 m-2 "}>
                              <NoteCard id={data.id} message={data.content} title={data.title} color={data.color}></NoteCard>
                          </div>
                      )
                  })}
        </div>
    );
};

export default NoteList;
