const mongoose = require('mongoose')
// we need mongoose to create the schematics for our new document.

// this document will be used to work with the database once we recieve user information.

// below are schematics for our User document.

// "every time we send or request info from the User document,
//  please make sure these fields are included."
const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
})

// bind user document from database with this specific schema
const User = mongoose.model('User', UserSchema)

module.exports = User