const { app } = require('@azure/functions');

app.http('GetOrders', {
  methods: ['GET'],
  authLevel: 'anonymous',
  handler: async (request, context) => {
    const demoOrders = [
      { orderId: "ORD-1001", product: "Keyboard", price: 59.99, status: "RECEIVED" },
      { orderId: "ORD-1002", product: "Mouse", price: 29.99, status: "RECEIVED" }
    ];

    return {
      status: 200,
      jsonBody: { message: "Orders list", orders: demoOrders }
    };
  }
});