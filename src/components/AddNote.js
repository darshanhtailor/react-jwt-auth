import React, { useContext, useState } from 'react'
import notescontext from "../context/notes/NoteContext"

export const AddNote = () => {
    const context = useContext(notescontext)
    const [note, setNote] = useState({
        title : "",
        description : "",
        tag : "Default"
    })
    const {addNote} = context;
    const handleClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
    }
    const onChange = (e) => {
        setNote({...note, [e.target.name] : e.target.value})
    }
    return (
        <div>
            <h2>Add a Note</h2>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Title of Note</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={onChange} name="title"/>
                </div> 
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Enter Description</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" onChange={onChange} name="description"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Enter Tag</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" onChange={onChange} name="tag"/>
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleClick}>Submit</button>
            </form>
        </div>
    )
}