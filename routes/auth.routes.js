const router = require("express").Router();
const auth = require("../controllers/auth.controller");
const { registerValidation, loginValidation } = require("../utils/validators");
const { validationResult } = require("express-validator");

const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

router.post("/register", registerValidation, validate, auth.register);
router.post("/login", loginValidation, validate, auth.login);

module.exports = router;