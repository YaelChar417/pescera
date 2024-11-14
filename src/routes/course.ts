// routes/usuarios.ts
import { Router } from "express";
import {
  createCourse,
  deleteCourse,
  getCourses,
  updateCourse,
} from "../controllers/course";
import validate from "../middlewares/validate";
import { courseSchema } from "../schemas/course";
//import { create } from "domain";

const router = Router();

router.get("/", getCourses);
router.post("/", validate(courseSchema), createCourse);
router.put("/:id", validate(courseSchema), updateCourse);
router.delete("/:id", deleteCourse);

export default router;
