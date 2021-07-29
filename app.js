const express = require("express");

const testRoutes = require("./src/routes/test");
const userRoutes = require("./src/routes/user");
const errors = require("./middleware/errors");

const app = express();

// permite que a api responda em json
app.use(express.json());

// CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

// ROTAS
app.use("/test", testRoutes);
app.use("/user", userRoutes);

// Error Middleware
app.use(errors.middleware);

// conectando a api na porta existente no environment
const server = app.listen(process.env.PORT);

// inicializando o socket
const io = require("./socket").init(server);
io.on("connection", (socket) => {
  console.log("Client connected", socket);
});
