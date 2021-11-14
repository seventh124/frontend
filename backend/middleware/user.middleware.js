const {user_model} = require('../models');
const joi = require('@hapi/joi');


verifyTypes = (req, res, next) => {
    const user_joi = joi.object({
        _id: joi.optional(),
        name: joi.string().required(),
        rol: joi.boolean().required(),
        state: joi.boolean().required()
    });
const {error} = user_joi.validate(req.body);

    if(error) return res.status(400).json({
        mensaje: error.details[0].message,
        error: true});
        next();
};


module.exports = Object.freeze({
    verifyTypes
});