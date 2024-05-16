/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useEffect, useState } from "react";
// import { food_list } from "../../public/frontend_assets/assets";

export const StoreContext = createContext(null)



const StoreContextProvider = (props) => {

    const [cartItems, setCartItems] = useState({})
    const [food_list, setFoodList] = useState([])




    const url = "http://localhost:8081"
    const [token, setToken] = useState(localStorage.getItem("token") || "")

    const addToCart = async (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((pre) => ({ ...pre, [itemId]: 1 }))

        }
        else {
            setCartItems(pre => ({ ...pre, [itemId]: pre[itemId] + 1 }))
        }
        if (token) {
            await axios.post(url + "/api/cart/add", { itemId }, {
                headers: {
                    token
                }
            })
            console.log("add");
        }
        else {
            console.log("object");
        }
    }

    const removeFromCart = async (itemId) => {
        console.log(itemId);
        setCartItems(pre => ({ ...pre, [itemId]: pre[itemId] - 1 }))
        if (token) {
            await axios.post(url + "/api/cart/remove", { itemId }, {
                headers: { token }
            })
            console.log("remove");
        }
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
    const loadCartData = async () => {
        const response = await axios.post("http://localhost:8081/api/cart/get", {}, { headers: { token } })

        setCartItems(response.data.cartData)
    }

    useEffect(() => {

        async function loadData() {
            const token = localStorage.getItem("token")
            setToken(token)
            await fetchFoodList()
            if (token) {
                loadCartData()
            }


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