const WarningsSchema = require('../models/Warnings');
const RoomSchema = require('../models/Rooms');

class WarningsControllers {
  async index(req, res) {
    const Warnings = await WarningsSchema.find();

    return res.json(Warnings);
  }
  async show(req, res) {}
  async create(req, res) {
    const { body, room_id } = req.body;
    const { userId } = req.params;

    const room = await RoomSchema.findById(room_id);

    if (!room) {
      return res.status(404).json({ error: 'Room not found' });
    }

    const data = {
      body, 
      room_id,
      created_by: userId
    }

    const createdWarning = await WarningsSchema.create(data);

    if (createdWarning) {
      return res.status(204).send();
    }
    return res.status(400).json({ error: 'Could not create the warning' })
  }
  async update(req, res) {}
  async delete(req, res) {
    const { id } = req.params;
    
    await WarningsSchema.findByIdAndDelete(id);

    return res.status(204).send();
  }
}

module.exports = new WarningsControllers();