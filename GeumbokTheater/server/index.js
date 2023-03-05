import express from "express";
import session from "express-session";
import dotenv from "dotenv";
import morgan from "morgan";
import path from "path";
import cookieParser from "cookie-parser";
import cors from "cors";

import routes from "./routes/index.js";

// DB연결 모듈
// const connect = require("./database");
import connect from "./database/index.js";

// 몽고 디비 연결
connect();

dotenv.config();

const app = express();

app.use(cors({ origin: "http://localhost:3000", credentials: true }));

app.set("port", process.env.PORT || 8080);

app.use((req, res, next) => {
    if (process.env.NODE_ENV === "production") morgan("combined")(req, res, next);
    else morgan("dev")(req, res, next);
});

app.use([express.static("web"), express.json()]);

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));

app.use(
    session({
        resave: false,
        saveUninitialized: false,
        secret: process.env.COOKIE_SECRET,
        cookie: {
            httpOnly: true,
            secure: false,
        },
        name: "session-cookie",
    })
);

app.use("/api", routes);

app.listen(app.get("port"), () => {
    console.log(app.get("port") + " 서버를 열었습니다.");
});