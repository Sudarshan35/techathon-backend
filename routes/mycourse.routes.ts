import { Router } from "express";
import { addmycourse, mycourse } from "../controller/mycourse.controller";

const router=Router();



router.get('/mycourses',mycourse);
router.post('/mycourses',addmycourse);