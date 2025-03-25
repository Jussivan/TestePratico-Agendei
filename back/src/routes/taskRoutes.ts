import { Router } from 'express';
import TaskController from '../controllers/taskController';

const router = Router();

router.post('/tasks', TaskController.create);
router.get('/tasks', TaskController.getAll);
router.get('/tasks/:name', TaskController.getByName);
router.put('/tasks/:id', TaskController.update);
router.delete('/tasks/:id', TaskController.delete);

export default router;