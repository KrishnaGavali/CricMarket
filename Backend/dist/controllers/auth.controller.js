"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.signup = void 0;
const auth_1 = require("../utils/auth");
const User_model_1 = __importDefault(require("../models/User.model"));
// Signup function
const signup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, password, role } = req.body;
        // Validate required fields
        if (!name || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required.",
            });
        }
        // Validate email format
        if (!(0, auth_1.isValidEmail)(email)) {
            return res.status(400).json({
                success: false,
                message: "Invalid email format.",
            });
        }
        // Validate password length
        if (password.length < 6) {
            return res.status(400).json({
                success: false,
                message: "Password must be at least 6 characters long.",
            });
        }
        // Check if the user already exists
        const existingUser = yield User_model_1.default.findOne({ email });
        if (existingUser) {
            return res.status(409).json({
                success: false,
                message: "User with this email already exists.",
            });
        }
        // Hash the password
        const hashedPassword = yield (0, auth_1.hashPassword)(password, 10);
        // Create a new user instance
        const user = new User_model_1.default({
            name,
            email,
            password: hashedPassword,
            role: role || "user",
        });
        // Save the user to the database
        yield user.save();
        const token = (0, auth_1.getJWTToken)(user._id.toString(), user.email, user.role);
        // Respond with success
        const response = {
            success: true,
            message: "User registered successfully.",
            token: "Bearer " + token,
        };
        return res.status(201).json(response);
    }
    catch (error) {
        console.error("Error during signup:", error);
        return res.status(500).json({
            success: false,
            message: "An error occurred during signup. Please try again later.",
        });
    }
});
exports.signup = signup;
// Login function
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        // Validate required fields
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Email and password are required.",
            });
        }
        // Validate email format
        if (!(0, auth_1.isValidEmail)(email)) {
            return res.status(400).json({
                success: false,
                message: "Invalid email format.",
            });
        }
        // Check if the user exists
        const user = yield User_model_1.default.findOne({ email });
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found.",
            });
        }
        // Compare passwords
        const isPasswordValid = yield (0, auth_1.comparePasswords)(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({
                success: false,
                message: "Invalid credentials.",
            });
        }
        const token = (0, auth_1.getJWTToken)(user._id.toString(), user.email, user.role);
        // Respond with success
        const response = {
            success: true,
            message: "Login successful.",
            token: "Bearer " + token,
        };
        return res.status(200).json(response);
    }
    catch (error) {
        console.error("Error during login:", error);
        return res.status(500).json({
            success: false,
            message: "An error occurred during login. Please try again later.",
        });
    }
});
exports.login = login;
