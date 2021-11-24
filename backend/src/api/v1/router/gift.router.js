const router = require('express').Router();
const GiftMode = require('../model/gift-model');

router.get('/gift', async (req, res) => {
  const payload = {
    status: 200,
    payload: [],
    error: false,
  };

  try {
    const gifts = await GiftMode.find({});

    payload['payload'] = gifts;

    console.log(payload);

    res.json(payload);
  } catch (e) {
    payload['status'] = 301;
    payload['error'] = e.message;
    res.json(payload);
  }
});

router.post('/gift', async (req, res) => {
  const payload = {
    status: 200,
    payload: [],
    error: false,
  };

  try {
    const { category, title, description, price, img } = req.body;

    const instanse = new GiftMode({ category, title, description, price, img });

    await instanse.save();

    payload['payload'] = {
      text: 'Save Document',
      save: true,
    };

    res.json(payload);
  } catch (e) {
    console.log('post /gifts', e.message);

    payload['status'] = 301;
    payload['error'] = e.message;

    res.json(payload);
  }
});

module.exports = router;
