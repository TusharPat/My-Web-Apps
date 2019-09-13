import React,{Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
class Fullblog extends Component{
    state={
        fullpostDetail:{}
    }
    componentDidMount(){
        console.log(this.props.match.params.id)
        axios.get(`https://blog-react-app.firebaseio.com/blogs/${this.props.match.params.id}.json`)
            .then(response=>{
                const resData=response.data
                this.setState({fullpostDetail:resData})
            })            
                        
    }
    deleteblogHandler=()=>{
        axios.delete(`https://blog-react-app.firebaseio.com/blogs/${this.props.match.params.id}.json`)
            .then(response=>{
                alert("Your Blog is deleted")
                this.props.history.push("/")
            })
    } 

    render(){
        return(
           
            <div className="ui main text container">
                <div className="ui huge header">{this.state.fullpostDetail.title}</div>
                    <div className="ui top attached segment">
                        <div className="item">
                            <img className="ui centered rounded image" src={this.state.fullpostDetail.imageURL} alt={this.props.match.params.id}/>
                            <div className="content" style={{margin:"10px 0 10px 0"}}>
                                <div className="description">
                                    <p>{this.state.fullpostDetail.description}</p>
                                </div>
                            </div>
                        </div> 
                        
                        <button onClick={this.deleteblogHandler} className="ui red basic button">Delete</button>
                                          
                            
                                           
                    <Link to={`/blogs/${this.props.match.params.id}/edit`}>
                            <button className="ui orange basic button">Update</button>
                    </Link>
                    
                </div>
            </div>
        )

    }

}
export default Fullblog
