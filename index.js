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
  res.json({
    name: 'Hello World!',
  });
});

app.listen(PORT, () => console.log(`Server Running on ${PORT}`));
