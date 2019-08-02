import React,{Component} from 'react'
import './App.css';
import Singlesquare from "./Singlesquare"
class App extends Component{
  state={
    noofsquares:0,
    colorList:[],
    pickedColor:"",
    winloseText:""
  }

  randomColor(){
    //pick a "red" from 0 - 255
    var r = Math.floor(Math.random() * 256);
    //pick a "green" from  0 -255
    var g = Math.floor(Math.random() * 256);
    //pick a "blue" from  0 -255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
  }
    generateColors(num){
      //make an array
      var arr = []
      //repeat num times
      for(var i = 0; i < num; i++){
      //get random color and push into arr
      arr.push(this.randomColor())
      }
    //return that array
    return arr

  }
  handleMode(num){
    let arr=this.generateColors(num)
    let random = Math.floor(Math.random() * arr.length);
    let randomcolor=arr[random];
    this.setState({colorList:arr})
    this.setState({noofsquares:num})
    this.setState({pickedColor:randomcolor})
    this.setState({winloseText:""})

  }
  generatenewColors(num){
    let arr=this.generateColors(num)
    let random = Math.floor(Math.random() * arr.length);
    let randomcolor=arr[random];
    this.setState({colorList:arr})
    this.setState({noofsquares:num})
    this.setState({pickedColor:randomcolor})
    this.setState({winloseText:""})

  }
  deleteColor(index,color){
    let winColors=[]
    console.log(`Picked Color: ${this.state.pickedColor}`)
    console.log(`Clicked Color: ${color}`)
    if(this.state.noofsquares===3){
      winColors=[this.state.pickedColor,this.state.pickedColor,this.state.pickedColor]
    }else{
      winColors=[this.state.pickedColor,this.state.pickedColor,this.state.pickedColor,this.state.pickedColor,this.state.pickedColor,this.state.pickedColor]
    }
    let colorListCopy=this.state.colorList.slice()
    if(color===this.state.pickedColor){
      this.setState({winloseText:"You Win"})
      this.setState({colorList:winColors}) 
    }else{
      this.setState({winloseText:"Try Again"})
      colorListCopy[index]="rgb(35, 35, 35)"
      this.setState({colorList:colorListCopy}) 
    }   
      
    
  }

   render(){
    let colorsquares=this.state.colorList.map((color,index)=>(<Singlesquare delete={()=>this.deleteColor(index,color)} background={color} key={index} />))
    return (
      <div>
          <h1>The Great 
            <br/>
            <span className="colorDisplay">{this.state.pickedColor}</span> 
            <br/>
            Color Game
          </h1>
        <div id="stripe">
          <button id="reset" onClick={()=>this.generatenewColors(this.state.noofsquares)}>New Colors</button>
          <span id="message">{this.state.winloseText}</span>
          <button onClick={()=>this.handleMode(3)} className="mode">Easy</button>
          <button onClick={()=>this.handleMode(6)} className="mode">Hard</button>
        </div> 

        	<div id="container">
            {colorsquares}
	      </div>    
   
      </div>
    );
  }
}

export default App;
