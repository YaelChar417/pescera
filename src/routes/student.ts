// routes/usuarios.ts
import { Router } from "express";
import { getStudents } from "../controllers/student";

const router = Router();

router.get("/students", getStudents);

export default router;
