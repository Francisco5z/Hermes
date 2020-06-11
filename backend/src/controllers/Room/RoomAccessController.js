const RoomAccessSchema = require('../../models/RoomAccesses');
const RoomSchema = require('../../models/Rooms');

class RoomAccessController {
  async index(req, res) {
    return res.json(await RoomAccessSchema.find());
  }

  async show(req, res) {
    const { userId } = req.params;

    var data = []

    const can_access = await RoomAccessSchema.find({ users: { $in: userId } })

    for (var access of can_access) {
      const response = await RoomSchema.findOne({ room_id: can_access.forEach(i => i.room_id) })

      response['total_users'] = 
      response.password = undefined;

      const serializedResponse = { ...response._doc, "total_users": access.users.length }

      data.push(serializedResponse);
    }

    return res.json(data);
  }

  async delete(req, res) {
    const { id } = req.params;

    await RoomAccessSchema.findByIdAndDelete(id);

    return res.status(204).send();
  }
}

module.exports = new RoomAccessController();