const express = require("express");

const router = express.Router();

const authUser = require("../middleware/auth.middleware");

const { signup, login, getProfile } = require("../controllers/auth.controller");

router.post("/signup", signup);

router.post("/login", login);

router.get("/me", authUser, getProfile);

module.exports = router;
