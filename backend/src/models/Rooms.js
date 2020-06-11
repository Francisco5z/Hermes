const mongoose = require('mongoose');

const RoomSchema = new mongoose.Schema({
  access_id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  created_by: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('RoomSchema', RoomSchema);