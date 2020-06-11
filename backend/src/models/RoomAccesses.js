const mongoose = require('mongoose');

const RoomAccessesSchema = new mongoose.Schema({
  room_id: {
    type: String,
    required: true
  },
  users: {
    type: [String],
    required: true
  }
});

module.exports = mongoose.model('RoomAccessesSchema', RoomAccessesSchema);