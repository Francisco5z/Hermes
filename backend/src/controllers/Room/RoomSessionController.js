const RoomAccessSchema = require('../../models/RoomAccesses');
const RoomSchema = require('../../models/Rooms');
const UserSchema = require('../../models/Users');
const bcrypt = require('bcrypt');

class RoomSessionController {
  async authentication(req, res) {
    const { access_id, password } = req.body;
    const { userId } = req.params;

    const user = await UserSchema.findOne({ id: userId });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const tryAccessRoom = await RoomSchema.findOne({ access_id });
    if (!tryAccessRoom) {
      return res.status(404).json({ error: 'Access id invalid' });
    }
    
    const RoomAccess = await RoomAccessSchema.findOne({ room_id: tryAccessRoom._id });

    /**@type {string[]} */
    const CanAccessesRoomUsers = RoomAccess.users;

    if (CanAccessesRoomUsers.includes(userId)) {
      return res.status(200).json({ msg: 'You already has access' })
    }

    if (await bcrypt.compare(password, tryAccessRoom.password)) {
      await RoomAccessSchema.findOneAndUpdate({ room_id: tryAccessRoom._id }, { 
        users: [...CanAccessesRoomUsers, userId]
      });
    }

    return res.status(200).send();
  }
}

module.exports = new RoomSessionController();