import 'dotenv/config';
const connectionString = process.env.DB;
const password = process.env.PASSWORD;
const newConnectionString = connectionString.replace('<password>', password);

// server
import express from 'express';
const app = express();

// routes import
import tasks from './routes/tasks.js';
import notFound from './middleware/not-found.js';
import errorHandlerMiddleware from './middleware/error-handler.js';

// DATABASE
import connectDB from './db/connect.js';

// middleware
app.use(express.static('./public'));
app.use(express.json());

// routes
app.use('/api/v1/tasks', tasks);
app.use(notFound);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;
(async () => {
  try {
    await connectDB(newConnectionString);

    app.listen(port, () => {
      console.log(`The server is listening on port ${port}!`);
    });
  } catch (error) {
    console.log(error)
  }
})();