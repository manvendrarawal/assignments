const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User } = require("../db");

// User Routes
router.post('/signup', async (req, res) => {


    const username = req.body.username;
    const password = req.body.password;

    console.log(username + "  " + password);

    const createUser = await  User.create({
        username :username,
        password :password
    });

    res.json({
        msg : "User created successfully"
    }
    )

});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    const courseId = req.params.courseId;

    const username = req.headers.username;

    User.updateone({
        username :username
    },{
        purchasedCourses : {
            "$push" : courseId
        }
    })
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
});

module.exports = router