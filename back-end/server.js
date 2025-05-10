const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const cron = require("node-cron");
const userRoutes = require("./routes/userRoutes");
const User = require("./models/User");

const app = express();
const port = 5000;

// Conecta ao MongoDB
mongoose
  .connect("", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Conectado ao MongoDB"))
  .catch((err) => console.log("Erro ao conectar ao MongoDB:", err));

// Middleware
app.use(cors({ origin: "http://localhost:8080" }));
app.use(bodyParser.json());

// Usa as rotas separadas
app.use("/api", userRoutes);

// Cron job: remove usuários pendentes após 2 minutos
cron.schedule("*/2 * * * *", async () => {
  const limite = new Date(Date.now() - 2 * 60 * 1000);

  try {
    const result = await User.deleteMany({
      status: "pending",
      createdAt: { $lt: limite },
    });

    console.log(
      `[CRON] Removidos ${result.deletedCount} usuários pendentes antigos.`
    );
  } catch (err) {
    console.error("[CRON] Erro ao remover usuários pendentes:", err);
  }
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
