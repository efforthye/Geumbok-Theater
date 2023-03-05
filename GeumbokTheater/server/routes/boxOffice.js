// /api/boxOffice
import { Router } from "express";
import axios from "axios";
const router = Router();

// /api/boxOffice/test
router.post("/test", (req, res) => {
    console.log(req.body);
    res.end();
});

// /api/boxOffice/list
router.post("/list", (req, res) => {
    // 어제 날짜
    let date = new Date();
    let year = `${date.getFullYear()}`;
    let month = (date.getMonth() + 1) < 9 ? "0" + (date.getMonth() + 1) : `${(date.getMonth() + 1)}`;
    let yesterDate = (date.getDate()) < 9 ? "0" + (date.getDate() - 1) : `${(date.getDate() - 1)}`;
    let yesterday = parseInt(year + month + yesterDate);
    console.log(yesterday);

    // API 발급 키
    const key = process.env.KOBIS_MOVIE_API_KEY;

    // 박스오피스 영화 10개 목록
    let boxOfficeList = [];

    // 어제 박스오피스 10개 목록 api에 요청
    axios.get(`https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${key}&targetDt=${yesterday}`).then(({ data }) => {
        boxOfficeList = data.boxOfficeResult.dailyBoxOfficeList;
        console.log({ list: boxOfficeList });

        // 어제의 박스오피스 목록 send
        res.send({ list: boxOfficeList });
    }).catch((err) => {
        console.error(err);
    });

});

// /api/boxOffice/movieInfo
router.post("/movieInfo", async (req, res) => {

    // 해당 영화코드로 상세 정보를 요청하면
    console.log(req.body.movieCd);
    const movieCd = req.body.movieCd;

    // API 발급 키
    const key = process.env.KOBIS_MOVIE_API_KEY;

    // 해당 영화 정보
    let movieInfo = {};

    // 해당 영화 상세 정보 요청
    await axios.get(`http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=${key}&movieCd=${movieCd}`).then(({ data }) => {
        movieInfo = data.movieInfoResult.movieInfo;
        console.log({ movie: movieInfo });

        // 해당 영화 정보 send
        res.send({ movie: movieInfo });
    }).catch((err) => {
        console.error(err);
    });

});



export default router;
