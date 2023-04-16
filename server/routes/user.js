const express = require("express")
const { signup,signin, getUsers ,getUserById, deleteUserById} = require("../controllers/user")

const router = express.Router()

router.post("/signup",signup)
router.post("/signin",signin)
router.get("/users",getUsers)
router.get("/users/:id",getUserById)
router.delete("/users/:id",deleteUserById)



module.exports = router