import React from 'react';


type NavbarProps = {
    brand: { name: string, to: string },
    links: Array <{ name: string, to: string }>
} 

const { brand, links } = props;
const NavLinks: any = () => links.map((link: { name: string, to: string }) => <Li key={ link.name }><a href={ link.to }>{ link.name }</a></Li>);

class Navbar extends React.Component <NavbarProps, {}> {
    render() {
        return(
            <nav>
            <h1>{ this.props.brand }</h1>
            <NavLinks />
            </nav>
        )
    }
   
}


export default Navbar