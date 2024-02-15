import { Router } from "express";
import { CourseController } from "../controller/courses.controller";

const router=Router();



router.post("/courses",CourseController);


export default router;