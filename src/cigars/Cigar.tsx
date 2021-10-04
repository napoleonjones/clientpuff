// import ReactDOM from 'react-dom';
// // import Button from '@material-ui/core/Button';
// import { Button } from 'antd';
// import Login from '../auth/Login'
// import React, { Component } from 'react';
// import { Collapse } from 'antd';
// import CigarEdit from './CigarEdit';
// import APIURL from '../helpers/environment';



// const { Panel } = Collapse;

// //Types
// export type CartItemType = {
// 	id: number;
// 	reviews: [];
// 	category: string;
// 	description: string;
// 	image: string;
// 	price: number;
// 	title: string;
// 	amount: number;
// };
// type Props = {
// 	item: CartItemType;
// 	handleAddToCart: (clickedItem: CartItemType) => void;
// 	token: string;
// 	getProducts: () => void;
// 	postReview: any;
// 	createReview: any;
// 	reviewOn: () => void;
// 	reviewOff: any;
// };

// // EDIT FETCH
// export default class Item extends Component<Props, CartItemType> {
// 	constructor(props: Props) {
// 		super(props);
// 		this.state = {
// 			id: 0,
// 			reviews: [],
// 			category: '',
// 			title: '',
// 			description: '',
// 			image: '',
// 			price: 0,
// 			amount: 0
// 		};
// 	}

// 	handleDelete(item: {}) {
// 		fetch(`${APIURL}/product/${this.props.item.id}`, {
// 			method: 'DELETE',
// 			headers: new Headers({
// 				'Content-Type': 'application/json',
// 				Authorization: this.props.token
// 			})
// 		})
// 			.then((response) => response.json())
// 			.then((data) => {
// 				this.props.getProducts();
// 			});
// 	}


// 	reviewMenu = this.props.item.reviews.length === 0 ? (
// 		''
// 	) : (
// 		<Button type="text">View Reviews {this.props.item.reviews.length}</Button>
// 	);
// 	editProductMenu = <Button type="text">Edit</Button>;

// 	render() {
// 		return (
//             <>
//             </>

// 		);
// 	}
// }