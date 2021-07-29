let io;

// inicializando socket.io
module.exports = {
  // funcao que inicia o socket
  init: (httpServer) => {
    io = require("socket.io")(httpServer);

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
