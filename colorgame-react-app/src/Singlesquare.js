import React from 'react'
function Singlesquare(props){
    return(
        <div className="square" onClick={props.delete} style={{background:props.background}}></div>
    )
}
export default Singlesquare