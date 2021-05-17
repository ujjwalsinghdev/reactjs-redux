import React from "react"
// components
import Navbar from "./components/Navbar"
import CartContainer from "./components/CartContainer"
// items
import cartItems from "./cart-items"
// redux stuff
import { createStore } from "redux"
//action
import { DECREASE, INCREASE, REMOVE, GET_TOTAL, GET_AMOUNT } from "./actions"
import reducer from "./reducer"
//redux provider
import { Provider } from "react-redux"

//intial store
const initialStore = {
  cart: cartItems,
  total: 0,
  amount: 0
}

//create store
const store = createStore(reducer, initialStore)

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer />
    </Provider>
  )
}

export default App
