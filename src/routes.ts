import { Router } from 'express';

import RepositoriesController from '../controllers/RepositoriesController';

const routes = Router();

routes.post('/repositories/:id/like', RepositoriesController.like);
routes.post('/repositories', RepositoriesController.create);
routes.get('/repositories', RepositoriesController.list);
routes.get('/repositories/:id', RepositoriesController.show);
routes.put('/repositories/:id', RepositoriesController.update);
routes.delete('/repositories/:id', RepositoriesController.remove);

export default routes;
