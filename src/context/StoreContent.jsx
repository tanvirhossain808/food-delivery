/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useEffect, useState } from "react";
// import { food_list } from "../../public/frontend_assets/assets";

export const StoreContext = createContext(null)



const StoreContextProvider = (props) => {

    const [cartItems, setCartItems] = useState({})
    const [food_list, setFoodList] = useState([])
    console.log(food_list);



    const url = "http://localhost:8081"
    const [token, setToken] = useState(localStorage.getItem("token") || "")

    const addToCart = (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((pre) => ({ ...pre, [itemId]: 1 }))

        }
        else {
            setCartItems(pre => ({ ...pre, [itemId]: pre[itemId] + 1 }))
        }
    }

    const removeFromCart = (itemId) => {
        setCartItems(pre => ({ ...pre, [itemId]: pre[itemId] - 1 }))
    }
    const getTotalCartAmount = () => {
        let totalAmount = 0
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = food_list.find((product) => product._id === item)
                totalAmount += itemInfo.price * cartItems[item]
            }

        }
        return totalAmount
    }

    const fetchFoodList = async () => {
        try {
            const response = await axios.get(url + "/api/food/list")
            setFoodList(response.data.data)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {

        async function loadData() {
            await fetchFoodList()
        }
        loadData()

    }, [])


    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        url,
        token,
        setToken
    }



    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider