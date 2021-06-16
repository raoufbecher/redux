import React, { useState } from 'react'
import {useDispatch} from'react-redux'
import {deletetodo, toggletodo, updatetodo} from '../actions/actions'
import { todos } from '../actions/state';

function Task({todo,id,description,isDone}) {
    const [editable, setEditable] = useState(false);
    const [name, setName] = useState('');
 const dispatch = useDispatch()  ;

    return (
        <div>
            
            <div>
                {editable ? <input type='text' value={name} onChange={(e)=>{setName(e.target.value)}}/> 
                :<h4 style={{textDecoration:todo.isDone? 'line-through': 'none'}} onClick={()=>dispatch(toggletodo(todo.id))}>{description}</h4> }
            </div>
            <button  onClick={() => {
                        dispatch(updatetodo({
                            ...todo,
                            description: name
                        }))
                        if(editable) {
                         setName(todo.description);   
                        }
                        setEditable(!editable);
                      

                    }}> {editable?'update':'Edit'}</button>
            <button onClick={()=>dispatch(deletetodo(id))}>Delete</button>
        </div>
    )
}

export default Task


