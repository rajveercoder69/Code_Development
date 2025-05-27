const express = require('express');
const router = express.Router();
const User = require('../model/user');
const bcrypt = require('bcryptjs');
const {
    body,
    validationResult
} = require('express-validator')
const jwt = require('jsonwebtoken')
const fetchuser = require('../middleware/fetchuser');

const sectr = 'Rajveersignvalu$da'


// Create a new user login validation and setup using:POST "npm i bcryptjs/api/auth/createUser"
router.post('/createUser', [
    body('name', 'Enter a valid name length should be greater than 3').isLength({
        min: 3
    }),
    body('email', 'Enter a valid Email').isEmail(),
    body('password', 'Password must be atleast 5 Character').isLength({ min: 5 })
], async(req, res) => {
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success, errors: errors.array() })
    }

    try {
        let user = await User.findOne({
            email: req.body.email
        })
        if (user) return res.status(200).json({
            error: "User already exists"
        })

        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt);
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secPass
        })
        const data = {
            user: {
                id: user.id
            }
        }
        const authtoken = jwt.sign(data, sectr);
        success = true;
        res.json({
            success,
            authtoken
        });

    } catch (error) {
        console.error(error.message);
        res.status(500).send(
            "some error occurred "
        )
    }
})


// Create a user login validation and setup using:POST "npm i bcryptjs/api/auth/loginUser"

router.post('/loginUser', [
    body('email', 'Enter a valid Email').isEmail(),
    body('password', 'Password cannot be blank').exists()
], async(req, res) => {
    success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success, errors: errors.array() })
    }
    const { email, password } = req.body;
    try {
        let user = await User.findOne({
            email: email
        })
        if (!user) return res.status(400).json({
            error: "Try to login with a valid credentials"
        })

        const secPass = await bcrypt.compare(password, user.password);
        if (!secPass) {
            return res.status(400).json({
                error: "Please try to login with a valid creditionals "
            })
        }
        const data = {
            user: {
                id: user.id
            }
        }
        const authtoken = jwt.sign(data, sectr);
        success = true;
        res.json({
            success,
            authtoken
        });

    } catch (error) {
        console.error(error.message);
        res.status(500).send(
            "Interval server error "
        )
    }
})

// Route 3: Get user detailing  using :POST "/api/auth/getUserDetails
router.post('/getUserDetails', fetchuser, async(req, res) => {
    try {
        const userId = req.user.id;
        const user1 = await User.findById(userId).select("-password")
        res.send(user1)
    } catch (error) {
        console.error(error.message);
        res.status(500).send(
            "Interval server error "
        )
    }

})


module.exports = router;