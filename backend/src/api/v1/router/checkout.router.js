const router = require('express').Router();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

router.post('/checkout', async (req, res) => {
  const payload = {
    status: 200,
    payload: [],
    error: false,
  };

  try {
    const { cart } = req.body;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',

      line_items: cart.map((el) => {
        return {
          price_data: {
            currency: 'usd',
            product_data: {
              name: el.title,
              //   images: [el.img],
            },
            unit_amount: 1000,
          },
          quantity: 1,
        };
      }),
      success_url: 'https://giftshop-mu.vercel.app?success=Payment+Success',
      cancel_url: 'https://giftshop-mu.vercel.app?cancel=Payment+Cancel',
    });

    payload['payload'] = {
      url: session.url,
    };
  } catch (err) {
    console.log(err);

    payload['error'] = err.message;
  }

  res.json(payload);
});

module.exports = router;
