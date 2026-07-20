import React from 'react'

const ProductList = (props) => {
    const { products, addToCart } = props
    return (
        <>
            <div className="wrap">
                {products.map((el) => (
                    <div className="card" key={el.id}>
                        <img src={el.image} alt="" />
                        <h2>{el.title}</h2>
                        <p>{el.category}</p>
                        <div className="card-footer">
                            <span className="price">${el.price}</span>
                            <button onClick={() => addToCart(el)}>Add to cart</button>
                        </div>
                    </div>
                ))}

                {products.length === 0 && (
                    <p className="empty">No products found.</p>
                )}
            </div>
        </>
    )
}

export default ProductList