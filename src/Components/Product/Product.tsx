import React from 'react';
import './Product.scss';

interface Props {
    img: string;
    name: string;
    price: string;
}

const Product: React.FC<Props> = ({img, name, price}: Props) => {    
    return (
        <div className="product">
            <div className="product__image">
                <img src={img} alt="" />
            </div>
            <div className="product__name">
                <p>{name}</p>
            </div>
            <div className="product__price">
                <p>${price}</p>
            </div>
        </div>
    )
}

export default Product
