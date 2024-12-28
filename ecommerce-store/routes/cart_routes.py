from flask import Blueprint, request, jsonify
from services.cart_services import add_item_to_cart

cart_blueprint = Blueprint('cart', __name__)

@cart_blueprint.route('/add', methods=['POST'])
def add_to_cart():
    user_id = request.json.get('user_id')
    item = request.json.get('item')

    if not user_id or not item:
        return jsonify({"error": "user_id and item are required."}), 400

    cart = add_item_to_cart(user_id, item)
    return jsonify({"message": "Item added to cart successfully.", "cart": cart}), 200
