import { ADD_TODO, DELETE_TODO,UPDATE_TODO, TOGGLE_TODO } from "../actions/actions";
import { v4 as uuidv4 } from "uuid";
import { todos } from "../actions/state";

const initialTodoState = {
    filter: "all",
    todo: [
      {
        id: uuidv4(),
        description: "task1",
        isDone: false
      },
      {
        id: uuidv4(),
        description: "task2",
        isDone: true
      },
      {
        id: uuidv4(),
        description: "task3",
        isDone: false
      }
    ]
  };
  
export const reducer =(state=initialTodoState.todo,action) => {
    let newTodos;
    switch (action.type) {
        case ADD_TODO:
          newTodos = [...state];
          newTodos.push(action.payload) ;
          return newTodos;
        case DELETE_TODO:
             newTodos =[...state];
            newTodos = newTodos.filter(el=>el.id !==action.payload);
            return newTodos

            case UPDATE_TODO:
                newTodos = [...state];
                let index = -1;
                for (let i = 0; i < newTodos.length; i++) {
                    index++;
                    if (newTodos[i].id === action.payload.id) {
                        break;
                    }
    
                }
                if (index != -1) {
                    newTodos[index] = action.payload;
                    return newTodos;
                }
                case TOGGLE_TODO:
                    return state.map((todo) =>
                      todo.id == action.payload ? { ...todo, isDone: !todo.isDone } : todo
                    );
                // case FILTER_TODO:
                //     return {
                //         ...state,
                //         filter:action.payload
                //     }
    default:
        
        return state;
    }}