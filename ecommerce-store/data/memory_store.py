data_store = {
    "cart": {},  # Stores cart items for each user (user_id: [items])
    "orders": [],  # Stores orders placed
    "discounts": {  # Tracks discount-related data
        "nth_order": 5,  # Apply discount for every nth order
        "current_order_count": 0,  # Tracks total orders
        "issued_codes": [],  # Stores issued discount codes
    },
}
