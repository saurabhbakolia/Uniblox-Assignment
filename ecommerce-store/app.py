from flask import Flask, jsonify
from flask_cors import CORS
from routes.cart_routes import cart_blueprint
from routes.checkout_routes import checkout_blueprint
from routes.admin_routes import admin_blueprint

app = Flask(__name__)

CORS(app)

# In-memory storage for cart, orders, and discounts
data_store = {
    "cart": {},  # Stores cart items for each user (user_id: [items])
    "orders": [], 
    "discounts": {
        "nth_order": 2,
        "current_order_count": 0,
        "issued_codes": [],
    },
}

app.register_blueprint(cart_blueprint, url_prefix='/cart')
app.register_blueprint(checkout_blueprint, url_prefix='/checkout')
app.register_blueprint(admin_blueprint, url_prefix='/admin')


# Root endpoint for health check
@app.route('/')
def health_check():
    return jsonify({"status": "Running", "message": "E-commerce API is up and running!"}), 200


@app.errorhandler(404)
def page_not_found(error):
    return jsonify({"error": "The requested resource was not found."}), 404


@app.errorhandler(500)
def internal_server_error(error):
    return jsonify({"error": "An internal server error occurred."}), 500


# Entry point
if __name__ == '__main__':
    app.run(debug=True)
