import React, { Component } from 'react'
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button'
import { StyledContainer } from './Container'


export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value)=>{
                    const {id,img,info,price,title,inCart} = 
                    value.detailProduct;
                    return (
                        <div className="container py-5">
                            <StyledContainer>
                            {/*title*/}
                            <div className="row">
                                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                <h1>{title}</h1>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3">
                                    <img src={img} className="img-fluid" alt="product"/>
                                </div>
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                <h2>{title}</h2>
                                <h4 className="text-blue">
                                    <stong>
                                        price: <span>$</span>{price}
                                    </stong>
                                </h4>
                                <p className="text-caplitalize font-weight-bold mt-3 mb-0">product info:</p>
                                <p className="text-muted lead">{info}</p>
                                <div>
                                    <Link to="/productlist">
                                    <ButtonContainer>back to products</ButtonContainer>
                                    </Link>
                                    <ButtonContainer cart={true} disabled={inCart?true:false} onClick={()=>{
                                        value.addToCart(id);
                                        value.openModal(id);
                                    }}>
                                        {inCart?"in cart":"add to cart"}
                                    </ButtonContainer>
                                </div>
                                </div>
                            </div>
                            </StyledContainer>
                        </div>
                    )
                } }
            </ProductConsumer>
        )
    }
}
