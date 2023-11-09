import { Router } from "express";
import catsRoutes from "./cats.js";

const router = Router();
//gets cat routes from catroutes and then combining that in router.use as a callback function, that way route is prepended automatically with "/cats"
router.get("/", (req, res) => {
  res.send("This is the api root!");
});

router.use("/cats", catsRoutes);

export default router;
