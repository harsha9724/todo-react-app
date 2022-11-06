// import logo from './logo.svg';

// import { useState } from 'react';

// function App() {
//   const [input,setInput]=useState("");
//  const handleClick=(e)=>{
//   // console.log(e.target.value)
//   setInput(input.concat(e.target.value))
//  }
//  const findResult=()=>{
//   let res=eval(input);
//   setInput(res);
//  }

//   return (
//     <div className="calculator">
//       <h1>Calculator</h1>
//       <div className="firstLine">
//           <input type="text" value={input}/>
//           <button onClick={()=>{setInput("")}}>C</button>
//       </div>
//       <div className="secondLine">
//         <button value="1" onClick={handleClick}>1</button>
//         <button value="2" onClick={handleClick}>2</button>
//         <button value="3" onClick={handleClick}>3</button>
//         <button value="/" onClick={handleClick}>/</button>
//       </div>
//       <div className="thirdLine">
//       <button value="4" onClick={handleClick}>4</button>
//         <button value="5" onClick={handleClick}>5</button>
//         <button value="6" onClick={handleClick}>6</button>
//         <button value="-" onClick={handleClick}>-</button>

//       </div>
//       <div className="fourthLine">
//       <button value="7" onClick={handleClick}>7</button>
//         <button value="8" onClick={handleClick}>8</button>
//         <button value="9" onClick={handleClick}>9</button>
//         <button value="+" onClick={handleClick}>+</button>

//       </div>
//       <div className="fifthLine">
//       <button value="." onClick={handleClick}>.</button>
//         <button value="0"onClick={handleClick}>0</button>
//         <button onClick={findResult}>=</button>
//         <button value="*" onClick={handleClick}>*</button>

//       </div>
//     </div>
//   );
// }

// export default App;
