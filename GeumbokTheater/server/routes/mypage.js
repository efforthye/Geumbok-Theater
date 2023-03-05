import { Router } from "express";
import cryptoJs from "crypto-js";

const router = Router();

import User from "../database/user";

// 로그인한 유저 정보 불러오기
router.post("/getUserInfo", (req, res) => {
  User.find({ userId: req.body.currUserId })
    .then((data) => {
      res.send({ userInfo: data, message: "현재 접속한 아이디의 회원정보" });
    })
    .catch((err) => {
      console.error(err);
    });
});

// 이름 변경
router.post("/changeName", (req, res) => {
  User.updateOne(
    { userId: req.body.currUserId },
    { userName: req.body.changeName }
  ).then(() => {
    User.find({ userName: req.body.changeName })
      .then(() => {
        res.clearCookie("login");
      })
      .then(() => {
        {
          const token = jwt.sign(
            {
              id: req.body.userId,
              name: req.body.changeName,
            },
            process.env.JWT_KEY,
            {
              algorithm: "HS256",
              expiresIn: "30m",
              issuer: "geumbokTheater",
            }
          );
          res.cookie("login", token, { maxAge: 1800000 });
          const { userId, changeName } = req.body;
          res.send({
            message: "이름 변경 후 쿠키 재생성 완료",
            status: 200,
            data: {
              currUserId: userId,
              currUserName: changeName,
            },
          });
        }
      })
      .catch((err) => {
        console.error(err);
      });
  });
});

// 비밀번호 변경
router.post("/changePw", (req, res) => {
  User.updateOne(
    { userId: req.body.currUserId },
    { userPw: cryptoJs.SHA256(req.body.changePw).toString() }
  )
    .then(() => {
      res.clearCookie("login");
      res.send({ message: "비밀번호 변경 후 쿠키 초기화, 재로그인 필요" });
    })
    .catch((err) => {
      console.error(err);
    });
});

// 휴대폰 번호 변경
router.post("/changePhone", (req, res) => {
  User.updateOne(
    { userId: req.body.currUserId },
    { userPhone: req.body.changePhone }
  )
    .then((data) => {
      res.send({ changePhone: data, message: "성공적으로 휴대폰번호 변경" });
    })
    .catch((err) => {
      console.error(err);
    });
});

// 이메일 변경
router.post("/changeEmail", (req, res) => {
  User.updateOne(
    { userId: req.body.currUserId },
    { userEmail: req.body.changeEmail }
  )
    .then((data) => {
      res.send({ changeEmail: data, message: "성공적으로 이메일 변경" });
    })
    .catch((err) => {
      console.error(err);
    });
});

// 주소 변경
router.post("/changeAddress", (req, res) => {
  User.updateOne(
    { userId: req.body.currUserId },
    { userAddress: req.body.changeAddress }
  )
    .then((data) => {
      res.send({ changeAddress: data, message: "성공적으로 주소 변경" });
    })
    .catch((err) => {
      console.error(err);
    });
});
