// routes/usuarios.ts
import { Router } from "express";
import {
  createStudent,
  deleteStudent,
  getStudents,
  updateStudent,
} from "../controllers/student";
//import { create } from "domain";

const router = Router();

router.get("/students", getStudents);
router.post("/", createStudent);
router.post("/:id", updateStudent);
router.post("/id:", deleteStudent);

export default router;
