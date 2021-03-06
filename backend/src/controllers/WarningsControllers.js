const WarningsSchema = require('../models/Warnings');
const RoomSchema = require('../models/Rooms');

class WarningsControllers {
  async index(req, res) {
    const Warnings = await WarningsSchema.find();

    return res.json(Warnings);
  }
  async show(req, res) {
    const { room_id } = req.params;

    const Warnings = await WarningsSchema.find({ room_id: room_id });

    return res.json(Warnings);
  }
  async create(req, res) {
    const { body, room_id } = req.body;
    const { userId } = req.params;

    const room = await RoomSchema.findById(room_id);

    if (!room) {
      return res.status(404).json({ error: 'Room not found' });
    }

    const InsDate = new Date(); 

    const data = {
      body, 
      room_id,
      created_by: userId,
      created_in: [InsDate.getDate(), InsDate.getMonth(), InsDate.getFullYear()]
    }

    const createdWarning = await WarningsSchema.create(data);

    if (createdWarning) {
      return res.status(204).send();
    }
    return res.status(400).json({ error: 'Could not create the warning' })
  }
  async update(req, res) {
    const { body, id } = req.body;

    if (!body) {
      return res.status(400).json({ error: 'Body field  cannot be empty.' });
    }

    const response = await WarningsSchema.findByIdAndUpdate(id, {
      body: body
    });

    return res.status(204).send();
  }
  async delete(req, res) {
    const { id } = req.params;
    
    await WarningsSchema.findByIdAndDelete(id);

    return res.status(204).send();
  }
}

module.exports = new WarningsControllers();