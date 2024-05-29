import express from 'express';
import { AcademicSemesterController } from './academicSemester.controller';
import validateRequest from '../../middlewares/validateRequest';
import { academicValidationSchema } from './academicSemester.validation';

const router = express.Router();

router.get('/', AcademicSemesterController.getAllAcademicSemester);

router.get(
  '/:semesterId',
  AcademicSemesterController.getSingleAcademicSemester,
);

router.post(
  '/',
  validateRequest(academicValidationSchema),
  AcademicSemesterController.createAcademicSemester,
);

export const AcademicSemesterRoutes = router;
