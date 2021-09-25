import React, { Component } from 'react';
// import 'reset-css'
// import NavbarScroller from './components/NavbarScroller';
// import Auth from './auth/Auth';


// const navigation = {
//   brand: { name: "The Pufferator", to: "/home" },
//   links: [
//     { name: "Home", to: "/home" }, /**home */
//     { name: "Cigar", to: "/cigar" }, /**cigar */
//     { name: "Bars", to: "/tobaccobars" }, /**bar */
//     { name: "Resources", to: "/resources" }, /**resources */
//     { name: "Contact", to: "/contact" },
//   ]
// }
export default class App extends Component <{}, {}> {
  constructor(props: any) {
    super(props);
    this.state = {

    };

  }

  componentDidMount() {

  }
  
  render () {
    // const { brand, links } = navigation;
    return (
      <div className="App">
          <p>
            The Pufferator: under construction!
          </p>
      </div>
    );
  }
}

