import { useState, useEffect } from 'react'

export const useTotalState = () => {
  const initValue = 295.95
  const [total, setTotal] = useState(initValue)
  const [cart, setCart] = useState([])

  const addToCart = obj => {
    const copy = [...cart]
    const found = cart.find(item => item.type === obj.type)
    if (found) {
      const index = cart.findIndex(
        item => item.type === found.type && item.id === found.id
      )
      copy[index] = obj
    } else {
      copy.push(obj)
    }
    setCart(copy)
  }

  const sumTotal = arr => {
    let aux = 0
    arr.forEach(item => (aux += item.price))
    console.log(aux)
    setTotal(initValue + aux)
  }

  useEffect(() => {
    console.log(cart)
    if (cart.length > 0) {
      sumTotal(cart)
    }
  }, [cart])

  return { total, addToCart }
}
