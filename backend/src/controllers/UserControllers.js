const UsersSchema = require('../models/Users');
const RoomSchema = require('../models/Rooms');
const RoomAccesssSchema = require('../models/RoomAccesses');
const crypto = require('crypto');
const { generateToken } = require('./utils/generateToken');
const bcrypt = require('bcrypt');

class UserControllers {
  async index(req, res) {
    const users = await UsersSchema.find();

    users.forEach(user => {
      user.password = undefined;
    });

    return res.json(users);
  }

  async create(req, res) {
    const { name, email, password } = req.body;

    const user = await UsersSchema.findOne({ email });

    if (user) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const createdUser = await UsersSchema.create({
      password: await bcrypt.hash(password, 8),
      email, 
      name, 
      id: crypto.randomBytes(4).toString('HEX')
    });


    createdUser.password = undefined
    return res.json({
      user: createdUser,
      token: generateToken({
        id: createdUser._id
      })
    });
  }
  
  async delete(req, res) {
    const { id /*Not _id */ } = req.params;

    const User = await UsersSchema.findOne({ id });
    if (!User) {
      return res.status(404).json({ error: 'User not found or not exists' });
    }

    await UsersSchema.findOneAndDelete({ id });
    
    const DeletingRoom = await RoomSchema.find({ created_by: id });

    for (var room of DeletingRoom) {

      console.log(room);
      await RoomAccesssSchema.findOneAndDelete({ room_id: room._id });

      await RoomSchema.findOneAndDelete({ created_by: id });
    }

    return res.status(200).send();
  }
}

module.exports = new UserControllers();


/**
 * Movimento da Terra e da Lua (Mapa mental);
 * Pesquisa no caderno (O que é geocentrismo)
 * Correção da página: 143
 * #8C24DF 
 */

