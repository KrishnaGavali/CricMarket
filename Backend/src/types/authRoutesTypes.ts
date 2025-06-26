export interface SignUpBodyData {
  name: string;
  email: string;
  password: string;
  role?: "user" | "admin";
}

export interface SignUpResponseData {
  success: boolean;
  message: string;
  token: string;
}

export interface LoginBodyData {
  email: string;
  password: string;
}

export interface LoginResponseData {
  success: boolean;
  message: string;
  token?: string;
}
