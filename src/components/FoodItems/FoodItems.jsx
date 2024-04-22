/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useContext } from 'react';
import { assets } from '../../../public/frontend_assets/assets';
import './FoodItem.css'
import { StoreContext } from '../../context/StoreContent';

const FoodItems = ({ id, name, price, description, image }) => {
    const { cartItems, addToCart, removeFromCart } = useContext(StoreContext)
    return (
        <div className='foodItem'>
            <div className="foodItemImageContainer">
                <img src={image} className="food-item-image" alt="" />

                {
                    !cartItems[id] ? <img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} alt='' /> : <div className='food-item-counter' >
                        <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt='' />
                        <p>{cartItems[id]}</p>
                        <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt="" />
                    </div>
                }
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="" />
                </div>
                <p className="food-item-diesc">
                    {description}
                </p>
                <p className="food-item-price">
                    ${price}
                </p>
            </div>

        </div>
    );
};

export default FoodItems;