import { useEffect, useState } from "react"
import { getStoreCart } from "../utilities/fakedb"

const useCart = (products) => {
    const [cart, setCart] = useState([])
    useEffect(() => {
        const storedCart = getStoreCart()
        const saveCart = []
        for (const id in storedCart) {
            const addedProduct = products.find(product => product._id === id)
            if (addedProduct) {
                const quentity = storedCart[id]
                addedProduct.quentity = quentity
                saveCart.push(addedProduct)
            }
        }
        setCart(saveCart)
    }, [products])
    return [cart, setCart]
}
export default useCart
