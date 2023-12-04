// const Todo = require("./Todo");
import { Todo } from "./Todo";
function TodolistManagement (){
    let todos = []
    function addTodo(desc){
        const todo = new Todo(desc);
        todos.push(todo)
        return todo.id
    }
    function findTodo(searchId){
       return  todos.find(todo => todo.id === searchId)
    }
    function findIndexTodo(searchId){
        return todos.indexOf(index => index.id === searchId)
    }
    function removeTodo(removeId){
        return  todos.splice(todos.indexOf(index => index.id === removeId),1)
    }
    function getTodos(){
        return todos
    }
    function getNumberOfDone(){
        const doneNumber = todos.filter(number => number.done == true)
        return doneNumber.length
    }
    function getNumberOfNotDone(){
        const notDoneNumber = todos.filter(number => number.done == false)
        return notDoneNumber.length
    }
    function clearTodo(){
        todos.splice(0,todos.length)
    }
    return {clearTodo,getNumberOfNotDone,getNumberOfDone,getTodos,removeTodo,findIndexTodo,findTodo,addTodo}
}
