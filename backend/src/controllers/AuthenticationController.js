const UserSchema = require('../models/Users');
const bcrypt = require('bcrypt');
const { generateToken } = require('./utils/generateToken');

module.exports = {
  authentication: async (req, res) => {
    const { email, password } = req.body;

    const user = await UserSchema.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    
    if (!await bcrypt.compare(password, user.password)) {
      return res.status(400).send({ error: 'Invalid password' });
    }

    req.app.locals.userId = user.id;
    
    return res.json({
      user,
      token: generateToken({
        id: user.id
      })
    });
  }
}