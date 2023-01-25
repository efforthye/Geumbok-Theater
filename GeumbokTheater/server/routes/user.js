import { Router } from "express";
import cryptoJs from "crypto-js";
import jwt from "jsonwebtoken";

const router = Router();

import User from "../database/user";

// regist
router.post("/regist", (req, res) => {
  User.create({
    userName: req.body.userName,
    userId: req.body.userId,
    userPw: cryptoJs.SHA256(req.body.userPw).toString(),
    userPhone: req.body.userPhone,
    userEmail: req.body.userEmail,
    userAddress: req.body.userAddress,
  })
    .then((data) => {
      res.send({ userInfo: data, message: "회원가입 완료", status: 200 });
    })
    .catch((err) => {
      console.error(err);
    });
});

// login
router.post("/login", (req, res) => {
  User.findOne({
    where: { userId: req.body.loginId },
  })
    .then((data) => {
      if (data) {
        if (data.userPw === req.body.loginPw) {
          const token = jwt.sign(
            {
              id: data.userId,
              name: data.userName,
            },
            process.env.JWT_KEY,
            {
              algorithm: "HS256",
              expiresIn: "30m",
              issuer: "geumbokTheater",
            }
          );
          res.cookie("login", token, { maxAge: 1800000 });
          const { userId, userName } = data;
          res.send({
            message: "쿠키생성 완료",
            status: 200,
            data: {
              currUserId: userId,
              currUserName: userName,
            },
          });
        } else {
          res.send({ message: "잘못된 비밀번호입니다.", status: 501 });
        }
      } else {
        res.send({ message: "존재하지 않는 ID입니다.", status: 502 });
      }
    })
    .catch((err) => {
      console.error(err);
    });
});

//logout
router.post("/logout", (req, res) => {
  res.clearCookie("login");
  res.send({ message: "쿠키 삭제 완료", status: 200 });
});

export default router;
