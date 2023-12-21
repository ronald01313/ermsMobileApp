const mongoose = require('mongoose');

const eventOrgSchema = new mongoose.Schema({
  email: {
    type: String, // Capitalize "String"
    required: true
  },
  password: {
    type: String, // Capitalize "String"
    required: true
  }
});

mongoose.model('User', eventOrgSchema);
