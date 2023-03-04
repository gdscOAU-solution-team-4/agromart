export default function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      // ? Item currently in cart
      const existingItemIndex = state.items.findIndex(
        item => item.id === action.item.id
      )
      const existingItem = state.items[existingItemIndex]

      // ? Updated Items
      let updatedItems

      //! Update items
      if (existingItem) {
        //! Update existing item
        const updatedItem = {
          ...existingItem,
          quantity: existingItem.quantity + action.item.quantity,
        }

        updatedItems = [...state.items]
        updatedItems[existingItemIndex] = updatedItem
      } else {
        updatedItems = state.items.concat(action.item)
      }

      //! Update Sub Total?/**when user adds an item, I want to update the amount with total amount of the item. i.e unit price * quantity + current total. when user deletes item, I want to remove the item from items, and remove its price from total i.e current total - unit Price * quantity*/
      const total =
        action.item.unitPrice * action.item.quantity + state.subTotal

      //! Update total discount /** every product has unit discount, I want to update the totalDiscount with total discount */
      const totalDiscount =
        action.item.discount * action.item.quantity + state.total

      //? Updated Items
      return {
        items: updatedItems,
        subTotal: total,
        discount: totalDiscount,
      }
      break
    case 'REMOVE_ITEM':
      {
        // ? Item currently in cart
        const existingItem = state.items.find(
          item => item.id === action.item.id
        )
        //! Update Items
        const updatedItems = state.items.filter(
          item => item.id !== action.item.id
        )

        //! Update Sub Total?/**when user removes an item, I want to update the amount by removing the total amount of the item. i.e currrent total - unit price * quantity. when user deletes item, I want to remove the item from items, and remove its price from total i.e current total - unit Price * quantity*/
        const total =
          state.subTotal - action.item.unitPrice * action.item.quantity

        //! Update total discount /** every product has unit discount, I want to update the totalDiscount with total discount */
        const totalDiscount =
          state.discount - action.item.discount * action.item.quantity

        //? Updated Items
        return {
          items: updatedItems,
          subTotal: total,
          discount: totalDiscount,
        }
      }
      break
    default:
      throw new Error(`unhandled action type: ${action.type}`)
      break
  }
}
