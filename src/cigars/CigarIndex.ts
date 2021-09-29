import React, { Component } from 'react';

// import Cart from '../cart/Cart';
import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Badge from '@material-ui/core/Badge';
// import { Wrapper, StyledButton } from '../../App.styles';
// import Item from './Item';
// import ProductInput from '../products/productInput';
import { Row, Col, Button } from 'antd';
import APIURL from "../helpers/environment"

export type CigarType = {
    brand: string;
    profile: string;
    shape: string;
    wrapper: string;
    origin: string;
    rating: number
};

type acceptedProps = {
    token: string;
};

type valueTypes = {
	boxItems: CigarType[];
	boxOpen: boolean;
	createRating: any;
	createActive: boolean;
    ratingActive: boolean
};

export default class ItemIndex extends Component<acceptedProps, valueTypes> {
	constructor(props: acceptedProps) {
		super(props);
		this.state = {
			boxItems: [],
			boxOpen: false,
			createRating: {},
			createActive: false,
            ratingActive: false
		};
	}

	createOn = () => {
		this.setState({ createActive: true });
	};

	createOff = () => {
		this.setState({ createActive: false });
	};

  ratingOn = () => {
    this.setState({ratingActive: true})
  }

  ratingOff = () => {
    this.setState({ratingActive: false})
  }

	handleAddToBox = (item: CigarType) => null;
	handleRemoveFromBox = (id: number) => null;

	postReview = (rating: number) => {
		this.setState({ createRating: rating });
	};

	getTotalItems = (items: CigarType[]) => items.reduce((ack: number, items) => ack + items.amount, 0);

	getCigars = () => {
		fetch(`${APIURL}/cigar`, {
			method: 'GET',
			headers: {
				Authorization: this.props.token
			}
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				this.setState({ boxItems: data });
			});
	};

	componentDidMount() {
		this.getCigars();
	}

	render() {
		return (

      <div>
				{
				<Row justify="center">
					<Col span={12}>
						<Button
							type="default"
							onClick={() => {
								this.createOn();
							}}
						>
								
							// Add Product
						</Button>
					</Col>
				</Row>
				{/* <Grid container spacing={3}> */}
        <Row justify="space-around">
					{this.state.boxItems.map((item: any) => (
						// <Grid item key={item.id} xs={12} sm={4}>
            <Col span={6} style={{padding: "20px"}} key={item.id}>
							<Item
								postRating={this.postRating}
								createRating={this.state.createRating}
								item={item}
								handleAddToCart={this.handleAddToBox}
								token={this.props.token}
								getProducts={this.getCigars}
                ratingOn={this.ratingOn}
                ratingOff={this.ratingOff}
							/>
              </Col>
						// </Grid>
					))}
          </Row>
				{/* </Grid> */}
      {this.state.createActive ? (
        <ProductInput
            token={this.props.token}
            getCigars={this.getCigars}
            createOn={this.createOn}
            createOff={this.createOff}
        />
      ) : (
        <></>
      )}
			{/* </Wrapper> */}
      </div>
		);
	}
}

    