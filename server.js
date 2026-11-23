import app from "./backend/main.js";

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor Escutando na porta ${PORT}`);
});