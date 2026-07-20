import React from 'react'

const Cart = (props) => {
    const { cart, open, onClose, removeFromCart, changeQty, totalPrice } = props

    return (
        <>
            <div className={`overlay ${open ? 'show' : ''}`} onClick={onClose}></div>

            <aside className={`cart-panel ${open ? 'open' : ''}`}>
                <div className="cart-header">
                    <h2>Your Cart</h2>
                    <button className="close-btn" onClick={onClose}>✕</button>
                </div>

                <div className="cart-items">
                    {cart.length === 0 && <p className="empty">Cart is empty.</p>}

                    {cart.map((el) => (
                        <div className="cart-item" key={el.id}>
                            <img src={el.image} alt="" />
                            <div className="cart-item-info">
                                <h3>{el.title}</h3>
                                <span>${el.price}</span>
                                <div className="qty-control">
                                    <button onClick={() => changeQty(el.id, -1)}>-</button>
                                    <span>{el.qty}</span>
                                    <button onClick={() => changeQty(el.id, 1)}>+</button>
                                </div>
                            </div>
                            <button className="remove-btn" onClick={() => removeFromCart(el.id)}>🗑</button>
                        </div>
                    ))}
                </div>

                {cart.length > 0 && (
                    <div className="cart-footer">
                        <div className="total-row">
                            <span>Total</span>
                            <span>${totalPrice.toFixed(2)}</span>
                        </div>
                        <button className="checkout-btn">Checkout</button>
                    </div>
                )}
            </aside>
        </>
    )
}

export default Cart