const mongoose = require('mongoose');

const WarningsSchema = new mongoose.Schema({
  // O aviso
  body: {
    type: String,
    required: true
  },
  // Sala em que pertence
  room_id: {
    type: String,
    required: true
  },
  // Criado(Ou enviado) por...
  created_by: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('WarningsSchema', WarningsSchema);