import React,{Component} from 'react'
import Blog from "../Blog/Blog"
import axios from 'axios'
// import "./Allblogs.css"

class Allblogs extends Component{
    state={
        blogs:[]
    }  
    componentDidMount(){
        const arr=[]
        axios.get("https://blog-react-app.firebaseio.com/blogs.json")
        .then(response=>{
              const blogIds=Object.keys(response.data)
               for (let blogId in blogIds){
                   arr.push({...response.data[blogIds[blogId]],id:blogIds[blogId]})                                              
               }   
               this.setState({blogs:arr})             
        })
    } 
    render(){
        const blogs=this.state.blogs.map((blog)=>(<li key={blog.id} style={{listStyleType:"none",margin:"20px"}}>
                                                            <Blog 
                                                                key={blog.id} {...blog}                                                                                                                                
                                                            />
                                                        </li>))
        return(
            <div style={{margin:"60px"}}>
                {blogs}
            </div>
        )
    }
}
export default Allblogs