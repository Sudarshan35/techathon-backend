import { Request, Response } from "express";
import courseModel from "../models/course.model";
import { exitCode } from "process";

export const homeController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const response = await courseModel.find();
    res.status(200).json({
      success: true,
      data: response,
      message: "Data retrieved successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      data: "internal server error",
      message: "cant retrieve data from database",
    });
  }
};

export const CourseController = async (req: Request, res: Response) => {
    try {
      const {
        course_name,
        image_url,
        tutor_name,
        description,
        category,
        domain,
        email_id
      } = req.body;
  
      if (!course_name || !image_url || !tutor_name || !domain || !description || !category || !email_id) {
        return res.status(401).json({
          success: false,
          data: "bad request",
          message: "field is empty"
        });
      }
  
      console.log(course_name, image_url, tutor_name, description, category, domain);
  
      const response = await courseModel.create({
        course_name,
        image_url,
        tutor_name,
        description,
        category,
        domain,
        email_id
      });
  
      res.status(200).json({
        success: true,
        data: response,
        message: "course created successfully"
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        success: false,
        data: "internal server error",
        message: "an error occurred while creating the course"
      });
    }
  };
  