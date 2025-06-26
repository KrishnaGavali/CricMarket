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
exports.isValidEmail = exports.verifyJWTToken = exports.getJWTToken = exports.comparePasswords = exports.hashPassword = void 0;
const bcryptjs_1 = require("bcryptjs");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const hashPassword = (password, saltrounds) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const hashedPassword = yield (0, bcryptjs_1.hash)(password, saltrounds);
        return hashedPassword;
    }
    catch (error) {
        console.error("Error hashing password:", error);
        throw new Error("Failed to hash password");
    }
});
exports.hashPassword = hashPassword;
const comparePasswords = (password, hashedPassword) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const isMatch = yield (0, bcryptjs_1.compare)(password, hashedPassword);
        return isMatch;
    }
    catch (error) {
        console.error("Error comparing passwords:", error);
        throw new Error("Failed to compare passwords");
    }
});
exports.comparePasswords = comparePasswords;
const getJWTToken = (userId, userEmail, userRole) => {
    try {
        const token = jsonwebtoken_1.default.sign({ id: userId, email: userEmail, userRole: userRole }, process.env.JWT_SECRET || "defaultSecret", {
            expiresIn: "3h", // Token will expire in 1 day
        });
        return token;
    }
    catch (error) {
        console.error("Error generating JWT token:", error);
        throw new Error("Failed to generate JWT token");
    }
};
exports.getJWTToken = getJWTToken;
const verifyJWTToken = (token) => {
    try {
        const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET || "defaultSecret", {
            algorithms: ["HS256"],
        });
        return decoded;
    }
    catch (error) {
        console.error("Error verifying JWT token:", error);
        throw new Error("Session expired or invalid Access");
    }
};
exports.verifyJWTToken = verifyJWTToken;
const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};
exports.isValidEmail = isValidEmail;
