/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { assets } from '../../../public/frontend_assets/assets';
import './FoodItem.css'

const FoodItems = ({ id, name, price, description, image }) => {
    const [itemCount, setItemCount] = useState(0)
    return (
        <div className='foodItem'>
            <div className="foodItemImageContainer">
                <img src={image} className="food-item-image" alt="" />

                {
                    !itemCount ? <img onClick={() => setItemCount(pre => pre + 1)} src={assets.add_icon_white} alt='' /> : <div className='food-item-counter' >
                        <img onClick={() => setItemCount(pre => pre - 1)} src={assets.remove_icon_red} alt='' />
                        <p>{itemCount}</p>
                        <img onClick={() => setItemCount(pre => pre + 1)} src={assets.add_icon_green} alt="" />
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