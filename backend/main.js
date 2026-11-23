import express from "express";
import dotenv from "dotenv";
import routes from "./Router/index.js";
import ConectaDatabase from "./Connection/ConectaDatabase.js";

dotenv.config();

const app = express();
routes(app);

try {
    await ConectaDatabase();
    console.log("Servidor conectado com o banco de dados");
} catch (error) {
    console.error("Falha ao conectar com o banco de dados:", error.message);
    process.exit(1);
}

export default app
