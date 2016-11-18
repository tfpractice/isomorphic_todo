import { User } from '../models';
// import cuid from 'cuid';
// import sanitizeHtml from 'sanitize-html';

/**
 * Get all users
 * @param req
 * @param res
 * @returns void
 */
export const getUsers = (req, res) =>
  User.find().sort('-dateAdded').exec()
    .then(users => res.json({ users }))
    .catch(err =>   res.status(500).send(err));

/**
 * Get a single user
 * @param req
 * @param res
 * @returns void
 */
export const getUser = (req, res) =>
    User.findOne({ id: req.params.id }).exec()
    .then(user => res.json({ user }))
    .catch(err => res.status(500).send(err));

/**
 * Save a user
 * @param req
 * @param res
 * @returns void
 */
export const addUser = (req, res) =>
  User.create(req.body)
    .then(user => res.json({ user }))
    .catch(err => {
      console.error('User model insert error', err);
      return res.status(500).send(err);
    });

export const updateUser = (req, res) =>
  User.findByIdAndUpdate(req.params.id, req.body, { new: true }).exec()
    .then(user => res.json({ user }))
    .catch(err => {
        console.log('error in User Model Update', err);
        res.status(500).send(err);
      });



/**
 * Delete a user
 * @param req
 * @param res
 * @returns void
 */
export const deleteUser = (req, res) => {
    User.findOne({ id: req.params.id }).exec((err, user) => {
        if (err) {
          console.log('DB ERROR,', err);
          
          res.status(500).send(err);
        }
        
        console.log('WEF OUND THE TASK TO REMOVE,', user);
        
        user.remove(() => {
            res.status(200).end();
          });
      });
  };
