/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useContext } from 'react';
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContent';
import FoodItems from '../FoodItems/FoodItems';


const FoodDisplay = ({ category }) => {
    const { food_list } = useContext(StoreContext);

    return (
        <div className='food-display' id='food-display'>
            <h2>Top dishes near you</h2>
            <div className="food-display-list">

                {
                    food_list.map((item, index) => (
                        <FoodItems key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
                    ))
                }

            </div>

        </div>
    );
};

export default FoodDisplay;