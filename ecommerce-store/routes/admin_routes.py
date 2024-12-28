from flask import Blueprint, jsonify
from services.admin_service import get_all_orders, get_discount_details

admin_blueprint = Blueprint('admin', __name__)

@admin_blueprint.route('/orders', methods=['GET'])
def view_all_orders():
    orders = get_all_orders()
    return jsonify({"orders": orders}), 200

@admin_blueprint.route('/discounts', methods=['GET'])
def view_discount_details():
    discounts = get_discount_details()
    return jsonify(discounts), 200
