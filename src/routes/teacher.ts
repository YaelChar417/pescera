// routes/teacher.ts
import { Router } from "express";
import {
  createTeacher,
  deleteTeacher,
  getTeachers,
  updateTeacher,
} from "../controllers/teacher";
import validate from "../middlewares/validate";
import { teacherSchema } from "../schemas/teacher";
//import { create } from "domain";

const router = Router();

router.get("/", getTeachers);
router.post("/", validate(teacherSchema), createTeacher);
router.put("/:id", validate(teacherSchema), updateTeacher);
router.delete("/:id", deleteTeacher);

export default router;
