import React from 'react'
import { useSelector } from 'react-redux'

import Task from './Task'



function TaskList() {
let todos = useSelector(state => state)

    return (
        <div>
            {todos.map((task,id)=> { 
                return <Task todo ={task} description={task.description} isDdone ={task.isDone} id={task.id} key={id}> </Task>
                })}
        </div>
    )
}

export default TaskList
