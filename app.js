const express = require('express');
const app = express();
//서버 포트 번호
const port = 3000;
// 클라이언트 HTTP 요청 메소드 중 GET을 이용 'host:port'로 요청을 보내면 실행되는 라우트
app.get('/', (req, res) => {
    res.send('Hello World!');
});
//app.listen() 함수를 사용해서 서버를 실행
//클라이언트는 'host:port'로 노드 서버에 요청을 보낼 수 있음
app.listen(port, () => {
    console.log(`서버가 실행됩니다. http://localhost:${port}`);
});
//17th September 2022
//원본 소스: https://contents.premium.naver.com/codetree/funcoding/contents/220603011215368hw