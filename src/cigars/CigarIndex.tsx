// import React, { Component } from 'react';

// // import Cart from '../cart/Cart';
// import Drawer from '@material-ui/core/Drawer';
// import Grid from '@material-ui/core/Grid';
// import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
// import Badge from '@material-ui/core/Badge';
// // import { Wrapper, StyledButton } from '../../App.styles';
// import Cigar from './Cigar';
// // import ProductInput from '../products/productInput';
// import { Row, Col, Button } from 'antd';
// import APIURL from "../helpers/environment"

// export type CigarType = {
//     brand: string;
//     profile: string;
//     shape: string;
//     wrapper: string;
//     origin: string;
//     rating: number
// };

// type acceptedProps = {
//     token: string;
// };

// type valueTypes = {
// 	boxItems: CigarType[];
// 	boxOpen: boolean;
// 	createRating: any;
// 	createActive: boolean;
//     ratingActive: boolean
// };

// export default class CigarIndex extends Component<acceptedProps, valueTypes> {
// 	constructor(props: acceptedProps) {
// 		super(props);
// 		this.state = {
// 			boxItems: [],
// 			boxOpen: false,
// 			createRating: {},
// 			createActive: false,
//             ratingActive: false
// 		};
// 	}

// 	createOn = () => {
// 		this.setState({ createActive: true });
// 	};

// 	createOff = () => {
// 		this.setState({ createActive: false });
// 	};

//   ratingOn = () => {
//     this.setState({ratingActive: true})
//   }

//   ratingOff = () => {
//     this.setState({ratingActive: false})
//   }

// 	handleAddToBox = (item: CigarType) => null;
// 	handleRemoveFromBox = (id: number) => null;

// 	postReview = (rating: number) => {
// 		this.setState({ createRating: rating });
// 	};

// 	// getTotalItems = (items: CigarType[]) => items.reduce((ack: number, items) => ack + items, 0);

// 	getCigars = () => {
// 		fetch(`${APIURL}/cigar`, {
// 			method: 'GET',
// 			headers: {
// 				Authorization: this.props.token
// 			}
// 		})
// 			.then((res) => res.json())
// 			.then((data) => {
// 				console.log(data);
// 				this.setState({ boxItems: data });
// 			});
// 	};

// 	componentDidMount() {
// 		this.getCigars();
// 	}

// 	render() {
// 		return (

//       <div>

//       </div>

// 		)};
// };

    