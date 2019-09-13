import React,{Component} from 'react'
import axios from 'axios'
class Newblog extends Component{
     state={
        title:"",
        description:"",
        imageURL:""
     }
    handleChange=(event)=>{
        const {name,value}=event.target
        this.setState({[name]:value})
    }
    clickHandler=()=>{
        const enteredPost=this.state
        axios.post("https://blog-react-app.firebaseio.com/blogs.json",enteredPost)
            .then(response=>{
                alert("Your Blog is Added")
                this.props.history.push("/")
            })
    }

    render(){
        return(
            <div className="ui main text container segment">
            <div className="ui huge header">New Post</div>
            <form className="ui form" >
                <div className="field">
                    <label>Title</label>
                    <input type="text" name="title" onChange={this.handleChange}/>
                </div>
                <div className="field">
                    <label>Image URL</label>
                    <input type="text" name="imageURL"onChange={this.handleChange}/>
                </div>
                <div className="field">
                    <label>Post Content</label>
                    <textarea name="description" onChange={this.handleChange}></textarea>
                </div>
             
            </form>
                <button style={{marginTop:"10px"}} onClick={this.clickHandler} className="ui big violet basic button">Create Post</button>
        </div> 
        )
    }

}    
export default Newblog