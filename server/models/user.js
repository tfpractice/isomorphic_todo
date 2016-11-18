import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcryptjs';

const UserSchema = new Schema({ username: { type: String, index: true },
  password: String,
  email: String,
  name: { type: String, required: false }, },
{ toObject: { virtuals: true }, toJSON: { virtuals: true } });

const User = mongoose.model('User', UserSchema);
const createUser = (newUser, cb)=> {
  bcrypt.genSalt(10, (err, salt)=> {
    if (err) {console.error('error in salting', err);}
    
    bcrypt.hash(newUser.password, salt, (err, hash)=> {
      if (err) {console.error('error in password', err);}
      
      newUser.password = hash;
      newUser.save(cb);
    });
  });
};

export default User;
