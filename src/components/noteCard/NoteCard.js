import React from 'react';

const NoteCard = ({message, color}) => {
    return (
        <div className="shadow-2xl min-h-[128px] m-auto">
            <div className="p-4">
                <hr/>
                <div className="flow-root ...">
                    <div className="my-4 ...">Contrary to popular belief, Lorem Ipsum is not simply random text. It has
                        roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                        Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of
                        the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the

                    </div>
                    <hr/>
                </div>
            </div>
        </div>
    );
};

export default NoteCard;
