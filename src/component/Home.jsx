import React from 'react'
import ProductItems from '../Products.json'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from '../redux/Slice/cartSlice'

const Home = () => {
    const count = useSelector((state) => state.cart.value)
    const dispatch = useDispatch()
    // console.log(ProductItems)
    return (
        <>
            <div className="product-container container my-4">
                <span>{count}</span>
                {
                    ProductItems.map((items, key) => {
                        return <div className="product-card" key={key} index={items.id}>
                            <div className="product-image" >
                                <img src={items.image} alt="" />
                            </div>

                            <p>{items.title.slice(0, 30)}...</p>
                            <p>${items.price}</p>
                            <p>{items.rating.rate} ⭐⭐⭐⭐⭐</p>
                            <button className='btn btn-primary' onClick={() => {
                                dispatch(addToCart(items))
                            }}
                            >Add To Cart</button>

                        </div>
                    })
                }
            </div>

        </>
    )
}

export default Home
