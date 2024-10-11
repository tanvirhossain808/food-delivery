/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useContext } from "react"
import "./FoodDisplay.css"
import { StoreContext } from "../../context/StoreContent"
import FoodItems from "../FoodItems/FoodItems"
import { ShimmerSimpleGallery } from "react-shimmer-effects"

const FoodDisplay = ({ category }) => {
    const { food_list, isBackendReady } = useContext(StoreContext)

    if (!isBackendReady) {
        return (
            <>
                <div>
                    <h2 className="backendNotify">
                        Please wait a minute backend is getting ready
                    </h2>
                    <ShimmerSimpleGallery card imageHeight={300} />
                </div>
            </>
        )
    }

    return (
        <>
            <div className="food-display" id="food-display">
                <h2>Top dishes near you</h2>
                <div className="food-display-list">
                    {food_list.map((item, index) => {
                        if (category === "All" || category === item.category) {
                            return (
                                <FoodItems
                                    key={index}
                                    id={item._id}
                                    name={item.name}
                                    description={item.description}
                                    price={item.price}
                                    image={item.image}
                                />
                            )
                        }
                    })}
                </div>
            </div>
        </>
    )
}

export default FoodDisplay
