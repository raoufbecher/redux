
import { useDispatch, useSelector } from 'react-redux';
import { todos } from './actions/state';
import {filtertodo} from './actions/actions'
import './App.css'
import AddTask from './components/AddTask'
import TaskList from './components/TaskList'


function App() {
  const filter =useSelector(state=>state.filter)
   const dispatch=useDispatch()
  return (
    <div className="App">
      <button onClick={()=>dispatch(filtertodo('All'))}>All</button>
      <button onClick>Done</button>
      <button onClick>UnDone</button>
     <AddTask></AddTask>
     <TaskList todos={filter==='All'? todos:todos.filter(el=>el.isDone===filter)}>
       
     </TaskList>

    </div>
  );
}

export default App;
