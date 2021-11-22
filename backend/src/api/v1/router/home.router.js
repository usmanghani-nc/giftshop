const router = require('express').Router();

router.get('/', (req, res) => {
  const payload = {
    status: 200,
    data: [],
    error: false,
  };

  res.status(200).json(payload);
});

module.exports = router;
