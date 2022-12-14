import React, { useEffect, useState } from 'react'
import Cart from '../Cart/Cart'
import Product from '../Product/Product'
import './Shop.css'
const Shop = () => {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])
  useEffect(() => {
    fetch('products.json')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  const handleAddToClick = prodcut => {
    console.log(prodcut)
    // cart.push(prodcut);
    const newCart = [...cart, prodcut]
    setCart(newCart)
  }

  return (
    <div className='shop-container'>
      <div className='products-container'>
        {products.map(product => (
          <Product
            key={product.id}
            product={product}
            handleAddToClick={handleAddToClick}
          ></Product>
        ))}
      </div>
      <div className='cart-container'>
        <Cart cart={cart}></Cart>
      </div>
    </div>
  )
}

export default Shop
