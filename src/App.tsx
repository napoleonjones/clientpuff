import { booleanTypeAnnotation } from '@babel/types';
import React, { Component } from 'react';
import './App.css';
import Auth from './auth/Auth';

// class App extends Component {
//   constructor(props){
//     super(props)
//     this.state={
//       loggedIn: false,
//       isClass: false
//     }
//   }  

function App() {

  return (
    <div>
        <h2> Test </h2>
    </div>
  );

  // render (){
  //   return (
  //     <>
  //     <div className="App">
  //       <div className="App-header">
  //         <h1>{isClass ? 'Welcome to the Pufferator!' : 'Nope---try again!'}</h1>
  //         {
  //           loggedIn ?
  //           <button style={{ padding: '1em' }} onClick={() => setLoggedIn(false)}>Logout</button>
  //           :
  //           <Auth loggedIn={loggedIn} setLoggedIn={setLoggedIn} setIsClass={setIsClass}  />
  //         }
  //       </div>
  //     </div>
  //     </>
  //     )
  //   }

    
}
export default App;
    
