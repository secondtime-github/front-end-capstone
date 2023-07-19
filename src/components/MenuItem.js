import React from 'react';
import './MenuItem.css';

const MenuItem = ({ title, description, imageSrc, price }) => {
    return (
        <div className='menu-item'>
            <img
                className='menu-item-image'
                src={imageSrc}
                alt={title}
            />
            <div className='menu-item-content'>
                <div className='menu-item-header'>
                    <h3 className='menu-item-title'>{title}</h3>
                    <h3 className='menu-item-price'>${price}</h3>
                </div>
                <p className='menu-item-description'>{description}</p>
                <div className='menu-item-footer'>
                    <p>Order a delivery</p>
                    <img
                        className='menu-item-delivery-icon'
                        src={process.env.PUBLIC_URL + "/Delivery van.png"}
                        alt='Delivery Van'
                    />
                </div>
            </div>
        </div>
    );
};

export default MenuItem;
