import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
    const host = "http://localhost:5000"
    const notesinitial = [];
    const [notes, setNotes] = useState(notesinitial)
  
    // get all notes
    const getNotes = async () => {
      const response = await fetch(`${host}/api/notes/fetchallnotes`, {
        method: 'GET', 
        headers: {
          'Content-Type': 'application/json',
          'auth-token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM3MjQzY2MwY2I1ODdjNWYzODIxODlhIn0sImlhdCI6MTY2ODQzMjg0NH0.eSGlzsj_2nZmDpuGKlSd0LbkmrIR-zJh4rkl7jbYGIs' 
        }
      });
      const json = await response.json();
      setNotes(json)
    }

    // Add a note
      const addNote = async (title, description, tag) => {
        const note = {
          "_id": "63737f256fc3c06s5eess1ss1d1bae2",
          "user": "637243cc0cb587c5f382189a",
          "title": title,
          "description": description,
          "tag": tag,
          "date": "2022-11-15T11:59:33.550Z",
          "__v": 0
        }
        const response = await fetch(`${host}/api/notes/addnote`, {
          method: 'POST', 
          headers: {
            'Content-Type': 'application/json',
            'auth-token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM3MjQzY2MwY2I1ODdjNWYzODIxODlhIn0sImlhdCI6MTY2ODQzMjg0NH0.eSGlzsj_2nZmDpuGKlSd0LbkmrIR-zJh4rkl7jbYGIs' 
          },
          body: JSON.stringify({title, description, tag})
        });
        const json = await response.json();
        // console.log(json)
        setNotes(notes.concat(note));
      }
    // Delete a note
      const deleteNote = async (id) => {
        // TODO API call
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
          method: 'DELETE', 
          headers: {
            'Content-Type': 'application/json',
            'auth-token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM3MjQzY2MwY2I1ODdjNWYzODIxODlhIn0sImlhdCI6MTY2ODQzMjg0NH0.eSGlzsj_2nZmDpuGKlSd0LbkmrIR-zJh4rkl7jbYGIs' 
          },
        });
        const temp = notes;
        console.log(notes);
        const newNotes = temp.filter((note) => { return note._id !== id })
        setNotes(newNotes)
        // console.log(json);
      }
    // Edit a note
      const editNote = async (id, title, description, tag) => {
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
          method: 'PUT', 
          headers: {
            'Content-Type': 'application/json',
            'auth-token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM3MjQzY2MwY2I1ODdjNWYzODIxODlhIn0sImlhdCI6MTY2ODQzMjg0NH0.eSGlzsj_2nZmDpuGKlSd0LbkmrIR-zJh4rkl7jbYGIs' 
          },
          body: JSON.stringify({title, description, tag})
        });
        // const json = await response.json(); 
        // console.log(json);
        let newnotes = JSON.parse(JSON.stringify(notes)) // creates a deep copy
        for(let index=0; index < newnotes.length; index++){
          let element = newnotes[index];
          if(element._id === id){
            element.title = title;
            element.description = description;
            element.tag = tag;
            newnotes[index] = element;
            break;
          }
        }
        setNotes(newnotes);
      }
    return (
        <NoteContext.Provider value={{notes, addNote, deleteNote, editNote, getNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;