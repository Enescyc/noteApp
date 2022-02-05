import React from 'react';

const NodeHeader = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full m-auto mb-5">
            <h1 className="m-auto font-mono text-3xl font-bold text-center opacity-75 ">NOTES</h1>
            <input id="search" name="search" type={"text"} placeholder={"Search.."}
                   className={"m-auto lg:w-1/4  px-2 py-2  md:w-full rounded-md  text-gray-500"}/>
        </div>
    );
};

export default React.memo(NodeHeader);
