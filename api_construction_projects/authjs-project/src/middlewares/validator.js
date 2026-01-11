const joi = require("joi");

exports.signupSchema = joi.object({
    email: joi.string().min(6).max(60).email({ tlds: { allow: ["com", "net"] } }).required(),
  
    password: joi.string().pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{8,}$')).required(),
});

exports.loginSchema = joi.object({
    email: joi.string().min(6).max(60).email({ tlds: { allow: ["com", "net"] } }).required(),

    password: joi.string().pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{8,}$')).required(),
});