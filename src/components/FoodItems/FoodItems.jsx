/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { assets } from '../../../public/frontend_assets/assets';
import './FoodItem.css'

const FoodItems = ({ id, name, price, description, image }) => {
    return (
        <div className='foodItem'>
            <div className="foodItemImageContainer">
                <img src={image} className="food-item-image" alt="" />


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