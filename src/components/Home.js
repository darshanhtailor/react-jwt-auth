import React, { useContext } from 'react'
import notescontext from "../context/notes/NoteContext"
import Notes from './Notes'
export const Home = () => {

    return (
        <div>
            <div className='container'>
                <h2>Add a Note</h2>
                <form>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Title of Note</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Enter Description</label>
                        <input type="text" className="form-control" id="exampleInputPassword1"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>

            </div>
            <Notes/>
        </div>
    )
}