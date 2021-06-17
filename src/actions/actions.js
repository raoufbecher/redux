export const ADD_TODO ='ADD_TODO'
export const DELETE_TODO ='DELETE_TODO'
export const UPDATE_TODO ='UPDATE_TODO'
export const FILTER_TODO ='FILTER_TODO'
export const TOGGLE_TODO ='TOGGLE_TODO'

export const SET_FILTER = "SET_FILTER";
export function addtodo (todo) {
    return {
        type : ADD_TODO,
        payload : todo
    }
}   
export function deletetodo (todoId) {
    return {
        type : DELETE_TODO,
        payload : todoId,
    }
}   
export function updatetodo (todo) {
    return {
        type : UPDATE_TODO,
        payload : todo
    }
}
    export const filtertodo =(filter)=> ({
        
            type : FILTER_TODO,
            payload : filter
        
    });
    export const toggletodo = (id) => ({
        type: TOGGLE_TODO,
        payload: id
      });

