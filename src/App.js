

// // function App() {
// //   let ele = React.createElement("div" , {classNmae:"App"} ,
// //     React.createElement("hi" ,null,"Header")
// //   )
// //   let username = "dinesh";
// //   retu
// //   return (
   
// //   );
// // }

// // export default App
// // // !component composition

// // import React from 'react'
// // import Navbar from './components/Navbar'
// // import Main from './components/Main'
// // import Sidebar1 from './compnents/Sidebar1'
// // import Sidebar2 from './components/Sidebar2'
// // import Footer from './components/Footer'
// // const App = () => {
// //   return (
// //     <div className='app'>
// //       <Navbar/>
// //         <Main/>
// //         <div className='sidebar'>
// //           <Sidebar1/>
// //           <Sidebar2/>
// //         </div>
// //         <Footer/>
// //     </div>
// //   )
// // }
// // export default App
// // props 
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
// // <FBCPropEx
// // user="janardhan"
// // isMarried={true}
// // hobbies={["chatting" , "Reading"]}
// // />
// // import React from 'react';
// // import Navbar from './components/Navbar';
// // import Sidebar from './components/Sidebar';
// // import Sidebar1 from './components/Sidebar1';
// // import Main from './components/Main';
// // import Footer from './components/Footer';

// // const App = () => {
// //   return (
// //     <div className='app'>
// //       <Navbar />
// //       <Main />
// //       <div className = 'sidebar'>
// //       <Sidebar />
// //       <Sidebar1 />
// //       </div>
// //       <Footer />
// //     </div>
// //   );
// // };

// // export default App;

// // import React, { Component } from 'react';
// // import CBCPropEx from './Stateexample/CBCPropEx';

// // export default class App extends Component {
// //   render() {
// //     return (
// //       <div>
// //         <CBCPropEx
// //           username="Janardhan"
// //           age={20}
// //           hobbies={["Playing", "Reading books", "Watching YouTube"]}
// //           address={{ city: "Jangoan", area: "RamaChandraPuram" }}
// //           sendFun={() => alert("Hi, I am Janardhan")}
// //         />
// //       </div>
// //     );
// //   }
// // }


// //       import React, { Component } from 'react';
// //       import CBCPropEx from './propsex/CBCPropEx'; // Assuming CBCPropEx is correctly defined in the specified path
      
// //       export default class App extends Component {
// //         render() {
// //           return (
// //             <div>
// //               <CBCPropEx
// //                 username="Janardhan"
// //                 isMarried={true}
// //                 hobbies={["Playing", "Reading books", "Watching YouTube"]}
// //               />
// //             </div>
// //           );
// //         }
// //       }

// // import React, { Component } from 'react';
// // import CBCStateEX from './stateexample/CBCStateEX'; // Adjust path as per your folder structure


// // export default class App extends Component {
// //   render() {
// //     return (
// //       <div>
// //         <h1>State and Props Example</h1>
// //         <CBCStateEX />
// //       </div>
// //     );
// //   }
// // }
// // import React, { Component } from 'react';
// // import CBCStateEX from './src/stateexample/CBCStateEX'; // Adjusted path

// // export default class App extends Component {
// //   render() {
// //     return (
// //       <div>
// //         <h1>State and Props Example</h1>
// //         <CBCStateEX />
// //       </div>
// //     );
// //   }
// // }

// // import React, { Component } from 'react';
// // import CBCStateEX from './stateexample/CBCStateEX'; // Adjust path as per your folder structure


// // export default class App extends Component {
// //   render() {
// //     return (
// //       <div>
// //         <h1>State and Props Example</h1>
// //         <CBCStateEX />
// //       </div>
// //     );
// //   }
// // }


// // import React, { Component } from 'react';
// // import CBCStateEX from './stateexample/CBCState'; // Adjust path as per your folder structure
// // // import CBCStateEX from './stateexample/FBCStateEX';

// // export default class App extends Component {
// //   render() {
// //     return (
// //       <div>
// //         <h1>State and Props Example</h1>
// //         <CBCStateEX />
// //       </div>
// //     );
// //   }
// // }
// // import React from 'react';
// // import FunctionalComponent from './components/FunctionalComponents';

// // function App() {
// //     return (
// //         <div className="App">
// //             <FunctionalComponent clgName="MRU" city="Hyderabad" apply={true}>
// //                 <p>This is a child element passed as props.</p>
// //             </FunctionalComponent>
// //         </div>
// //     );
// // }

// // export default App;
// import React from 'react';
// import FunctionalComponent from './components/FunctionalComponents';

// function App() {
//     return (
//         <div>
//             <FunctionalComponent />
//         </div>
//     );
// }

// export default App;
// import logo from './logo.svg'
// import './App.css';
// import MyForm from './components/myForm';



// function App() {
//   return (
//     <div className="App">
//      <MyForm></MyForm>
//      </div>
//   );
// }

// export default App;
// import React, { useState } from "react";
// import "./Style.css";
// import WeatherCard from "./WeatherCard";

// function App() {
//   const [city, setCity] = useState("");
//   const [weather, setWeather] = useState(null);

//   const fetchWeather = async () => {
//     if (city.trim()) {
//       // Mock weather data for simplicity
//       const mockData = {
//         city,
//         temperature: ${Math.floor(Math.random() * 20) + 10}°C,
//         condition: "Sunny",
//       };
//       setWeather(mockData);
//     }
//   };

//   return (
//     <div className="app-container">
//       <h1>Weather App</h1>
//       <div className="weather-input">
//         <input
//           type="text"
//           value={city}
//           onChange={(e) => setCity(e.target.value)}
//           placeholder="Enter city name"
//         />
//         <button onClick={fetchWeather}>Get Weather</button>
//       </div>
//       {weather && <WeatherCard weather={weather} />}
//     </div>
//   );
// }
// import React from 'react';
import React from 'react';
import RefExample from './hooksexamples/RefExample';

const App = () => {
  return (
    <div>
      <h1>React Application</h1>
      <RefExample/>
    </div>
  );
};

export default App;