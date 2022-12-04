import React, { useContext } from 'react'
import notescontext from "../context/notes/NoteContext"
import NotesItem from './NoteItem';

const Notes = () => {
    const context = useContext(notescontext);
    const {notes, setNotes} = context;
    return (
        <div className='row my-3'>
            <h2>Your Notes</h2>
                {notes.map((note) => {
                    return <NotesItem note = {note}/>
                })}

        </div>
    )
}

export default Notes