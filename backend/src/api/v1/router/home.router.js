const router = require('express').Router();
const jwt = require('jsonwebtoken');
const User = require('../model/user-model');

router.get('/', async (req, res) => {
  const { authorization } = req.headers;

  const payload = {
    status: 200,
    data: null,
    error: false,
  };

  if (authorization) {
    const token = authorization.replace('Bearer ', '');

    const decoded = jwt.verify(token, process.env.JWT_SECRETE);

    const { id } = decoded;

    const user = await User.findById(id);

    payload['data'] = user;
  }

  res.json(payload);
});

module.exports = router;
