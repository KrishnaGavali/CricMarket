import { hash, compare } from "bcryptjs";
import jwt from "jsonwebtoken";

export const hashPassword = async (
  password: string,
  saltrounds: number
): Promise<string> => {
  try {
    const hashedPassword = await hash(password, saltrounds);
    return hashedPassword;
  } catch (error) {
    console.error("Error hashing password:", error);
    throw new Error("Failed to hash password");
  }
};

export const comparePasswords = async (
  password: string,
  hashedPassword: string
): Promise<boolean> => {
  try {
    const isMatch = await compare(password, hashedPassword);
    return isMatch;
  } catch (error) {
    console.error("Error comparing passwords:", error);
    throw new Error("Failed to compare passwords");
  }
};

export const getJWTToken = (
  userId: string,
  userEmail: string,
  userRole: "user" | "admin"
): string => {
  try {
    const token = jwt.sign(
      { id: userId, email: userEmail, userRole: userRole },
      process.env.JWT_SECRET || "defaultSecret",
      {
        expiresIn: "3h", // Token will expire in 1 day
      }
    );
    return token;
  } catch (error) {
    console.error("Error generating JWT token:", error);
    throw new Error("Failed to generate JWT token");
  }
};

export const verifyJWTToken = (
  token: string
): string | jwt.JwtPayload | undefined => {
  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET || "defaultSecret",
      {
        algorithms: ["HS256"],
      }
    );

    return decoded;
  } catch (error) {
    console.error("Error verifying JWT token:", error);
    throw new Error("Session expired or invalid Access");
  }
};

export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
