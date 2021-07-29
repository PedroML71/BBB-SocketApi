const io = require("../../socket");

// enviando um sinal de warning para o cliente
exports.createUserWarningSignal = (req, res, next) => {
  try {
    const userId = req.body.userId;

    io.getIO().emit("user", { action: "warning", userId: userId });
  
    res.status(200).json({ message: "sinal warning enviado" });
  } catch (err) {
    console.error(err);
    
    next(err);
  }
};
