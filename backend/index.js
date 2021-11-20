const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8080;

mongoose.connect(
  'mongodb+srv://usman:usman123737@cluster0.aurad.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function () {
  console.log('Connected successfully');
});

app.get('/', (req, res) => {
  const payload = {
    status: 200,
    data: [],
    error: false,
  };

  res.status(200).json(payload);
});

app.get('/categories', (req, res) => {
  const data = [
    {
      title: 'Heading',
      img: '/img/arrival.jpg',
      description: 'dada tttnm,mjyad dadadahghjjj gdthyjy fsfy',
      price: '$27',
    },
    {
      title: 'Heading',
      img: '/img/arrival.jpg',
      description: 'dada tttnm,mjyad dadadahghjjj gdthyjy fsfy',
      price: '$27',
    },
    {
      title: 'Heading',
      img: '/img/arrival.jpg',
      description: 'dada tttnm,mjyad dadadahghjjj gdthyjy fsfy',
      price: '$27',
    },
    {
      title: 'Heading',
      img: '/img/arrival.jpg',
      description: 'dada tttnm,mjyad dadadahghjjj gdthyjy fsfy',
      price: '$27',
    },
    {
      title: 'Heading',
      img: '/img/arrival.jpg',
      description: 'dada tttnm,mjyad dadadahghjjj gdthyjy fsfy',
      price: '$27',
    },
  ];
  const payload = {
    status: 200,
    payload: [],
    error: false,
  };

  const final = { ...payload, payload: data };

  res.status(200).json(final);
});

app.listen(PORT, () => console.log(`Server Running on ${PORT}`));
