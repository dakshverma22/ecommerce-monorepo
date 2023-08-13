import {
  loginData,
  signupData,
  createProductData,
  updateProductData,
} from "../middleware/typeCheck";
import { Router } from "express";
import jwt from "jsonwebtoken";

import Admin from "../models/admin";
import Product from "../models/product";
import { verifyToken } from "../middleware/auth";

const Secret = "adminSecret";

const adminRouter = Router();

interface IProduct {
  name: string;
  category: string;
  description: string;
  imageLink: string;
  price: number;
  isAvailable: boolean;
  rating: number;
}

// admin signup
adminRouter.post("/signup", async (req, res) => {
  try {
    const parsedData = signupData.safeParse(req.body);
    if (!parsedData.success) {
      return res.status(411).json({ message: parsedData.error });
    }
    const { username, email, password } = parsedData.data;
    let admin = await Admin.findOne({ $or: [{ username }, { email }] });
    console.log(admin);
    if (admin) {
      return res.status(403).json({ message: "admin already exists" });
    } else {
      admin = new Admin({ username, email, password });
      await admin.save();
      return res.status(200).json({ message: "admin created successfully" });
    }
  } catch (e) {
    return res.sendStatus(500);
  }
});

// admin login
adminRouter.post("/login", async (req, res) => {
  try {
    const { username, password } = req.headers;
    const parsedData = loginData.safeParse({
      username: req.headers["username"],
      password: req.headers["password"],
    });
    if (!parsedData.success) {
      return res.status(411).json({ message: parsedData.error });
    }
    const admin = await Admin.findOne({ username });
    if (admin && admin.password === password) {
      const token = jwt.sign({ username }, Secret, { expiresIn: "1h" });
      return res.status(200).json({ message: "Loggedin", token });
    } else {
      return res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    return res.sendStatus(500);
  }
});

// create product
adminRouter.post("/product", verifyToken, async (req, res) => {
  try {
    const parsedData = createProductData.safeParse(req.body);
    if (!parsedData.success) {
      return res.status(411).json({ message: parsedData.error });
    }
    const product = new Product(parsedData.data);
    await product.save();
    return res.status(200).json({ message: "Product created successfully" });
  } catch (error) {
    return res.sendStatus(500);
  }
});

// get a product
adminRouter.get("/product/:productId", verifyToken, async (req, res) => {
  try {
    const product = await Product.findById(req.params.productId);
    if (product) {
      return res.status(200).json({ product });
    } else {
      return res.status(404).json({ message: "Product with Id not found" });
    }
  } catch (error) {
    return res.sendStatus(500);
  }
});

// get all products
adminRouter.get("/products", async (req, res) => {
  try {
    const products = await Product.find({});
    return res.status(200).json({ products });
  } catch (error) {
    return res.sendStatus(500);
  }
});

// update a product
adminRouter.patch("/product/:productId", verifyToken, async (req, res) => {
  try {
    const parsedData = updateProductData.safeParse(req.body);
    if (!parsedData.success) {
      return res.status(411).json({ message: parsedData.error });
    }
    const productId = req.params.productId;
    const product = await Product.findById(productId).select("-_id __v");
    if (!product) {
      return res.status(403).json({ message: "Product not found" });
    } else {
      const updatedProduct = { ...product, ...req.body };
      await Product.findByIdAndUpdate(productId, updatedProduct);
      res.status(200).json({ message: "updated successfully" });
    }
  } catch (error) {
    return res.sendStatus(500);
  }
});

// me
adminRouter.get("/me", async (req, res) => {
  try {
    const admin = await Admin.findOne({ username: req.headers["username"] });
    if (admin) {
      return res.send(200).json({ admin });
    } else {
      return res.send(404).json({ message: "Admin not found" });
    }
  } catch (error) {
    return res.sendStatus(500);
  }
});

export default adminRouter;
