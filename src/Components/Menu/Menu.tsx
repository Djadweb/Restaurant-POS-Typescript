import React from 'react';
import Product from '../Product/Product';
import ProductsData from '../../data/products.json';
import './Menu.scss';

interface Props {
    addItems: any;
}

const Menu: React.FC<Props> = ({addItems}: Props) => {
    const clickHandler = (product: object) => {
        addItems(product);
    }
    return (
        <div className="menu">
            {ProductsData.map((product, index) => {
                return(     
                    <button key={index} onClick={() => clickHandler(product)}>
                        <Product key={index}  
                            img={product.img}
                            name={product.name}
                            price={product.price}
                        />                        
                    </button>                                   
                )
            })}           
        </div>
    )
}

export default Menu
