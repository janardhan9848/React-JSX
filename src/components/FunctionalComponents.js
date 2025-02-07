// import React from 'react'
// import '.Styles.css'

// function FunctionalComponents(Props) {
//     console.log(props)
//     let applyStyle = props.apply ? 'heading':''
//     let inlineStyle ={
//         color:'green',
//         backgroundColor: 'red',
//         font:'50px'
//     }
//   return (
//     <div>
//       <h1>class={`${applyStyle} font-style`}Welcome to my React class {props.clgName},  {props.city}</h1>
//       {props.children}
//       <h2 style={inlineStyle}>Good afternoon</h2>
//     </div>
//   )
// }

// export default FunctionalComponents

// import React from 'react';
// import './Style.css';

// function FunctionalComponent(props) {
//     console.log(props);
//     const applyStyle = props.apply ? 'heading' : '';
//     const inlineStyle = {
//         color: 'green',
//         backgroundColor: 'red',
//         fontSize: '50px',
//     };

//     return (
//         <div>
//             <h1 className={`${applyStyle} font-style`}>
//                 Welcome to my React Class {props.clgName}, {props.city}
//             </h1>
//             {props.children}
//             <h2 style={inlineStyle}>Good afternoon</h2>
//         </div>
//     );
// }

// export default FunctionalComponent;
import React, { useState } from 'react';
import './Style.css';

function FunctionalComponent() {
    const [isChanged, setIsChanged] = useState(false);

    // Toggle styles and text
    const handleClick = () => {
        setIsChanged(!isChanged);
    };

    return (
        <div>
            <h1 className={isChanged ? 'alternate-heading' : 'heading'}>
                {isChanged ? 'Thank You For Visiting' : 'Welcome To My Project'}
            </h1>
            <h2 className={isChanged ? 'alternate-subtext' : 'subtext'}>
                {isChanged ? 'Goodbye!' : 'Good Afternoon!'}
            </h2>
            <button onClick={handleClick}>
                {isChanged ? 'Reset' : 'Change'}
            </button>
        </div>
    );
}

export default FunctionalComponent;



