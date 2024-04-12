import express from 'express';
import cors from 'cors';

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

const port = 3000;

app.listen(port, function (error) {
  if (error) {
    // console.log(error);
  } else {
    console.log(`Le serveur a bien démarré sur le port ${port}`);
  }
  //   console.log('Erreur lors du lancement du serveur', error);
});
app.get('/', function (req, res) {
  res.send(console.log('ok'));
});

app.get('/users', function (req, res) {
  res.send({ id: 1, name: 'toto', test: 4, firstName: 'tata' });
});

app.post('/users', async function (req, res) {
  // req.body = { test: 1 };
  // console.log(req.body);
  const user = req.body;

  res.status(201).send(req.body);
  console.log(user);
});
