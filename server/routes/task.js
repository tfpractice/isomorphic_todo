import { Router } from 'express';
import { TaskController } from '../controllers';
const router = new Router();

// Get all Tasks
router.route('/tasks').get(TaskController.getTasks);

// Get one task by cuid
router.route('/tasks/:cuid').get(TaskController.getTask);

router.route('/tasks/:id').patch(TaskController.updateTask);

// Add a new Task
router.route('/tasks').post(TaskController.addTask);

// Delete a task by cuid
router.route('/tasks/:id').delete(TaskController.deleteTask);

export default router;
