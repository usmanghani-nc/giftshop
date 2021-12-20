const router = require('express').Router();
const GiftModel = require('../model/gift-model');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === 'image/jpeg' ||
    file.mimetype === 'image/png' ||
    file.mimetype === 'image/jpg'
  ) {
    cb(null, true);
  } else {
    cb(null, false);

    return cb(new Error('Only jpeg, jpg and png types allow'));
  }
};

const upload = multer({ storage, fileFilter });

router.get('/gift', async (req, res) => {
  const payload = {
    status: 200,
    payload: [],
    error: false,
  };

  try {
    const gifts = await GiftModel.find({});

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

    const instanse = new GiftModel({
      category: JSON.parse(category),
      title,
      description,
      price,
      img: req.file.path,
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

router.delete('/gift', async (req, res) => {
  const payload = {
    status: 200,
    payload: [],
    error: false,
  };

  const { id } = req.body;

  try {
    await GiftModel.findByIdAndRemove(id);

    payload['payload'] = {
      text: 'Document Deleted',
      deleted: true,
    };

    res.json(payload);
  } catch (err) {
    console.log(err);

    payload['error'] = err.message;

    res.json(payload);
  }
});

router.put('/gift', upload.single('img'), async (req, res) => {
  const payload = {
    status: 200,
    payload: [],
    error: false,
  };

  const { category, title, description, price, id, img } = req.body;

  try {
    await GiftModel.findByIdAndUpdate(id, {
      category: JSON.parse(category),
      title,
      description,
      price,
      img: req.file?.path ? req.file.path : img,
    });

    payload['payload'] = {
      text: 'Edit Document',
      save: true,
    };

    res.json(payload);
  } catch (err) {
    console.log(err);

    payload['error'] = err.message;

    res.json(payload);
  }
});

module.exports = router;
