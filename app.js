import createError from 'http-errors';
import express from 'express';
import { join, resolve } from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import indexRouter from './routes/index.js';
import userRouter from './routes/users.js';

const app = express();

// 미들웨어 등록
app.set('views', join(resolve(), 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(join(resolve(), 'public')));

// 라우터 등록
app.use('/', indexRouter);
app.use('/user', userRouter);

// 404 에러 핸들러
app.use((req, res, next) => {
    next(createError(404));
});

// 에러 핸들러
app.use((err, req, res, next) => {
    // 로컬 설정, 개발 오류만 처리
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // 에러 페이지 랜더링
    res.status(err.status || 500);
    res.render('error');
});

export default app;