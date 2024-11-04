// store/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { init } from 'next/dist/compiled/webpack/webpack';
import { useState } from 'react';

const cartSlice = createSlice({
  
  name: 'cart',
  initialState: [],
  reducers: {
    
    addToCart: (state, action) => {
      const item = action.payload;
      console.log(state.find((cartItem) => cartItem.id === item.id),"statestatestate");
      const exists = state.find((cartItem) => cartItem.id === item.id);

      if (exists) {
        exists.quantity += 1;
      } else {
        state.push({ ...item, quantity: 1 });
      }
      
    },
    removeFromCart: (state, action) => {
      // console.log(initialState, 'statetettetetetetet')
      console.log(action, 'actionactionactionactionaction')
      state = state.filter(item => item.id !== action.payload)
      console.log(state, 'statetettetetetetet')
      // state.filter(item => item.id == action.payload).forEach((item) => {
      //   console.log(item.id, 'itemitemitemitemitem')
      // })
    },
    increaseQuantity: (state, action) => {

      console.log(state, 'LLLLLLLLLLLLLLL')
      
      const item = state.find((cartItem) => cartItem.id === action.payload);
      console.log(item,"item1");
      
      if (item) {
        item.quantity += 1;
        // Update total price
        state.total = state.reduce((sum, item) => sum + item.price * item.quantity, 0);
        // console.log(state.total,"total");
        console.log(item.price,"price");
      }
    },
    decreaseQuantity: (state, action) => {
      console.log(state, 'sssssss')
      const item = state.find((cartItem) => cartItem.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        // Update total price
        state.total = state.reduce((subtract,item) => subtract - item.price * item.quantity, 0);
        console.log(item.price,"price");
        // console.log(item.quantity,"quantity");
      }
    }
  },

  // removeFromCart: (state, action) => {
  //   console.log(state, 'statetettetetetetet')
  //   console.log(action, 'actionactionactionactionaction')
  //   state.filter(item => item.id !== action.payload)
  // },
  
});

export const { addToCart, removeFromCart,increaseQuantity,decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;

// store/cartSlice.js
// import { createSlice } from '@reduxjs/toolkit';

// const cartSlice = createSlice({
//   name: 'cart',
//   initialState: {
//     items: [],  // Initialize items as an empty array
//     total: 0,
//   },
//   reducers: {
//     addToCart: (state, action) => {
//       const item = action.payload;
//       const exists = state.items.find((cartItem) => cartItem.id === item.id);
    
//       if (exists) {
//         exists.quantity += 1;
//       } else {
//         state.items.push({ ...item, quantity: 1 });
//       }

//       // Update total price
//       state.total = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
//     },

//     removeFromCart: (state, action) => {
//       state.items = state.items.filter(item => item.id !== action.payload);
//       // Update total price
//       state.total = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
//     },

//     increaseQuantity: (state, action) => {
//       const item = state.items.find((cartItem) => cartItem.id === action.payload);
//       if (item) {
//         item.quantity += 1;
//         // Update total price
//         state.total = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
//       }
//     },

//     decreaseQuantity: (state, action) => {
//       const item = state.items.find((cartItem) => cartItem.id === action.payload);
//       if (item && item.quantity > 1) {
//         item.quantity -= 1;
//       } else {
//         state.items = state.items.filter(cartItem => cartItem.id !== action.payload);
//       }
//       // Update total price
//       state.total = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
//     },
//   },
// });

// export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
// export default cartSlice.reducer;
