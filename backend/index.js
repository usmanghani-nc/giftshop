const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./src/config');

const app = express();

app.use(cors());
app.use('/uploads', express.static('uploads'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = config.PORT;

mongoose.connect(config.DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', () => console.log('Connected successfully'));

const homeRouter = require('./src/api/v1/router/home.router');
const giftRouter = require('./src/api/v1/router/gift.router');

app.use(homeRouter);
app.use(giftRouter);

app.listen(PORT, () => console.log(`Server Running on ${PORT}`));
