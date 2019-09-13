import React from 'react';
import './App.css';
import Newblog from './Newblog/Newblog'
import Allblogs from "./Allblogs/Allblogs"
import Fullblog from "./Fullblog/Fullblog"
import Updateblog from "./Updateblog/Updateblog"
import { BrowserRouter as Router, Route, Link,Switch } from "react-router-dom";
const App=()=>{
  return (
    <div className="App">
      <Router>
        <div className="ui fixed inverted menu">
            <div className="ui container">
              <div href="#" className="header item">                
                Blog App
              </div>
                <Link to="/" className="item">Home</Link>
                <Link to="/blogs/new" className="item">New Post</Link>               
             </div>
         </div>
          <Switch>
              <Route path="/" exact component={Allblogs}/>
              <Route path="/blogs/new" component={Newblog} />
              <Route path="/blogs/:id" exact component={Fullblog}/>
              <Route path="/blogs/:id/edit" component={Updateblog}/>
          </Switch>

      </Router>
   
    </div>
  ); 
}       

export default App;
