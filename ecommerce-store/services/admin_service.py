from data.memory_store import data_store

def get_all_orders():
    """Returns all placed orders."""
    return data_store['orders']

def get_discount_details():
    """Returns discount-related details."""
    return {
        "nth_order_discount": data_store['discounts']['nth_order'],
        "current_order_count": data_store['discounts']['current_order_count'],
        "issued_codes": data_store['discounts']['issued_codes']
    }
