const { body } = require("express-validator");

const registerValidation = [
    body("name").notEmpty().withMessage("Name is required"),
    body("email").isEmail().withMessage("Valid email is required"),
    body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters long")
];

const loginValidation = [
    body("email").isEmail().withMessage("Valid email is required"),
    body("password").notEmpty().withMessage("Password is required")
];

const recordValidation = [
    body("amount").isNumeric().withMessage("Amount must be a number"),
    body("type").isIn(["income", "expense"]).withMessage("Type must be income or expense"),
    body("category").notEmpty().withMessage("Category is required"),
    body("note").notEmpty().withMessage("Note is required")
];

module.exports = {
    registerValidation,
    loginValidation,
    recordValidation
};
