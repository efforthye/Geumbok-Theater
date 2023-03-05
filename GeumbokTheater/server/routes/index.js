// api
import { Router } from "express";

import boxOffice from "./boxOffice.js";
import user from "./user.js";
import mypage from "./mypage.js";
// import comment from "./comment.js";

const router = Router();

router.use("/boxOffice", boxOffice);
router.use("/user", user);
router.use("/mypage", mypage);
// router.use("/comment", comment);

export default router;
