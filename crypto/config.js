const crypto = require('crypto');
const bcrypt = require('bcrypt');

// Generar un secret seguro
const secret = crypto.randomBytes(64).toString('hex');

// Hashear el secret para mayor seguridad
const hashedSecret = bcrypt.hashSync(secret, 10);

module.exports = hashedSecret;