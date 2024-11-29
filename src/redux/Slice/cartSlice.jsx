import { createSlice, current } from '@reduxjs/toolkit'
const saveToLocalStorage = (state) => { 
    localStorage.setItem('cartItems', JSON.stringify(state));
 };

export const cartSlice = createSlice({
    name: 'cart',
    initialState:JSON.parse(localStorage.getItem('cartItems'))||[],
    
    reducers: {
        addToCart: (state, action) => {

            const { id, quantity = 1, image, price, title, rating } = action.payload;
            const item = state.find(item => item.id === id);
            if (item) {
                item.quantity += 1;
            } else {
                state.push({ id, quantity, image, price, title, rating });
            }
            saveToLocalStorage(state);
        },
        removeFromCart: (state, action) => {
            console.log(action.payload)
            const { id } = action.payload;
           return state = state.filter(item => item.id !== id)

           

        },
        increaseQuantity: (state, action) => {
            const { id } = action.payload;
            const item = state.find(item => item.id === id);
            if (item) {
                item.quantity += 1;
            }
            saveToLocalStorage(state);
        },

        decreaseQuantity: (state, action) => {
            const { id } = action.payload;
            const item = state.find(item => item.id === id);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
            }else{
             return  state = state.filter(item => item.id !== id)
            }
        },
    }
})

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions
export default cartSlice.reducer