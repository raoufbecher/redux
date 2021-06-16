export const ADD_TODO ='ADD_TODO'
export const DELETE_TODO ='DELETE_TODO'
export const UPDATE_TODO ='UPDATE_TODO'
export const FILTER_TODO ='FILTER_TODO'
export const TOGGLE_TODO ='TOGGLE_TODO'

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
    export function filtertodo (todo) {
        return {
            type : FILTER_TODO,
            payload : todo
        }
    }
        export function toggletodo (todo) {
            return {
                type : TOGGLE_TODO,
                payload : todo
            }
}  
