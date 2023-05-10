const { check } = require("express-validator");

exports.registerValidator = [
    check("name")
        .trim()
        .notEmpty()
        .withMessage("Name is required")
        .isLength({ min: 3 })
        .withMessage("Name must be at least 3 characters long")
        .isLength({ max: 31 })
        .withMessage("Name must have at most 31 characters long"),
    check("email")
        .trim()
        .notEmpty()
        .withMessage("Email is required")
        .isEmail()
        .withMessage("Not a valid email"),
    check("password")
        .trim()
        .notEmpty()
        .withMessage("Password is required")
        .isLength({ min: 5 })
        .withMessage("Password must have at least 5 characters")
]


exports.loginvalidator = [
    check("email")
        .trim()
        .notEmpty()
        .withMessage("Email is required")
        .isEmail()
        .withMessage("Not a valid email"),
    check("password")
        .trim()
        .notEmpty()
        .withMessage("Password is required")
        .isLength({ min: 5 })
        .withMessage("Password must have at least 5 characters")
]