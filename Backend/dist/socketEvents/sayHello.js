"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("..");
__1.io.on("connection", (socket) => {
    socket.emit("SayingHello", "Hello from the server!");
    socket.emit("SayingHello", "Hello from the server!");
});
