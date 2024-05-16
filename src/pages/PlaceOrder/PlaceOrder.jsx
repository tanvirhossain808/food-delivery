/* eslint-disable no-unused-vars */
import { useContext, useState } from 'react';
import './PlaceOrder.css';
import { StoreContext } from '../../context/StoreContent';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const PlaceOrder = () => {
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        street: "",
        city: "",
        state: "",
        zipCode: "",
        country: "",
        phone: ""
    })
    const onChangeHandler = (e) => {
        const name = e.target.name
        const value = e.target.value
        setData((pre) => ({ ...pre, [name]: value }))
    }
    const placeOrder = async (e) => {
        e.preventDefault()
        let orderItems = []
        food_list.map((item) => {
            if (cartItems[item._id] > 0) {
                let itemInfo = item
                itemInfo["quantity"] = cartItems[item._id]
                orderItems.push(itemInfo)
            }

            // console.log(object);

        })
        let orderData = {
            address: data,
            items: orderItems,
            amount: getTotalCartAmount() + 2,

        }
        let response = await axios.post(url + "/api/order/place", orderData, {
            headers: { token }
        })
        if (response.data.success) {
            const { session_url } = response.data
            window.location.replace(session_url)

        }
        else {
            alert("Error")
        }


    }
    const navigate = useNavigate()
    const { getTotalCartAmount, token, food_list, cartItems, url } = useContext(StoreContext)
    return (
        <form className='place-order' onSubmit={placeOrder}>
            <div className="place-order-left">
                <p className='title'>
                    Delivery Information
                </p>
                <div className='multi-fields'>
                    <input name="firstName" type="text" placeholder='First name' value={data.firstName} onChange={onChangeHandler} required required />
                    <input value={data.lastName} name="lastName" type="text" placeholder='Last name' onChange={onChangeHandler} required />
                </div>
                <input name="email" onChange={onChangeHandler} value={data.email} type="Email" placeholder='Email address' required />
                <input type="text" placeholder='Street' name='street' value={data.street} onChange={onChangeHandler} />
                <div className='multi-fields'>
                    <input type="text" placeholder='City' name='city' value={data.city} onChange={onChangeHandler} required />
                    <input type="text" placeholder='State' name='state' value={Date.state} onChange={onChangeHandler} required />
                </div>
                <div className='multi-fields'>
                    <input type="text"
                        name="zipCode" value={data.zipCode}
                        onChange={onChangeHandler}
                        placeholder='Zip code' required />
                    <input type="text" placeholder='Country' name='country' value={data.country} onChange={onChangeHandler} required />
                </div>
                <input type="text" placeholder='Phone' name='phone'
                    value={data.phone}
                    onChange={onChangeHandler}
                    required />
            </div>
            <div className="place-order-right">
                <div className="cart-total">
                    <h2>Cart Total</h2>
                    <div className="">
                        <div className="cart-total-details">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <p>Delivery Fee</p>
                            <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <b>Total</b>
                            <b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
                        </div>
                    </div>
                    <button type='submit' onClick={() => navigate("/order")}>PROCEED TO Payment</button>
                </div>
            </div>

        </form>
    );
};

export default PlaceOrder;