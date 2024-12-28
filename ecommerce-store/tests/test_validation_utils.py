# test/test_validation_utils.py

import unittest
from utils.validation_utils import validate_user_id, validate_item, validate_discount_code

class TestValidationUtils(unittest.TestCase):

    # Test for validate_user_id
    def test_validate_user_id(self):
        self.assertTrue(validate_user_id("user123"))  # Valid user ID
        self.assertFalse(validate_user_id(""))  # Empty string
        self.assertFalse(validate_user_id(123))  # Invalid type (not a string)
        self.assertFalse(validate_user_id(None))  # None value

    # Test for validate_item
    def test_validate_item(self):
        valid_item = {"name": "Laptop", "price": 1000}
        invalid_item_1 = {"name": "Laptop", "price": "1000"}  # Price is a string
        invalid_item_2 = {"name": "Laptop"}  # Missing price key
        invalid_item_3 = {"price": 1000}  # Missing name key
        self.assertTrue(validate_item(valid_item))  # Valid item
        self.assertFalse(validate_item(invalid_item_1))  # Invalid item (price is a string)
        self.assertFalse(validate_item(invalid_item_2))  # Invalid item (missing price)
        self.assertFalse(validate_item(invalid_item_3))  # Invalid item (missing name)

    # Test for validate_discount_code
    def test_validate_discount_code(self):
        issued_codes = ["DISCOUNT-ABC123", "DISCOUNT-XYZ789"]
        self.assertTrue(validate_discount_code("DISCOUNT-ABC123", issued_codes))  # Code exists
        self.assertFalse(validate_discount_code("DISCOUNT-INVALID", issued_codes))  # Code doesn't exist

if __name__ == "__main__":
    unittest.main()
