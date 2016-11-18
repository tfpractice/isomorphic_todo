import { Router } from 'express';
import { UserController } from '../controllers';
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
const router = new Router();

// passport setup
passport.use(new LocalStrategy(
  function(username, password, done){
    User.findByUserName({ username })
    .then(user =>
      user.comparePassword(password)
        .then(isValid => done(null, user))
        .catch(err => done(null, false, { message: 'Incorrect password.' })))
    .catch(done);
  }
));

passport.serializeUser((user, done)=> done(null, user.id));

passport.deserializeUser((id, done) =>
  User.findById(id, (err, user) => {
    done(err, user);
  }));

// login && set current user
router.post('/login',
 passport.authenticate('local', { successRedirect: '/',
  failureRedirect: '/login', }));

router.get('/logout', function (req, res) {
  req.logout();
  req.flash('success_msg', 'You are logged out');
  res.redirect('/users/login');
});


// Get all Users
// router.route('/users').get(UserController.getUsers);
// register new user
// router.get('/register', UserController.addUser);

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
