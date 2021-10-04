import React from 'react';


type NavbarProps = {
    brand: { name: string, to: string },
    links: Array <{ name: string, to: string }>
} 



class Navbar extends React.Component <NavbarProps, {}> {
    // const { brand, links } = props;
    // const NavLinks: any = () => links.map((link: { name: string, to: string }) => <Li key={ link.name }><a href={ link.to }>{ link.name }</a></Li>);
    render() {
        const navBarProps: NavbarProps = this.props;
        const NavLinks: any = () => navBarProps.links.map((link: { name: string, to: string }) => <li key={ link.name }><a href={ link.to }>{ link.name }</a></li>);

        return(
            <nav>
            <h1>{ this.props.brand }</h1>
            <NavLinks />
            </nav>
        )
    }
   
}


export default Navbar