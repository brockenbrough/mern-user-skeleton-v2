const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const { newUserValidation } = require('../models/userValidator')
const newUserModel = require('../models/userModel')

router.post('/signup', async (req, res) => {
    const { error } = newUserValidation(req.body);
    if (error) return res.status(400).send({ message: error.errors[0].message });

    const { username, email, password } = req.body

    try {
        const existing = await newUserModel.findOne({ username })
        if (existing) return res.status(409).send({ message: "Username is taken, pick another" })

        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password, salt)

        const newUser = new newUserModel({ username, email, password: hashPassword })
        const saved = await newUser.save()
        res.send(saved)
    } catch (err) {
        res.status(400).send({ message: "Error trying to create new user" })
    }
})

module.exports = router;
