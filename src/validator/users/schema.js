const Joi = require('joi');

const UserPayloadSchema = Joi.object({
  username: Joi.string().min(3).max(20).required(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
  password: Joi.string()
    .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).min(6).max(30)
    .required(),
  confirmPassword: Joi.ref('password'),
});

module.exports = { UserPayloadSchema };
