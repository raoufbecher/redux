import React from 'react'
import { useSelector } from 'react-redux'
import Task from './Task'
function TaskList({todos }) {
// const todos = useSelector((state) => state)

    return (
        <div>
            {todos.map((task,id)=> { 
                return <Task todo ={task} description={task.description} isDone ={task.isDone} id={task.id} key={id}> </Task>
                })}
        </div>
    )
}

export default TaskList
