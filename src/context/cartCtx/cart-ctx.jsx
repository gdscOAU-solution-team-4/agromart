import { createContext, useContext, useReducer } from 'react'
import { STATIC_CART_ITEMS } from '../../pages/Cart'
import cartReducer from './cartReducer'

//? INIT Cart Context
const CartCtx = createContext()

// ? cart items {total cost, items, total discount}
export function CartProvider({ children }) {
  //   //? Initialize Subtotal, total disount
  //   const initial = 0

  // ? use cart reducer
  const [state, dispatch] = useReducer(cartReducer, {
    items: STATIC_CART_ITEMS,
    subTotal: STATIC_CART_ITEMS.reduce(
      (accumulator, { quantity, unitPrice }) => {
        const itemTotal = unitPrice * quantity
        return accumulator + itemTotal
      },
      0
    ),
    discount: STATIC_CART_ITEMS.reduce(
      (accumulator, { quantity, discount }) => {
        const itemTotalDiscount = discount * quantity
        return accumulator + itemTotalDiscount
      },
      0
    ),
  })
  const value = { state, dispatch }
  return <CartCtx.Provider value={value}>{children}</CartCtx.Provider>
}

//? coupling the useCart hook to this file just to localize stuff
export default function useCart() {
  const ctx = useContext(CartCtx)
  if (ctx === undefined) {
    throw new Error("This is component isn't wrapped with Cart Provider")
  }
  return ctx
}
