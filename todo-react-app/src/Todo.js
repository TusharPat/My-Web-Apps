import React from 'react'
import "./Todo.css"
function Todo(props){
    let todoslist=props.todos.map((todo,index)=>(<li key={index}>{todo} <button className="fa fa-trash" onClick={()=>props.deleteTodo(index)}></button></li>))
    return(
        <ul>
            {todoslist}
        </ul>
    )
}
export default Todo