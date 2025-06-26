"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.io = void 0;
const express_1 = __importDefault(require("express"));
const http_1 = require("http");
const socket_io_1 = require("socket.io");
const cors_1 = __importDefault(require("cors")); // Import cors
const auth_route_1 = require("./routes/auth.route");
const server_1 = __importDefault(require("./server"));
const app = (0, express_1.default)();
const PORT = 8000;
// Enable CORS
app.use((0, cors_1.default)());
// Create an HTTP server
const httpServer = (0, http_1.createServer)(app);
// Initialize socket.io
exports.io = new socket_io_1.Server(httpServer, {
    cors: {
        origin: "*", // Allow all origins (you can restrict this to specific origins)
        methods: ["GET", "POST"], // Allowed HTTP methods
    },
});
console.log("Starting the backend server...");
app.use(express_1.default.json());
app.use("/auth", auth_route_1.authRouter);
app.get("/", (req, res) => {
    res.send("Backend is running!");
});
// Handle socket.io connections
exports.io.on("connection", (socket) => {
    console.log("A user connected");
    socket.on("disconnect", () => {
        console.log("A user disconnected");
    });
    socket.emit("SayingHello", "Hello from the server!");
});
(0, server_1.default)();
// Start the server
httpServer.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
