import { Request, Response } from "express";
import {
  SignUpBodyData,
  SignUpResponseData,
  LoginBodyData,
  LoginResponseData,
} from "../types/authRoutesTypes";
import {
  getJWTToken,
  hashPassword,
  isValidEmail,
  comparePasswords,
} from "../utils/auth";
import User from "../models/User.model";

// Signup function
export const signup = async (req: Request, res: Response): Promise<any> => {
  try {
    const { name, email, password, role }: SignUpBodyData = req.body;

    // Validate required fields
    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    // Validate email format
    if (!isValidEmail(email)) {
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
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "User with this email already exists.",
      });
    }

    // Hash the password
    const hashedPassword = await hashPassword(password, 10);

    // Create a new user instance
    const user = new User({
      name,
      email,
      password: hashedPassword,
      role: role || "user",
    });

    // Save the user to the database
    await user.save();

    const token = getJWTToken(user._id.toString(), user.email, user.role);

    // Respond with success
    const response: SignUpResponseData = {
      success: true,
      message: "User registered successfully.",
      token: "Bearer " + token,
    };

    return res.status(201).json(response);
  } catch (error) {
    console.error("Error during signup:", error);
    return res.status(500).json({
      success: false,
      message: "An error occurred during signup. Please try again later.",
    });
  }
};

// Login function
export const login = async (req: Request, res: Response): Promise<any> => {
  try {
    const { email, password }: LoginBodyData = req.body;

    // Validate required fields
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required.",
      });
    }

    // Validate email format
    if (!isValidEmail(email)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email format.",
      });
    }

    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found.",
      });
    }

    // Compare passwords
    const isPasswordValid = await comparePasswords(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials.",
      });
    }

    const token = getJWTToken(user._id.toString(), user.email, user.role);

    // Respond with success
    const response: LoginResponseData = {
      success: true,
      message: "Login successful.",
      token: "Bearer " + token,
    };

    return res.status(200).json(response);
  } catch (error) {
    console.error("Error during login:", error);
    return res.status(500).json({
      success: false,
      message: "An error occurred during login. Please try again later.",
    });
  }
};
