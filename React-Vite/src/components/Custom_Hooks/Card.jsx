import { useContext } from "react"
import { UseCard } from "../Store/UseCard.jsx"

const Cardone = () =>{
    const context = useContext(UseCard);
    return context || {
        cart: [],
        addItemCard: () => {},
        clearCart: () => {},
        removeItemFromCart: () => {},
        updateItemQuantity: () => {}
    };
}

export default Cardone 