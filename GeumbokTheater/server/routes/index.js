// api
import { Router } from "express";

import boxOffice from "./boxOffice.js";
// import comment from "./comment.js";

const router = Router();

router.use("/boxOffice", boxOffice);
// router.use("/comment", comment);

export default router;
