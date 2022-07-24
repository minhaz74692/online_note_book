import React, { useContext, useEffect,useState,useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import contextValue from "../context/notes/NoteContext"
import AddNote from './AddNote';
import NoteItem from './NoteItem';

const Notes = (props) => {
    let navigate = useNavigate()
    const {showAlert} = props
    const context = useContext(contextValue);
    const { notes, getNotes, editNote} = context;
    useEffect(() => {
        if(localStorage.getItem("token")){
            getNotes();
        }else{
            navigate("/login")
        }
        // eslint-disable-next-line
    }, []);
    const [note,setNote]=useState({id: "",etitle:"",edescription:"",etag:""})
    const updateNote = (currentNote) => {
        ref.current.click();
        setNote({id:currentNote._id,etitle:currentNote.title,edescription:currentNote.description,etag:currentNote.tag});
    }
    const ref = useRef(null);
    const refClose = useRef(null);


    const handleUpdate = (e)=>{
        console.log("updating Note",note);
        editNote(note.id, note.etitle, note.edescription, note.etag);
        refClose.current.click();
        props.showAlert("Updated Successfully","success")
    }
    const onChange=(e)=>{
        setNote({...note,[e.target.name]:e.target.value})
    }
    return (
        <>
            <AddNote showAlert= {showAlert}/>
            <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title text-center" id="exampleModalLabel">Update note</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
                                    <input type="text" className="form-control" aria-describedby="emailHelp" value={note.etitle} id="etitle" onChange={onChange} name="etitle" minLength={5} required/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
                                    <input type="text" className="form-control" value={note.edescription} id="edescription" onChange={onChange} name="edescription" minLength={5} required/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Tag</label>
                                    <input type="text" className="form-control" value={note.etag} id="etag" onChange={onChange} name="etag" />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button disabled= {note.etitle.length<5||note.edescription.length<5} onClick={handleUpdate} type="button" className="btn btn-primary">Update Note</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row py-5 mx-auto px-lg-5'>
                <h2 className='text-success fs-1 text-center'>Your Notes</h2>
                <div className='container mx-2'>
                    {notes.length === 0 && "No Notes To Display"}
                </div>
                {notes.map((note) => {
                    return <NoteItem key={note._id} note={note} updateNote={updateNote} showAlert={props.showAlert}/>
                })}
            </div>
        </>
    )
}

export default Notes
