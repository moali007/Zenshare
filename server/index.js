const express = require("express");
const dbConnect = require("./dbConnect");
const authRouter = require("./routers/authRouter");
const postsRouter = require("./routers/postsRouter");
const userRouter = require("./routers/userRouter");
const dotenv = require("dotenv");
dotenv.config("./.env");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const app = express();

//middlewares
app.use(express.json({ limit: "10mb" }));
app.use(morgan("common"));
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: "https://zenshare-ruby.vercel.app/login",
    // origin: "http://localhost:3000",
  })
);

app.use("/auth", authRouter);
app.use("/posts", postsRouter);
app.use("/user", userRouter);

app.get("/", (req, res) => {
  res.status(200).send();
});

const PORT = process.env.PORT || 4001;

dbConnect();
app.listen(PORT, () => {
  console.log("listening on port :", PORT);
});

//ceni20NFl53L6fZE
