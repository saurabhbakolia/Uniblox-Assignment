
# Uniblox Ecommerce Assignment

## Key Features

### Implemented Features
- [x] Navbar
- [x] Shopping Cart
- [x] Checkout Functionality
- [x] API Endpoints:
  - `/cart/add`
  - `/checkout/place_order`
  - `/admin/orders`
  - `/admin/discounts`

### Future Features
- [ ] Product Listing
- [ ] Admin Dashboard for Inventory Management
- [ ] Add a check button for available coupons
- [ ] Implement additional API endpoints:
  - `/auth/register` and `/auth/login` for user authentication
  - `/products` endpoints for CRUD operations on products
  - `/cart/remove/{itemId}` to enhance shopping cart functionality
  - `/orders/create` and `/orders` for user order management
  - `/discounts/{code}` and `/discounts/generate` for discount management

### Backend API Structure

### Overview
The backend for this ecommerce application is built using Python's FastAPI framework. Below is a summary of the API endpoints and their functionality.

### API Endpoints

#### 1. **Authentication**
| Method | Endpoint            | Description              |
|--------|---------------------|--------------------------|
| POST   | `/auth/register`    | Register a new user      |
| POST   | `/auth/login`       | Authenticate user        |

#### 2. **Products**
| Method | Endpoint             | Description                         |
|--------|----------------------|-------------------------------------|
| GET    | `/products`          | Fetch all products                  |
| GET    | `/products/{id}`     | Fetch a product by ID               |
| POST   | `/products`          | Add a new product (Admin only)      |
| PUT    | `/products/{id}`     | Update product details (Admin only) |
| DELETE | `/products/{id}`     | Delete a product (Admin only)       |

#### 3. **Shopping Cart**
| Method | Endpoint                | Description                       |
|--------|-------------------------|-----------------------------------|
| GET    | `/cart`                 | Fetch the user's cart             |
| POST   | `/cart/add`             | Add an item to the cart           |
| DELETE | `/cart/remove/{itemId}` | Remove an item from the cart      |

#### 4. **Orders**
| Method | Endpoint            | Description                       |
|--------|---------------------|-----------------------------------|
| POST   | `/orders/create`    | Place a new order                |
| GET    | `/orders`           | Fetch all orders for a user      |
| POST   | `/checkout/place_order` | Place an order during checkout   |

#### 5. **Admin**
| Method | Endpoint               | Description                              |
|--------|------------------------|------------------------------------------|
| GET    | `/admin/orders`        | Fetch all orders for admin              |
| POST   | `/admin/discounts`     | Manage discounts                        |

#### 6. **Discounts**
| Method | Endpoint                    | Description                       |
|--------|-----------------------------|-----------------------------------|
| GET    | `/discounts/{code}`         | Validate a discount code          |
| POST   | `/discounts/generate`       | Generate a new discount code      |
