# BoilerPlate-NEMB-Stack
![version](https://img.shields.io/badge/version-1.0.0-green)

🚀 BoilerPlate with Node.js + Express + MySQL + Babel in BOOSTCAMP WM 6th

## 구조
BE 개발 - controller, router, model  
FE 개발 - views  

## 실행 방법
#### 서버용(배포용)
`npm start`
#### 개발용
`npm run dev`

#### 번들링/빌드용
`npm build`
## 설정 방법
#### 패키지 설치 
```shell
npm install
```
#### 데이터 베이스 설정 `app.js`
```js
// DB 연결
const db = mySql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root'
})
```

## 오류 해결
```
Client does not support authentication protocol requested by server; consider upgrading MySQL client
```
> MySQL Installer ▶ server 옆에 reconfigure ▶ Auth 설정가서 legacy 선택 ▶ 완료 

## 참고 사이트
> https://poiemaweb.com/es6-babel-webpack-1  
> https://poiemaweb.com/es6-babel-webpack-2