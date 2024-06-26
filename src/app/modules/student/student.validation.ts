import { z } from 'zod';

const userNameValidationSchema = z.object({
  firstName: z
    .string()
    .max(20, { message: 'First name cannot exceed 20 characters' }),
  middleName: z.string().optional(),
  lastName: z.string().min(1, { message: 'Last name is required' }),
});

const guardianValidationSchema = z.object({
  fatherName: z.string().trim().min(1, { message: 'Father name is required' }),
  fatherOccupation: z
    .string()
    .min(1, { message: 'Father occupation is required' }),
  fatherContactNo: z
    .string()
    .min(1, { message: 'Father contact number is required' }),
  motherName: z.string().trim().min(1, { message: 'Mother name is required' }),
  motherOccupation: z
    .string()
    .min(1, { message: 'Mother occupation is required' }),
  motherContactNo: z
    .string()
    .min(1, { message: 'Mother contact number is required' }),
});

const localGuardianValidationSchema = z.object({
  name: z.string().min(1, { message: 'Local guardian name is required' }),
  occupation: z
    .string()
    .min(1, { message: 'Local guardian occupation is required' }),
  address: z.string().min(1, { message: 'Local guardian address is required' }),
  contactNo: z
    .string()
    .min(1, { message: 'Local guardian contact number is required' }),
});

// Main Student schema
const studentValidationSchema = z.object({
  body: z.object({
    password: z.string().max(20).optional(),
    student: z.object({
      name: userNameValidationSchema,
      gender: z.enum(['male', 'female', 'other']),
      dateOfBirth: z.string().optional(),
      email: z.string().email({ message: 'Invalid email address' }),
      contactNo: z.string().min(1, { message: 'Contact number is required' }),
      emergencyContactNo: z
        .string()
        .min(1, { message: 'Emergency contact number is required' }),
      bloodGroup: z.enum(['A+', 'A-', 'AB+', 'AB-', 'B+', 'B-', 'O+', 'O-']),
      presentAddress: z
        .string()
        .min(1, { message: 'Present address is required' }),
      permanentAddress: z
        .string()
        .min(1, { message: 'Permanent address is required' }),
      guardian: guardianValidationSchema,
      localGuardian: localGuardianValidationSchema,
      admissionSemester: z.string(),
      academicDepartment: z.string(),
    }),
  }),
});

const userNameValidationUpdateSchema = z.object({
  firstName: z
    .string()
    .max(20, { message: 'First name cannot exceed 20 characters' })
    .optional(),
  middleName: z.string().optional(),
  lastName: z.string().min(1, { message: 'Last name is required' }).optional(),
});

const guardianValidationUpdateSchema = z.object({
  fatherName: z
    .string()
    .trim()
    .min(1, { message: 'Father name is required' })
    .optional(),
  fatherOccupation: z
    .string()
    .min(1, { message: 'Father occupation is required' })
    .optional(),
  fatherContactNo: z
    .string()
    .min(1, { message: 'Father contact number is required' }),
  motherName: z
    .string()
    .trim()
    .min(1, { message: 'Mother name is required' })
    .optional(),
  motherOccupation: z
    .string()
    .min(1, { message: 'Mother occupation is required' })
    .optional(),
  motherContactNo: z
    .string()
    .min(1, { message: 'Mother contact number is required' })
    .optional(),
});

const localGuardianValidationUpdateSchema = z.object({
  name: z
    .string()
    .min(1, { message: 'Local guardian name is required' })
    .optional(),
  occupation: z
    .string()
    .min(1, { message: 'Local guardian occupation is required' }),
  address: z
    .string()
    .min(1, { message: 'Local guardian address is required' })
    .optional(),
  contactNo: z
    .string()
    .min(1, { message: 'Local guardian contact number is required' })
    .optional(),
});

// Main Student schema
const studentValidationUpdateSchema = z.object({
  body: z.object({
    password: z.string().max(20).optional(),
    student: z.object({
      name: userNameValidationUpdateSchema,
      gender: z.enum(['male', 'female', 'other']).optional(),
      dateOfBirth: z.string().optional(),
      email: z.string().email({ message: 'Invalid email address' }).optional(),
      contactNo: z
        .string()
        .min(1, { message: 'Contact number is required' })
        .optional(),
      emergencyContactNo: z
        .string()
        .min(1, { message: 'Emergency contact number is required' })
        .optional(),
      bloodGroup: z
        .enum(['A+', 'A-', 'AB+', 'AB-', 'B+', 'B-', 'O+', 'O-'])
        .optional(),
      presentAddress: z
        .string()
        .min(1, { message: 'Present address is required' })
        .optional(),
      permanentAddress: z
        .string()
        .min(1, { message: 'Permanent address is required' })
        .optional(),
      guardian: guardianValidationUpdateSchema,
      localGuardian: localGuardianValidationUpdateSchema,
      admissionSemester: z.string().optional(),
      academicDepartment: z.string().optional(),
    }),
  }),
});

export { studentValidationSchema, studentValidationUpdateSchema };
