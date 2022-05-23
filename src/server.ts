import express from 'express';
import cors from 'cors';

import routes from './routes';
import logRequests from './middleware/log';

const app = express();

app.use(express.json());
app.use(cors());
app.use(logRequests);
app.use(routes);

app.listen(process.env.PORT);
