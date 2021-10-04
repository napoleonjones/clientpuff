// import React from 'react';
// import './App.css';
// import Auth from './auth/Auth'

// function App() {
//   return (
//     <div className="App">
//       <div className="mainDiv">
//           <section className="App-header">
//           Typescript and React Legacy Fetch Challenge
//           </section>
//       </div>
//     </div>
//   );
// }

// import React, { Component } from 'react';
// import './App.css';
// import 'antd/dist/antd.css';
// import NavbarScroller from './components/NavbarScroller';
// // import CigarIndex from './cigars/CigarIndex';
// import Login from './auth/Login';

// export type CigarType = {
//   brand: string;
//   profile: string;
//   shape: string;
//   wrapper: string;
//   origin: string;
//   rating: number
// };

// type stateType = {
//   sessionToken: string;
//   userRole: string;
// };

// export default class App extends Component <{}, stateType> {
//   constructor(props: "") {
//     super(props);
//     this.state = {
//       sessionToken: '',
//       userRole: ''
//     };
//   }

//   componentDidMount() {
//     if (localStorage.getItem('token')) {
// 			this.setState({ sessionToken: localStorage.getItem('token') });
// 		}

// 		if (localStorage.getItem('userRole')) {
// 			this.setState({ userRole: localStorage.getItem('userRole') });
// 		}
//   }

//   updateUserRole = (newUserRole: string) => {
// 		      localStorage.setItem('userRole', newUserRole);
// 		      this.setState({ userRole: newUserRole });
// 		      console.log(this.state.userRole);
// 	};

//   updateToken = (newToken: string) => {
// 		localStorage.setItem('token', newToken);
// 		this.setState({ sessionToken: newToken });
// 		console.log(this.state.sessionToken);
// 	};

//   clearToken = () => {
// 		localStorage.clear();
// 		this.setState({ sessionToken: '' });
// 	};

//   protectedViews = () => {
// 		return this.state.sessionToken === localStorage.getItem('token') ? (
// 			<div>
// 				{/* <Router> */}
// 					<NavbarScroller clearToken={this.clearToken} />
// 				{/* </Router> */}

// 				{/* <CigarIndex token={this.state.sessionToken} /> */}
// 			</div>
// 		) : (
// 			<Login updateToken={this.updateToken} updateUserRole={this.updateUserRole} />
// 		);
// 	};
  
//   render () {
//     return (
//       <div className="App">
//             {this.protectedViews()}
//       </div>
//     );
//   }
// }