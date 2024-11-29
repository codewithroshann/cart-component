import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart, increaseQuantity, decreaseQuantity } from '../redux/Slice/cartSlice'


const Cart = () => {
  const dispatch = useDispatch()
  const Products = useSelector((state) => state.cart)
  console.log("cartProducts : ", Products)
  if(Products.length===0){
    return <div className="cart-container w-100 d-flex align-items-center justify-content-center mt-4 p-3">
    <h2>Cart is Empty</h2>
    </div>
  }

  return (
    <>
      <div className="cart-container w-100 d-flex flex-column  flex-wrap mt-4 p-3">

        {

          Products.map((items, key) => {
            return <div className="product-card w-100 d-flex flex-wrap gap-3 justify-content-between align-items-center" key={key} index={items.id}>

              <div className="cart-image me-5" >
                <img src={items.image} alt="" />
              </div>
              <div className="description" style={{ minWidth: "300px" }}>

                <p >{items.title.slice(0, 30)}...</p>
                <span className='d-flex column-gap-1 align-items-center '>{items.rating.rate}⭐⭐⭐⭐</span>
              </div>
              <span style={{ width: "100px" }}>${(items.price * items.quantity).toFixed(2)}</span>
              <div className="item-quantity">
                <button className='btn btn-success me-4' onClick={() => {
                  dispatch(decreaseQuantity(items))
                }}>-</button>
                <span style={{ width: "100px" }}>{items.quantity}</span>
                <button className='btn btn-success ms-4' onClick={() => { dispatch(increaseQuantity(items)) }}>+</button>
              </div>
              <button className='btn btn-danger' onClick={() => { dispatch(removeFromCart(items)) }}>Remove</button>
            </div>

          })

        }
        <div className="total-amount d-flex align-items-center justify-content-end gap-1  py-3">
          <button className='btn btn-danger px-4' onClick={()=>{localStorage.removeItem('cartItems'),window.location.reload()}}>
            Clear Cart</button>
          <button className='btn btn-success px-5'>
            Buy</button>
          <div className="ammount btn btn-primary">
            Total :${Products.map(item => item.price * item.quantity).reduce((prev, curr) => prev + curr, 0).toFixed(2)}
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart
