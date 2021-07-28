const express = require("express");

const testController = require("../controllers/test");

// Criando Roteador dos end-points
const router = express.Router();

// GET /test/connection
router.get("/connection", testController.testApiConnection);

// POST /test/error
router.post("/error", testController.testError);

module.exports = router;
