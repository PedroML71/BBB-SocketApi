let io;

// inicializando socket.io
module.exports = {
  // funcao que inicial o socket
  init: (httpServer) => {
    io = require("socket.io")(httpServer, {
      cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
      },
    });

    return io;
  },

  // funcao que disponibiliza o socket em partes do codigo
  getIO: () => {
    if (!io) {
      throw new Error("Socket.io not initialized!");
    }

    return io;
  },
};
