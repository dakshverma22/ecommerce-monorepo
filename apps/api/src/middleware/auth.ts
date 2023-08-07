import { JwtPayload } from "./../../../../node_modules/@types/jsonwebtoken/index.d";
import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

const adminSecret = "adminSecret";
const userSecret = "userSecret";

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const authHeader = req.headers["authorization"];
    const token = authHeader?.split(" ")[1];
    if (!token) {
      return res.sendStatus(403);
    } else {
      const payload = jwt.verify(token, adminSecret);
      if (typeof payload === "string") {
        return res.sendStatus(403);
      }
      req.headers["username"] = payload.username;
      return next();
    }
  } catch (error) {
    return res.sendStatus(500);
  }
};
