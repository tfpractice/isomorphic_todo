import { Router } from 'express';
import { UserController } from '../controllers';
const router = new Router();

// Get all Users
// router.route('/users').get(UserController.getUsers);
// register new user
router.get('/register', UserController.addUser);

// register new user
router.post('/register', UserController.addUser);


// Get one user by id
router.route('/users/:id').get(UserController.getUser);

// Add a new User
router.route('/users').post(UserController.addUser);

// Update a User
router.route('/users/:id').patch(UserController.updateUser);

// Delete a user by id
router.route('/users/:id').delete(UserController.deleteUser);

export default router;
