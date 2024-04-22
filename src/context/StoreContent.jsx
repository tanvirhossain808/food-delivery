/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { food_list } from "../../public/frontend_assets/assets";

export const StoreContext = createContext(null)



const StoreContextProvider = (props) => {

    const [cartItems, setCartItems] = useState({})
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

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart
    }

    useEffect(() => {
        console.log(cartItems)
    }, [cartItems])

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider