const router = require('express').Router();
const checkAuth = require('../middleware/checkAuth');

router.get('/', checkAuth, async (req, res) => {
  const payload = {
    status: 200,
    data: null,
    error: false,
  };

  if (req.user) payload['data'] = req.user;

  res.json(payload);
});

module.exports = router;
