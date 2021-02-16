const express = require('express');
const router = express.Router();
const providerControllers = require("../controllers/providerControllers");

/* เข้าสู่ระบบ */
router.post('/login', providerControllers.login);

/* สมัครสมาชิก */
router.post('/register', providerControllers.register);

module.exports = router;
