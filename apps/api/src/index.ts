import express from "express";
import bodyParser from "body-parser";

import connect from "./config/db";
import adminRouter from "./routes/admin";
import userRouter from "./routes/user";

// Initialise express app
const app = express();

// Connect with mongodb
connect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routers
app.use("/admin", adminRouter);
app.use("/user", userRouter)

const PORT: number = 3000;

app.listen(PORT, () => {
  console.log(`App running on port ${PORT} `);
});
