import React,{Component} from 'react'
import {Link} from 'react-router-dom'
class Blog extends Component{    
    render(){               
        return(            

                <div className="ui main text container segment">
                    <div className="image">
                        <img style={{width:"665px"}} src={this.props.imageURL} alt={this.props.id}/>
                    </div>
                    <div className="content">
                        <h1 className="header">{this.props.title}</h1>
                        <div className="description">
                            <p>{this.props.description.substring(0,50)}....</p>
                        </div>
                        <div className="extra" style={{marginTop:"20px"}}>
                            <Link to={"/blogs/"+ this.props.id}>
                                <button className="ui floated basic violet button">
                                    Read More
                                <i className="right chevron icon"></i>
                                </button>                            
                            </Link>
                        </div>
                    </div>
                </div>
    )
    }
 
}

export default Blog
