const db = require('../model/index.model');
const { validationResult } = require('express-validator');
const user = db.user;

module.exports = {
    getAll: (req, res) => {
        user.findAll({}).then((data) => {
            res.send({ error: false, data: data });
        }).catch((err) => {
            res.send({ error: true, message: err.message });
        })
    },
    create: (req, res) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        else {
            let newUser = {
                Name: req.body.Name,
                Mobile: req.body.Mobile
            }
            user.create(newUser).then((data) => {
                res.send({ error: false, data: data });
            }).catch((err) => {
                res.send({ error: true, message: err.message });
            })
        }
    }
}