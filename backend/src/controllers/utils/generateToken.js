const authConfig = require('../../config/auth.json');
const jwt = require('jsonwebtoken');

/**
 * @param {{
 *  id: string
 * }} params
 */
exports.generateToken = params => {
  return jwt.sign(params, authConfig.secret, {
    expiresIn: 86400
  });
};