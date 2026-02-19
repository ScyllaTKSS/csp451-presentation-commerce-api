# CSP451 – Week 9 Demo  
## Serverless E-Commerce API (Azure Functions)

This project is a serverless backend API built using **Azure Functions (Node.js)** for CSP451 Week 9 Demo Presentation.

It simulates a simple e-commerce order processing system.

---

## 📌 Features

- HTTP-based REST API
- Create new orders (POST)
- Retrieve order list (GET)
- Built using Azure Functions v4 programming model
- Designed for future integration with:
  - Azure Cosmos DB
  - Azure Service Bus
  - Azure Logic Apps
  - Azure API Management

---

## 🚀 API Endpoints

### 1️⃣ Create Order
**POST** `/api/CreateOrder`

Example request body:

```json
{
  "product": "Shoes",
  "price": 120
}