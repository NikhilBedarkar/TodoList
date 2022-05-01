import React from 'react'
import { useState } from 'react'

export default function AddTodos(props) {
const [title, settitle] = useState("")
const [desc, setdesc] = useState("")

    const submit=(e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("Title  & desc cannot be blank!");
        }else{
        props.addTodo(title,desc);
        settitle("")
        setdesc("")
        }
    }
    return (
        <div className="container">
            <form onSubmit={submit}>
            <h3 className="my-3">Add a Todo</h3>
            <div className="mb-3 my-3 row">
                <label htmlFor="title" className="col-sm-2 col-form-label">Title</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" id="title" value={title} onChange={(e)=>settitle(e.target.value) } />
                </div>
            </div>
            <div className="mb-3 row">
                <label htmlFor="desc" className="col-sm-2 col-form-label">Description</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" id="desc" value={desc} onChange={(e)=>setdesc(e.target.value) }/>
                </div>
            </div>
            <div className="mb-3 row">
            <button type="submit" className='btn btn-sm btn-success my-3'>Add Todo</button>
            </div>
            </form>
        </div>
    )
}
