// Testando Conexao
exports.testApiConnection = (req, res, next) => {
  res.status(200).json({ message: "Api Connected successfully" });
};

// Testando Resposta de Erros
exports.testError = (req, res, next) => {
  const errorToBeDisplayed = req.body.errorToBeDisplayed;

  try {
    if (errorToBeDisplayed === "422") {
      const error = new Error(
        "Erro disparado quando o cliente envia informacoes invalidas: Ex: formulario com dados invalidos!"
      );
      error.statusCode = 422;
      throw error;
    }
  } catch (err) {
    next(err);
  }
};
