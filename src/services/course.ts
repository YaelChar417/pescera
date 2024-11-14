import { deleteCourse, updateCourse } from "../models/course";
import { Course } from "../interfaces/course";
import { findAllCourses, insertCourse } from "../models/course";

// Obtener todos los alumnos
export const findAll = async (limit: number, offset: number) => {
  return await findAllCourses(limit, offset);
};

export const insert = async (course: Course) => {
  return await insertCourse(course);
};

export const update = async (id: number, course: Course) => {
  return await updateCourse(id, course);
};

export const deleteById = async (id: number) => {
  return await deleteCourse(id);
};
