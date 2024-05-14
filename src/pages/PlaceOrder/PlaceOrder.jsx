import { useContext } from 'react';
import './PlaceOrder.css';
import { StoreContext } from '../../context/StoreContent';
import { useNavigate } from 'react-router-dom';

const PlaceOrder = () => {
    const navigate = useNavigate()
    const { getTotalCartAmount } = useContext(StoreContext)
    return (
        <div className='place-order'>
            <div className="place-order-left">
                <p className='title'>
                    Delivery Information
                </p>
                <div className='multi-fields'>
                    <input type="text" placeholder='First name' />
                    <input type="text" placeholder='Last name' />
                </div>
                <input type="Email" placeholder='Email address' />
                <input type="text" placeholder='Street' />
                <div className='multi-fields'>
                    <input type="text" placeholder='City' />
                    <input type="text" placeholder='State' />
                </div>
                <div className='multi-fields'>
                    <input type="text" placeholder='Zip code' />
                    <input type="Country" placeholder='State' />
                </div>
                <input type="text" placeholder='Phone' />
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
                    <button onClick={() => navigate("/order")}>PROCEED TO Payment</button>
                </div>
            </div>

        </div>
    );
};

export default PlaceOrder;