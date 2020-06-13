const RoomAccessSchema = require('../../models/RoomAccesses');
const RoomSchema = require('../../models/Rooms');
const UserSchema = require('../../models/Users');

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

      response.password = undefined;

      const userInformation = await UserSchema.findOne({ id: response.created_by });
      response.created_by = userInformation.name

      const serializedResponse = { ...response._doc, "total_users": access.users.length }

      console.log(response);2

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