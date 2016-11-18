import { User } from '../models';
// import cuid from 'cuid';
// import sanitizeHtml from 'sanitize-html';

/**
 * Get all users
 * @param req
 * @param res
 * @returns void
 */
export const getUsers = (req, res) => {
    User.find().sort('-dateAdded').exec((err, users) => {
        if (err) {
          res.status(500).send(err);
        }
        
        res.json({ users });
      });
  };

/**
 * Save a user
 * @param req
 * @param res
 * @returns void
 */
export const addUser = (req, res) => {
    User.create(req.body, (err, user) => {
        if (err) {
          console.log('something bad happened');
          res.status(500).send(err);
        }
        
        res.json({ user });
      });
  };
  // const createUser = (newUser, cb)=> {
  //   bcrypt.genSalt(10, (err, salt)=> {
  //     if (err) {console.error('error in salting', err);}
  //
  //     bcrypt.hash(newUser.password, salt, (err, hash)=> {
  //       if (err) {console.error('error in password', err);}
  //
  //       newUser.password = hash;
  //       newUser.save(cb);
  //     });
  //   });
  // };
export const updateUser = (req, res)=> {
  User.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, user)=> {
    if (err) {
      console.log('something bad happened', err);
      res.status(500).send(err);
    }else {
      console.log('user returns', user);
      console.log('=========UPDATED TASK ID=====', user.id);
      
      res.json({ user });
    }
  });
};
/**
 * Get a single user
 * @param req
 * @param res
 * @returns void
 */
export const getUser = (req, res) => {
    User.findOne({ cuid: req.params.cuid }).exec((err, user) => {
        if (err) {
          res.status(500).send(err);
        }
        
        res.json({ user });
      });
  };

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
