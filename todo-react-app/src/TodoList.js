import React,{Component} from 'react'
import Todo from "./Todo"
import "./TodoList.css"
class TodoList extends Component{
    state={
        todo:"",
        todos:[]
    }

    changeHandler=(event)=>{
        let {name,value}=event.target
        this.setState({[name]:value})
    }

    addTodo=()=>{
        let todosCopy=this.state.todos.slice()
        todosCopy.push(this.state.todo)
        this.setState({todos:todosCopy,todo:""})
    }

    deleteTodo=(index)=>{
        let todosCopy=this.state.todos.slice()
        todosCopy.splice(index,1)
        this.setState({todos:todosCopy})
    }
    render(){
        let styles={
            width: "360px",
            height:'40px',
            backgroundColor:"rgb(0,128,255)",
            fontWeight:"bold",
            fontSize:"15px",
            margin:"0"
        }
        return(
            <div className="container"> 
            <h1>ToDo App</h1>
                <input
                    type="text"
                    name='todo'
                    placeholder="Enter a todo"
                    onChange={this.changeHandler}
                    value={this.state.todo}
                />
                <button style={styles} onClick={this.addTodo}>Add</button>
                <Todo 
                    todos={this.state.todos}
                    deleteTodo={this.deleteTodo}
                />
            </div>
            
        )
    }
}
export default TodoList