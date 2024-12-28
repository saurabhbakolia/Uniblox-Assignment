def validate_user_id(user_id):
    return bool(user_id) and isinstance(user_id, str)

def validate_item(item):
    return isinstance(item, dict) and "name" in item and "price" in item and isinstance(item["price"], (int, float))

def validate_discount_code(code, issued_codes):
    return code in issued_codes
