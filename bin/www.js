import app from '../app.js';
import { createServer } from 'http';
import debug from 'debug';

const debugging = debug('app:server');

// 기본 포트 설정
const normalizePort = (val) => {
    const port = parseInt(val, 10);
    if (isNaN(port)) {
        return val;
    }
    if (port >= 0) {
        return port;
    }
    return false;
}


// HTTP 서버 리스닝 이벤트에 대한 이벤트 리스너.
const onListening = () => {
    const addr = server.address();
    const bind = typeof addr === 'string' ?
        'pipe ' + addr :
        'port ' + addr.port;
    debugging('Listening on ' + bind);
}

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

const server = createServer(app);

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);