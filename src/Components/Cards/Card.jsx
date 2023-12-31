import React from 'react'
import "./card.css";

const Card = ({price,tag,red}) => {
  return (
    <div className='card'>
        <h3 style={red?{color: "red"}:{color: "#41bf99ff"}}>{price}</h3>
        <p>{tag}</p>
    </div>
  )
}

export default Card