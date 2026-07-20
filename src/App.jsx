import React, { useEffect, useState } from 'react'
import axios from 'axios'
import SearchInput from './components/SearchInput'
import ProductList from './components/Productlist'
import Cart from './components/Cart'

const App = () => {
  const [products, setProducts] = useState([])
  const [search, setSearch] = useState("")
  const [cart, setCart] = useState([])
  const [cartOpen, setCartOpen] = useState(false)

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data))
      .catch((err) => alert(err))
  }, [])

  const filteredProducts = products.filter((el) =>
    el.title.toLowerCase().includes(search.toLowerCase())
  )

  function addToCart(product) {
    setCart((prev) => {
      const existing = prev.find((el) => el.id === product.id)
      if (existing) {
        return prev.map((el) =>
          el.id === product.id ? { ...el, qty: el.qty + 1 } : el
        )
      }
      return [...prev, { ...product, qty: 1 }]
    })
    setCartOpen(true)
  }

  function removeFromCart(id) {
    setCart((prev) => prev.filter((el) => el.id !== id))
  }

  function changeQty(id, delta) {
    setCart((prev) =>
      prev
        .map((el) => (el.id === id ? { ...el, qty: el.qty + delta } : el))
        .filter((el) => el.qty > 0)
    )
  }

  const totalCount = cart.reduce((sum, el) => sum + el.qty, 0)
  const totalPrice = cart.reduce((sum, el) => sum + el.qty * el.price, 0)

  return (
    <>
      <header className="topbar">
        <h1 className="logo">Shopvora</h1>
        <SearchInput search={search} setSearch={setSearch} />
        <button className="cart-toggle" onClick={() => setCartOpen(true)}>
          🛒 {totalCount > 0 && <span className="badge">{totalCount}</span>}
        </button>
      </header>

      <ProductList products={filteredProducts} addToCart={addToCart} />

      <Cart
        cart={cart}
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        removeFromCart={removeFromCart}
        changeQty={changeQty}
        totalPrice={totalPrice}
      />
    </>
  )
}

export default App
