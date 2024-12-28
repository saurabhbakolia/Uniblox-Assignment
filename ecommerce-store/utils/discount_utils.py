# Utility functions for handling discounts
import random
import string
def is_nth_order(current_count, nth_order):
    return (current_count + 1) % nth_order == 0

def generate_discount_code(order_count):
    random_chars = ''.join(random.choices(string.ascii_uppercase + string.digits, k=6))
    return f"DISCOUNT-{random_chars}"

def calculate_discount(total_amount, discount_rate=0.1):
    return total_amount * discount_rate