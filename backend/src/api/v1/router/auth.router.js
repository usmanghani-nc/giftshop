const router = require('express').Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const UserModel = require('../model/user-model');

router.post('/login', async (req, res) => {
  const payload = {
    status: 200,
    payload: [],
    error: false,
  };

  const { email, password } = req.body;

  try {
    const userPasswordCompare = await bcrypt.compare(password, hash);

    if (userPasswordCompare) {
      const user = await UserModel.findOne({ email });
      if (user._id) {
        const token = jwt.sign(
          {
            id: user._id,
            email: user.email,
          },
          process.env.JWT_SECRETE,
        );

        payload['status'] = 202;
        payload['payload'] = {
          ...user,
          token,
        };
      }
    } else {
      payload['status'] = 301;
      payload['error'] = 'Invalid email or password';
    }
  } catch (e) {
    console.log('post /signup erre', e.message);

    payload['status'] = 301;
    payload['error'] = e.message;
  }

  res.json(payload);
});

router.post('/signup', async (req, res) => {
  const payload = {
    status: 200,
    payload: [],
    error: false,
  };

  const { fullName, email, password: pastext } = req.body;

  try {
    const password = await bcrypt.hash(pastext, 10);

    const instance = new UserModel({
      fullName,
      email,
      password,
    });

    const user = await instance.save();

    const token = jwt.sign(
      {
        id: user._id,
        email: user.email,
      },
      process.env.JWT_SECRETE,
    );

    payload['status'] = 202;

    payload['payload'] = {
      ...user,
      text: 'New user Added',
      signup: true,
      token,
    };
  } catch (e) {
    console.log('post /signup erre', e.message);

    payload['status'] = 301;
    payload['error'] = e.message;
  }

  res.json(payload);
});

module.exports = router;
