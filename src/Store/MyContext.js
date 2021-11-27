import React, { createContext, useContext, useReducer } from 'react'
import Data from '../Constant/JsonData'
export const Cart = createContext()
const product = Data.products

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, { ...action.payload }],
      }

    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter((c) => c.id !== action.payload.id),
      }

    case 'INCREMENT_ITEM':
      return {
        ...state,
        cart: state.cart.map((c, index) => {
          if (c.id === action.payload.id) {
            c.quantity = action.payload.quantity + 1
          }
          return c
        }),
      }

    case 'DECREMENT_ITEM':
      return {
        ...state,
        cart: state.cart.filter((c) =>
          c.id === action.payload.id
            ? (c.quantity = action.payload.quantity - 1)
            : c.quantity,
        ),
      }

    default:
      return state
  }
}

const MyContext = (props) => {
  const [state, dispatch] = useReducer(cartReducer, {
    state: product,
    cart: [],
  })

  return (
    <Cart.Provider value={{ state, dispatch }}>{props.children}</Cart.Provider>
  )
}

export const CartState = () => {
  return useContext(Cart)
}

export default MyContext
