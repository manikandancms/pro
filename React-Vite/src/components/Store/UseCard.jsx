import { createContext, useState, useEffect } from "react";

//Create a context with default value
export const UseCard = createContext({
    cart: [],
    addItemCard: () => {},
    clearCart: () => {},
    removeItemFromCart: () => {},
    updateItemQuantity: () => {}
});

const CardProvider = ({ children }) => {
    // Initialize cart from localStorage or empty array
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    // Save cart to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    //Add item to cart
    const addItemCard = (newItem) => {
        setCart(prevCart => {
            // Check if item already exists in cart
            const existingItemIndex = prevCart.findIndex(item => item.id === newItem.id);
            
            if (existingItemIndex !== -1) {
                // Item exists, update quantity
                const updatedCart = [...prevCart];
                const existingItem = updatedCart[existingItemIndex];
                updatedCart[existingItemIndex] = {
                    ...existingItem,
                    quantity: (existingItem.quantity || 1) + (newItem.quantity || 1)
                };
                return updatedCart;
            } else {
                // Item doesn't exist, add new item
                return [...prevCart, newItem];
            }
        });
    };

    //Clear entire cart
    const clearCart = () => {
        setCart([]);
    };

    //Remove specific item from cart
    const removeItemFromCart = (itemId) => {
        setCart(prevCart => prevCart.filter(item => item.id !== itemId));
    };

    //Update item quantity
    const updateItemQuantity = (itemId, newQuantity) => {
        setCart(prevCart => 
            prevCart.map(item => 
                item.id === itemId 
                    ? { ...item, quantity: newQuantity }
                    : item
            )
        );
    };

    return (<UseCard.Provider value={{ cart, addItemCard, clearCart, removeItemFromCart, updateItemQuantity }}>     
        {children}
    </UseCard.Provider>);
}

export default CardProvider