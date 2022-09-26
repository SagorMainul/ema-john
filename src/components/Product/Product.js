import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = ({ product, handleAddToClick }) => {
  const { img, name, price, seller, ratings } = product

  return (
    <div className='product'>
      <img src={img} alt='Products Image' />
      <div className='prodcut-info'>
        <p className='product-name'>{name}</p>
        <p>
          Price: <b>${price}</b>
        </p>
        <p>
          <small>
            Seller: <b>{seller}</b>
          </small>
          <p>
            <small>
              Rating: <b>{ratings}</b> Stars
            </small>
          </p>
        </p>
      </div>
      <button onClick={() => handleAddToClick(product)} className='cart-btn'>
        <p className='btn-text'>Add to Cart</p>
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  )
}

export default Product
