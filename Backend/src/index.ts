import express, { Response, Request } from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import cors from "cors"; // Import cors
import { authRouter } from "./routes/auth.route";
import connectDB from "./server";
import matchRouter from "./routes/match.route";

const app = express();
const PORT = 8000;

// Enable CORS
app.use(cors());

// Create an HTTP server
const httpServer = createServer(app);

// Initialize socket.io
export const io = new Server(httpServer, {
  cors: {
    origin: "*", // Allow all origins (you can restrict this to specific origins)
    methods: ["GET", "POST"], // Allowed HTTP methods
  },
});

console.log("Starting the backend server...");

app.use(express.json());

app.use("/auth", authRouter);
app.use("/match", matchRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Backend is running!");
});

// Handle socket.io connections
io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });

  socket.emit("SayingHello", "Hello from the server!");
});

connectDB();

// Start the server
httpServer.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
