const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

// Configurações do servidor
const app = express();
const port = 5000;

// Middleware
app.use(
  cors({
    origin: "http://localhost:8080",
  })
);
app.use(bodyParser.json());

// Conectar ao MongoDB (substitua pela sua URI do MongoDB)
mongoose
  .connect(
    
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Conectado ao MongoDB"))
  .catch((err) => console.log("Erro ao conectar ao MongoDB:", err));

// Modelo de usuário
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true, // garante que o email seja único
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", userSchema, "users-base");

// Rota para criar um novo usuário
app.post("/api/users", async (req, res) => {
  const { email, password } = req.body;

  try {
    const novoUsuario = new User({ email, password });
    console.log("Salvando usuário:", novoUsuario);
    await novoUsuario.save();
    res.status(201).send({ message: "Usuário criado com sucesso!" });
  } catch (error) {
    res.status(500).send({ message: "Erro ao criar usuário", error });
  }
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
