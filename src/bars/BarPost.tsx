import { React } from 'react';


type BarProps = {
    handleSubmit(
        brand: string,
        profile: string,
        shape: string,
        wrapper: string,
        origin: string,
        rating: number
    ): void };

type BarState = {
    brand: string;
    profile: string;
    shape: string;
    wrapper: string;
    origin: string;
    rating: number;
};

export class BarPost extends React.Component <BarProps, BarState> {
    state = { 
        brand: "",
        profile: "",
        shape: "",
        wrapper: "",
        origin: "",
        rating: 0
    };

    submitBar = (e: React.FormEvent) => {
        e.preventDefault()
        this.props.handleSubmit(
            this.state.brand, 
            this.state.profile, 
            this.state.shape, 
            this.state.wrapper, 
            this.state.origin, 
            this.state.rating)
    };
    
    render (){
        return (
            <>
            <form onSubmit={ this.submitBar }>
                <input>onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
                {this.setState({
                    brand: e.currentTarget.value,  
                    profile: e.currentTarget.value, 
                    shape: e.currentTarget.value, 
                    wrapper: e.currentTarget.value, 
                    origin: e.currentTarget.value,
                    rating: +e.currentTarget.value 
                })}};
                </input>
            </form>
            </>
        )
    };
}
