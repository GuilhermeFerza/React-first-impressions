const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/User");

const router = express.Router();

// Rota para criar novo usuário (etapa 1 - email e senha)
router.post("/users", async (req, res) => {
  const { email, password } = req.body;

  if (!password || password.length < 6) {
    return res.status(400).send({ message: "Password too short" });
  }

  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).send({ message: "Email already in use" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const novoUsuario = new User({
      email,
      password: hashedPassword,
      status: "pending",
    });

    await novoUsuario.save();

    res.status(201).send({
      message: "Usuário criado com sucesso! Por favor, forneça um username.",
    });
  } catch (error) {
    console.error("Erro ao criar usuário:", error);

    if (error.code === 11000) {
      return res.status(400).send({ message: "Email já está em uso" });
    }

    if (error.name === "ValidationError") {
      return res
        .status(400)
        .send({ message: "Erro de validação", error: error.message });
    }

    res.status(500).send({ message: "Erro ao criar usuário", error: error.message });
  }
});

// Rota para definir o userName (etapa 2)
router.post("/users/username", async (req, res) => {
  const { email, userName } = req.body;

  try {
    const userNameExists = await User.findOne({ userName });
    if (userNameExists) {
      return res.status(400).send({ message: "Username já está em uso" });
    }

    const user = await User.findOneAndUpdate(
      { email, status: "pending" },
      { userName, status: "active" },
      { new: true }
    );

    if (!user) {
      return res.status(404).send({ message: "Usuário não encontrado ou já foi finalizado" });
    }

    res.status(200).send({ message: "Username salvo com sucesso!" });
  } catch (error) {
    res.status(500).send({ message: "Erro ao salvar o username", error });
  }
});

module.exports = router;
