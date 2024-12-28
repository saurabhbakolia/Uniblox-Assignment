from flask import Blueprint, request, jsonify
from services.checkout_service import place_order_for_user, get_cart_items

checkout_blueprint = Blueprint('checkout', __name__)

@checkout_blueprint.route('/place_order', methods=['POST'])
def place_order():
    user_id = request.json.get('user_id')

    if not user_id:
        return jsonify({"error": "user_id is required."}), 400

    result, error = place_order_for_user(user_id)
    if error:
        return jsonify({"error": error}), 400

    return jsonify({
        "message": "Order placed successfully.",
        "order": result["order"],
        "discount_applied": result["discount_applied"],
        "discount_code": result["discount_code"]
    }), 200

@checkout_blueprint.route('/view_cart', methods=['GET'])
def view_cart():
    user_id = request.args.get('user_id')

    if not user_id:
        return jsonify({"error": "user_id is required."}), 400

    cart_items = get_cart_items(user_id)
    return jsonify({"cart": cart_items}), 200
