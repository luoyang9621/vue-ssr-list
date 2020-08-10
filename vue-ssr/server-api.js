const express = require('express');
const server = express();

server.all('*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
server.get('/api/getList1', (req, res) => {
    console.log('/api/getList1')
    res.send(
        [
            { name: '第一个', value: 'value值为1' },
            { name: '第二个', value: 'value值为2' },
            { name: '第3个', value: 'value值为13qweq' },
            { name: '第four个', value: 'value值为dfgs' }
        ]
    );
});

server.listen(1236, () => {
    console.log(`服务器已经启动在1236`);
});