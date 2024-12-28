import { ProductCardType } from '@/components/ecommerce-ui/ProductCard';
import React, { createContext, useContext, useState } from 'react';
import { toaster } from "@/components/ui/toaster"

interface CartItem extends ProductCardType {
    quantity: number;
}

interface CartContextType {
    cart: CartItem[];
    addToCart: (item: ProductCardType) => void;
    removeFromCart: (id: number) => void;
    clearCart: () => void;
    placeOrder: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [cart, setCart] = useState<CartItem[]>([]);
    const user_id = "12345";

    const addToCart = async (item: ProductCardType) => {
        try {
            const response = await fetch("http://127.0.0.1:5000/cart/add", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    user_id,
                    item: {
                        id: item.id,
                        name: item.name,
                        price: item.price,
                        quantity: 1
                    }
                }),
            });

            if (!response.ok) {
                throw new Error("Failed to add item to the server cart");
            }
            setCart((prevCart) => {
                const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
                if (existingItem) {
                    return prevCart.map((cartItem) =>
                        cartItem.id === item.id
                            ? { ...cartItem, quantity: cartItem.quantity + 1 }
                            : cartItem
                    );
                }
                return [...prevCart, { ...item, quantity: 1 }];
            });
            toaster.create({
                description: "Item successfully added to the cart.",
                type: "success",
            });

            console.log("Item successfully added to the server cart:", await response.json());
        } catch (error) {
            console.error("Error adding item to the server cart:", error);
            toaster.create({
                description: "Error adding item to the cart.",
                type: "error"
            });
        }
    };

    const removeFromCart = (id: number) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    };

    const clearCart = () => {
        setCart([]);
    };

    const placeOrder = async () => {
        try {
            const response = await fetch("http://127.0.0.1:5000/checkout/place_order", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    user_id,
                    address: {
                        street: "123 Main St",
                        city: "Kharagpur",
                        postal_code: "721302",
                        country: "India"
                    },
                    item: cart
                }),
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`Server responded with status: ${response.status}, details: ${errorText}`);
            }
            const data = await response.json();
            if (data.discount_applied) {
                console.log("Discount applied! Code:", data.discount_code);
                toaster.create({
                    description: `Discount applied! Order placed successfully with 10% discount.`,
                    type: "info",
                });
            } else {
                console.log("No discount applied.");
                toaster.create({
                    description: "Order placed successfully without a discount.",
                    type: "info",
                });
            }
            clearCart();
            toaster.create({
                description: "Order placed successfully!",
                type: "success",
            });
        } catch (error) {
            console.error("Error placing the order.", error);
            toaster.create({
                description: "Error placing the order.",
                type: "error"
            });
        }

    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, placeOrder }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = (): CartContextType => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
