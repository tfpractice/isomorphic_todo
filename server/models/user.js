import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcryptjs';

const UserSchema = new Schema({ username: { type: String, index: true },
  password: { type: String, index: true },
  email: String,
  name: { type: String, required: false }, },
{ toObject: { virtuals: true }, toJSON: { virtuals: true } });

UserSchema.pre('save', function (next){
  let user = this;
   // only hash the password if it has been modified (or is new)
  if (!user.isModified('password')) return next();
  // generate a salt and hash the password using our new salt
  bcrypt.hash(user.password, 10)
    .then(hash => {user.password = hash; next();})
    .catch(next);
});

UserSchema.statics.findByUserName =  function (username){
  return this.findOne({ username }).exec();
};

UserSchema.methods.comparePassword = function(pw) {
    return bcrypt.compare(pw, this.password);
  };

const User = mongoose.model('User', UserSchema);

export default User;
