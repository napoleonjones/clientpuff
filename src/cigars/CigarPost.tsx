import React, { FormEventHandler } from 'react';

/**model after TransactionForm */
type CigarProps = {
    handleSubmit(
        brand: string,
        profile: string,
        shape: string,
        wrapper: string,
        origin: string,
        rating: number
    ): void };

type CigarState = {
        brand: string;
        profile: string;
        shape: string;
        wrapper: string;
        origin: string;
        rating: number;
    };

export class CigarPost extends React.Component <CigarProps, CigarState> {
        state = { 
            brand: "",
            profile: "",
            shape: "",
            wrapper: "",
            origin: "",
            rating: 0
        };

        submitCigar = (e: React.FormEvent) => {
            e.preventDefault()
            this.props.handleSubmit(
                this.state.brand, 
                this.state.profile, 
                this.state.shape, 
                this.state.wrapper, 
                this.state.origin, 
                this.state.rating)
        };


    render () {
        return (
            <>
            <form onSubmit={ this.submitCigar }>
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
    }
}