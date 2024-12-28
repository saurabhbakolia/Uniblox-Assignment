from data.memory_store import data_store
from utils.discount_utils import generate_discount_code

def place_order_for_user(user_id):
    cart_items = data_store['cart'].get(user_id, [])
    if not cart_items:
        return None, "Cart is empty."

    # Create and store the order
    order = {"user_id": user_id, "items": cart_items}
    data_store['orders'].append(order)
    data_store['cart'][user_id] = []

    data_store['discounts']['current_order_count'] += 1
    order_count = data_store['discounts']['current_order_count']
    nth_order = data_store['discounts']['nth_order']

    discount_applied = order_count % nth_order == 0
    discount_code = None
    if discount_applied:
        discount_code = generate_discount_code(order_count)
        data_store['discounts']['issued_codes'].append(discount_code)

    return {
        "order": order,
        "discount_applied": discount_applied,
        "discount_code": discount_code
    }, None

def get_cart_items(user_id):
    return data_store['cart'].get(user_id, [])
