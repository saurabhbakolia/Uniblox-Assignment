import unittest
from utils.discount_utils import is_nth_order, generate_discount_code, calculate_discount

class TestDiscountUtils(unittest.TestCase):

    # Test for calculate_discount
    def test_calculate_discount(self):
        self.assertEqual(calculate_discount(100), 10)  # 10% of 100
        self.assertEqual(calculate_discount(200, 0.2), 40)  # 20% of 200

    # Test for is_nth_order
    def test_is_nth_order(self):
        self.assertTrue(is_nth_order(4, 5))  # 5th order (index 4)
        self.assertFalse(is_nth_order(3, 5))  # Not 5th order (index 3)

    # Test for generate_discount_code
    def test_generate_discount_code(self):
        code = generate_discount_code(1)
        self.assertTrue(code.startswith("DISCOUNT-"))  # Ensure it starts with "DISCOUNT-"
        self.assertEqual(len(code), 13)  # "DISCOUNT-" + 6 random characters = 13 chars

if __name__ == "__main__":
    unittest.main()
