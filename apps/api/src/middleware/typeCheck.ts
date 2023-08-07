import { z } from "zod";

export const signupData = z.object({
  username: z.string().min(3).max(20),
  email: z.string().email().max(50),
  password: z.string().min(3).max(16),
});

export const loginData = z.object({
  username: z.string().min(3).max(20),
  password: z.string().min(3).max(16),
});

export const createProductData = z.object({
  name: z.string().min(3).max(50),
  category: z.string().min(3).max(20),
  imageLink: z.string().url(),
  price: z.number().gt(0).finite(),
  isAvailable: z.boolean(),
  rating: z.number().gte(1).lte(5).default(1),
});

export const updateProductData = z
  .object({
    name: z.string().min(3).max(50),
    category: z.string().min(3).max(20),
    imageLink: z.string().url(),
    price: z.number().gt(0).finite(),
    isAvailable: z.boolean(),
    rating: z.number().gte(1).lte(5).default(1),
  })
  .optional();
