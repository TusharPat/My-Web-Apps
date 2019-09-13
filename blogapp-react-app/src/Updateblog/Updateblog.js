import React,{Component} from 'react'
import axios from 'axios'
class Updateblog extends Component{
    state={        
        title:'',
        imageURL:'',
        description:''
    }  
    componentDidMount(){
      axios.get(`https://blog-react-app.firebaseio.com/blogs/${this.props.match.params.id}.json`)
        .then(response=>{
            this.setState({title:response.data.title,imageURL:response.data.imageURL,description:response.data.description})
        })
    }

    changeHandler=(event)=>{
        const {name,value}=event.target
        this.setState({[name]:value})
    }
    clickHandler=()=>{
      const data=this.state
      axios.put(`https://blog-react-app.firebaseio.com/blogs/${this.props.match.params.id}.json`,data)
          .then(response=>{
             alert("Your Blog is Updated")
             this.props.history.push("/")
          })
    }

    render(){           
        return(
            <div className="ui main text container segment">
                <div className="ui huge header">Edit Post</div>
                <form className="ui form" >
                    <div className="field">
                        <label>Title</label>
                        <input type="text" name="title" value={this.state.title} onChange={this.changeHandler} />
                    </div>
                    <div className="field">
                        <label>ImageURL</label>
                        <input type="text" name="imageURL" value={this.state.imageURL} onChange={this.changeHandler}/>
                    </div>
                    <div className="field">
                        <label>Post Content</label>
                        <textarea name="description" value={this.state.description} onChange={this.changeHandler} ></textarea>
                    </div>                   
                   
                </form>
                <button style={{marginTop:"10px"}} onClick={this.clickHandler} className="ui big violet basic button">Update Post</button>
                    
            </div>
        )
    }
}  

export default Updateblog


