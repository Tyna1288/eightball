import React, { useState } from 'react';
import "./CountColor.css";

const CountColor = () => {
 const [count, setCount] = useState({
    red: 0,
    yellow: 0,
    green: 0
 });

 const handleColor = (color) => {
    setCount((prevCount) => ({
      ...prevCount,
      [color]: prevCount[color] + 1
    }));
 };

 return (
   <div>
      <button className="red" onClick={() => handleColor('red')}>Red</button>
      <button className="yellow" onClick={() => handleColor('yellow')}>Yellow</button>
      <button className="green" onClick={() => handleColor('green')}>Green</button>
     <div> 
        Red: {count.red} <br />
        Yellow: {count.yellow} <br />
        Green: {count.green}
     </div>
    </div>
 );
};

export default CountColor;