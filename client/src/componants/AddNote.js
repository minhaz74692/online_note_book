import React, { useContext, useState } from 'react'
import contextValue from "../context/notes/NoteContext"

const AddNote = (props) => {
    const {showAlert} = props
    const context = useContext(contextValue);
    const { addNote } = context;
    const [note, setNote] = useState({ title: "", description: "", tag: "" })
    const submitAdd = (e) => {
        e.preventDefault()
        addNote(note.title, note.description, note.tag);
        setNote({ title: "", description: "", tag: "" });
        showAlert("Added Successfully ","success")
    }
    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }
    return (
        <>
            <div className='container'>
                <div className='container my-3 col-lg-6'>
                    <h1>Add Notes</h1>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
                            <input type="text" className="form-control" aria-describedby="emailHelp" id="title" onChange={onChange} name="title" minLength={5} value={note.title} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
                            <input type="text" className="form-control" id="description" onChange={onChange} name="description" minLength={5} value={note.description} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Tag</label>
                            <input type="text" className="form-control" id="tag" onChange={onChange} name="tag" value={note.tag} />
                        </div>

                        <button disabled= {note.title.length<5||note.description.length<5} type="submit" className="btn btn-primary" onClick={submitAdd}>Add Note</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AddNote
