const { app } = require('@azure/functions');

app.http('CreateOrder', {
  methods: ['POST'],
  authLevel: 'anonymous',
  handler: async (request, context) => {
    const body = await request.json();

    if (!body.product || !body.price) {
      return {
        status: 400,
        jsonBody: { error: "Missing product or price" }
      };
    }

    const order = {
      orderId: body.orderId || `ORD-${Date.now()}`,
      product: body.product,
      price: body.price,
      createdAt: new Date().toISOString(),
      status: "RECEIVED"
    };

    return {
      status: 201,
      jsonBody: { message: "Order created successfully", order }
    };
  }
});