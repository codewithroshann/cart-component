import { configureStore } from '@reduxjs/toolkit'
import CartReducer from './Slice/cartSlice'

export const store = configureStore({
    reducer: {
        cart: CartReducer
    },
})
console.log(store.getState())