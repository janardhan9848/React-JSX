

// // // function App() {
// // //   let ele = React.createElement("div" , {classNmae:"App"} ,
// // //     React.createElement("hi" ,null,"Header")
// // //   )
// // //   let username = "dinesh";
// // //   retu
// // //   return (
   
// // //   );
// // // }

// // // export default App
// // // // !component composition

// // // import React from 'react'
// // // import Navbar from './components/Navbar'
// // // import Main from './components/Main'
// // // import Sidebar1 from './compnents/Sidebar1'
// // // import Sidebar2 from './components/Sidebar2'
// // // import Footer from './components/Footer'
// // // const App = () => {
// // //   return (
// // //     <div className='app'>
// // //       <Navbar/>
// // //         <Main/>
// // //         <div className='sidebar'>
// // //           <Sidebar1/>
// // //           <Sidebar2/>
// // //         </div>
// // //         <Footer/>
// // //     </div>
// // //   )
// // // }
// // // export default App
// // // props 
// // import React, { Component } from 'reacct'
// // import CBCPropEx from './propsex/CBCPropEx'
 
// // export default class App extends Component {
// //   render () {
// //     return (
// //       <CBDPropEx
// //       username="dinesh"
// //       age={21}
// //       hobbies={["playing" , "reading books" ,"stock"]}
// //       address={[city:"mancherial, area:ccc naspur"]}
// //       sendFun={function(){alert("hi i am janardhan")}}
// //       />
// //     )
// //   }
// // }
// <FBCPropEx
// user="janardhan"
// isMarried={true}
// hobbies={["chatting" , "Reading"]}
// />
// import React from 'react';
// import Navbar from './components/Navbar';
// import Sidebar from './components/Sidebar';
// import Sidebar1 from './components/Sidebar1';
// import Main from './components/Main';
// import Footer from './components/Footer';

// const App = () => {
//   return (
//     <div className='app'>
//       <Navbar />
//       <Main />
//       <div className = 'sidebar'>
//       <Sidebar />
//       <Sidebar1 />
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default App;

// import React, { Component } from 'react';
// import CBCPropEx from './Stateexample/CBCPropEx';

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <CBCPropEx
//           username="Janardhan"
//           age={20}
//           hobbies={["Playing", "Reading books", "Watching YouTube"]}
//           address={{ city: "Jangoan", area: "RamaChandraPuram" }}
//           sendFun={() => alert("Hi, I am Janardhan")}
//         />
//       </div>
//     );
//   }
// }


//       import React, { Component } from 'react';
//       import CBCPropEx from './propsex/CBCPropEx'; // Assuming CBCPropEx is correctly defined in the specified path
      
//       export default class App extends Component {
//         render() {
//           return (
//             <div>
//               <CBCPropEx
//                 username="Janardhan"
//                 isMarried={true}
//                 hobbies={["Playing", "Reading books", "Watching YouTube"]}
//               />
//             </div>
//           );
//         }
//       }

// import React, { Component } from 'react';
// import CBCStateEX from './stateexample/CBCStateEX'; // Adjust path as per your folder structure


// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <h1>State and Props Example</h1>
//         <CBCStateEX />
//       </div>
//     );
//   }
// }
// import React, { Component } from 'react';
// import CBCStateEX from './src/stateexample/CBCStateEX'; // Adjusted path

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <h1>State and Props Example</h1>
//         <CBCStateEX />
//       </div>
//     );
//   }
// }

// import React, { Component } from 'react';
// import CBCStateEX from './stateexample/CBCStateEX'; // Adjust path as per your folder structure


// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <h1>State and Props Example</h1>
//         <CBCStateEX />
//       </div>
//     );
//   }
// }


import React, { Component } from 'react';
import CBCStateEX from './stateexample/CBCState'; // Adjust path as per your folder structure
// import CBCStateEX from './stateexample/FBCStateEX';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>State and Props Example</h1>
        <CBCStateEX />
      </div>
    );
  }
}
