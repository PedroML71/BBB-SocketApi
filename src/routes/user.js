const express = require("express");

const userController = require("../controllers/user");

// Criando Roteador dos end-points
const router = express.Router();

// POST /user/status/warning
router.post("/status/warning", userController.createUserWarningSignal);

module.exports = router;
