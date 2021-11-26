const router = require('express').Router();
const fs = require('fs');
const path = require('path');
const GiftMode = require('../model/gift-model');
const multer = require('multer');
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads');
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now());
  },
});

const upload = multer({ storage: storage });

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

router.post('/gift', upload.single('img'), async (req, res, next) => {
  const payload = {
    status: 200,
    payload: [],
    error: false,
  };

  try {
    const { category, title, description, price } = req.body;

    console.log(fs.readFileSync(path.join('../../../uploads/' + req.file.filename)), '????');

    const instanse = new GiftMode({
      // category: JSON.parse(category),
      // title,
      // description,
      // price,
      // img: {
      //   data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
      //   contentType: 'image/png',
      // },
    });

    await instanse.save();

    payload['payload'] = {
      text: 'Save Document',
      save: true,
    };

    res.json(payload);
  } catch (e) {
    console.log('post /gifts erre', e.message);

    payload['status'] = 301;
    payload['error'] = e.message;

    res.json(payload);
  }
});

module.exports = router;
