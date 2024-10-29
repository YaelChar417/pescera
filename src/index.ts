import { config } from "dotenv";
import express from "express";
import studentRouter from "./routes/student";
import unknownResource from "./middlewares/unknown-resources";

//Para poder acceder a las variables del ambiente (.env)
config();

const app = express();

// Middleware para parsear JSON
app.use(express.json());

//rutas de la api
app.use("/student", studentRouter);

app.listen(process.env.SERVER_PORT, function () {
  console.log("Escuchando puerto " + process.env.SERVER_PORT);
});

// Middlewares
app.use(unknownResource);
