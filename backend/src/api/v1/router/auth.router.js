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
    const user = await UserModel.findOne({ email });
    if (user) {
      const userPasswordCompare = await bcrypt.compare(password, user.password);

      if (userPasswordCompare) {
        const token = jwt.sign(
          {
            id: user._id,
            email: user.email,
          },
          process.env.JWT_SECRETE,
        );
        payload['status'] = 202;
        payload['payload'] = {
          token,
        };
      } else {
        payload['status'] = 301;
        payload['error'] = 'Invalid email or password';
      }
    } else {
      payload['status'] = 301;
      payload['error'] = 'no user found';
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
      token,
    };
  } catch (e) {
    console.log('post /signup erre', e.message);

    payload['status'] = 301;
    payload['error'] = e.message;

    if (e.message.includes('duplicate key error collection')) {
      payload['error'] = 'Email already in use';
    }
  }

  res.json(payload);
});

module.exports = router;
