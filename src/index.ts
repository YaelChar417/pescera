import DotenvFlow from "dotenv-flow"; // name export
import express from "express";
import studentRouter from "./routes/student";
import unknownResource from "./middlewares/unknown-resources";
import unknownError from "./middlewares/unknown-error"; // export default
import testRoutes from "./routes/test";
import validationError from "./middlewares/validation";

//Para poder acceder a las variables del ambiente (.env)
DotenvFlow.config();

const app = express();

// Middleware para parsear JSON
app.use(express.json());

//rutas de la api
app.use("/api/v1/student", studentRouter);

//ruta de prueba
app.use("/error", testRoutes);

// Middlewares
app.use(validationError); // error de validacion
app.use(unknownResource); // error 404

//Middleware de error
app.use(unknownError);

app.listen(process.env.SERVER_PORT, function () {
  console.log("Escuchando puerto " + process.env.SERVER_PORT);
});
