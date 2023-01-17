// /api/boxOffice
import { Router } from "express";
const router = Router();

// /api/boxOffice/test
router.post("/test", (req, res) => {
  console.log(req.body);
  res.end();
});

export default router;
