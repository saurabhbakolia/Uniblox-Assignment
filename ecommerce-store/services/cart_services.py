from data.memory_store import data_store

def add_item_to_cart(user_id, item):
    if user_id not in data_store['cart']:
        data_store['cart'][user_id] = []
    data_store['cart'][user_id].append(item)
    return data_store['cart'][user_id]
