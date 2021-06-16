
import { useState } from 'react'
import {useDispatch} from'react-redux'
import {addtodo} from '../actions/actions'
import {v4 as uuidv4} from 'uuid'


function AddTask() {

    let [name, setName] =useState()

    const dispatch = useDispatch()
    return (
        <div>
            <input placeholder="Add Task" value ={name}  onChange={(e)=>setName(e.target.value)}></input>
            <button onClick={()=>dispatch(addtodo(
                {
                    id : uuidv4(),
                    description : name
                }
            ))}>ADD</button>
        </div>
    )
}

export default AddTask
