import './db';
import express from 'express';
import cors from 'cors';
import env from './env';

async function start() {
  try {
    const app = express();
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.get('/', (req, res) => {
      res.json({ msg: 'Good fi go' });
    });
    app.listen(env.SERVER_PORT, () =>
      console.info(`Saucem' up ${env.SERVER_PORT} times!!!`)
    );
  } catch (err) {
    console.error(err);
  }
}

start();
