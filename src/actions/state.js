

import {v4 as uuidv4} from 'uuid'
const initState ={
    filter:'All'
}
export let todos =[{
    id : uuidv4(),
    description : "task1",
    isDone :false

},
{
    id : uuidv4(),
    description : "task2",
    isDone :true

},
{
    id : uuidv4(),
    description : "task3",
    isDone :false

},
]