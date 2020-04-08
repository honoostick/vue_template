'use strict'
// 引入scp2模块
var client = require('scp2');
// var random = Math.random()
client.scp('./dist/', {
    "host": "",
    "username": "",
    "password": "",
    "port": "22",
    "path": ""
}, function (err) {
    if (!err) {
        console.log("上传成功")
    } else {
        console.log("上传失败", err)
    }
})
