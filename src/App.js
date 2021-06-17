
import { useDispatch, useSelector } from 'react-redux';
import { todos } from './actions/state';
import {filtertodo} from './actions/actions'
import './App.css'  
import AddTask from './components/AddTask'
import TaskList from './components/TaskList'

function App() {
  const filter = useSelector((state) => state.filtre);
  const todos = useSelector((state) => state.tasks);

  const dispatch = useDispatch();
  return (
    <div className="App">
      <button onClick={()=>dispatch(filtertodo('All'))}>All</button>
      <button onClick={()=>dispatch(filtertodo(true))}>Done</button>
      <button onClick={()=>dispatch(filtertodo(false))}>UnDone</button>
     <AddTask  ></AddTask>
     <TaskList  todos={filter==='All'? todos:todos.filter(el=>el.isDone===filter)}>
       
     </TaskList>

    </div>
  );
}

export default App;
