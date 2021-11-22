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
    const body = req.body;

    const instanse = new GiftMode(body);

    await instanse.save();

    payload['payload'] = 'Save Document';

    res.json(payload);
  } catch (e) {
    console.log('post /gifts', e.message);

    payload['status'] = 301;
    payload['error'] = e.message;

    res.json(payload);
  }
});

module.exports = router;
