import React,{useContext} from 'react';
import contextValue from "../context/notes/NoteContext"


const NoteItem = (props) => {
    const context = useContext(contextValue);
    const { deleteNote } = context;
    const { note ,updateNote} = props;
    return (
        <>
        <div className='col-md-4 col-lg-4 col-12 my-2 mx-0' id='edit'>
            <div className="card">
                <div className="card-body">
                    <div className='d-flex align-items-center justify-content-between'>
                        <h5 className="card-title">{note.title}</h5>
                        <div className=''>
                        <i onClick={()=>{updateNote(note)}} title='Edit' className="fa-solid fa-pen-to-square fs-5 mx-2"></i>
                        <i onClick={()=>{deleteNote(note._id); 
                            props.showAlert("Deleted Successfuly","success")}} title='Delete' className="fa-solid fa-trash-can fs-5 mx-2"></i>
                        </div>
                        
                    </div>
                    <p className="card-text">{note.description}</p>
                </div>
            </div>
        </div>
        </>
            )
}

export default NoteItem;
