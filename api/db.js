import mongoose from 'mongoose';

import env from './env';

mongoose.connect(
  `mongodb+srv://${env.DB_USER}:${env.DB_PASSWORD}@cluster0.61qx6.mongodb.net/se-july-2020`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  }
);
