const RoomSchema = require('../../models/Rooms');
const RoomAccessSchema = require('../../models/RoomAccesses');
const crypto = require('crypto');
const bcrypt = require('bcrypt');

class RoomControllers {
  async index(req, res) {
    const rooms = await RoomSchema.find();

    rooms.forEach(room => {
      room.password = undefined;
    });

    return res.json(rooms);
  }

  async show(req, res) {
    const { room_id } = req.params
    const { content } = req.query;

    if (content === 'room_access') {
      const response = await RoomAccessSchema.find();
      
      if (!response) {
        return res.status(404).json({ erorr: 'Room Access not found' });
      }

      return res.json(response);
    }

    let referenceRoom;
    try {
      referenceRoom = await RoomSchema.findById(room_id);

      referenceRoom.password = undefined;
    } catch (err) {
      if (err.name === 'CastError') {
        return res.status(404).json({ error: 'Room not found' });
      }
    }

    return res.status(200).json(referenceRoom);
  }

  async create(req, res) {
    const { password, name } = req.body;
    const { userId } = req.params;

    const created_room = await RoomSchema.create({
      name,
      password: String(await bcrypt.hash(password, 8)),
      access_id: String(crypto.randomBytes(4).toString('HEX')),
      created_by: userId
    });

    await RoomAccessSchema.create({
      room_id: created_room._id,
      users: [userId]
    });

    return res.json({ access_id: created_room.access_id});
  }
  
  async delete(req, res) {
    const { room_id } = req.params;

    await RoomSchema.findByIdAndDelete(room_id);
    await RoomAccessSchema.findOneAndDelete(room_id);
    return res.status(204).send();
  }
}

module.exports = new RoomControllers();