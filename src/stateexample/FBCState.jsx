// import React from 'react';

// const FBCStateEx = () => {
//   const [value, setValue] = React.useState(0);

//   const changeValue = () => {
//     setValue(1000);
//   };

//   return (
//     <div>
//       <h1>Functional Component State Example</h1>
//       <h2>Current Value: {value}</h2>
//       <button onClick={changeValue}>Change Value</button>
//     </div>
//   );
// };

// export default FBCStateEx
import React from 'react'

const FBCStateEx = () => {
    // const data = React.useState("Hi");
    // console.log(data);
    const [value, setValue] = React.useState(0);
    console.log(value);
    const changeValue=()=>{
        setValue(1000);
    }
  return (
    <div>FBCSstateEx
        <h1>{value}</h1>
       <button onClick={changeValue}>changevalue</button>
      
    </div>
  )
}

export default FBCStateEx