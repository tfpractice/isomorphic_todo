import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcryptjs';

const UserSchema = new Schema({ username: { type: String, index: true },
  password: String,
  email: String,
  name: { type: String, required: false }, },
{ toObject: { virtuals: true }, toJSON: { virtuals: true } });

UserSchema.pre('save', function (next){
  let user = this;
   // only hash the password if it has been modified (or is new)
  if (!user.isModified('password')) return next();
  // generate a salt and hash the password using our new salt
  Promise.resolve(bcrypt.hash(user.password, 10))
  .then(hash=> {user.password = hash;    next();})
  .catch(next);
});

const User = mongoose.model('User', UserSchema);

UserSchema.statics.findByUserName =  function (username) {
  return this.findOne({ username }).exec();
};

// UserSchema.statics.comparePassword = (submitted, hash, cb)=> {
//   bcrypt.compare(submitted, hash).then(isValid=>cb(null, isValid))
//   .catch(err => { throw err;});
// };

// UserSchema.methods.findSimilarTypes = function(cb) {
  // return this.model('Animal').find({ type: this.type }, cb);
// };
export default User;
