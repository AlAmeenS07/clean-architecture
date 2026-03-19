import express from "express";
import userRoutes from "./interfaces/routes/user.routes";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server running ");
});

app.use("/users" , userRoutes)

app.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});