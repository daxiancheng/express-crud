/**
 * author: 成焕兴
 * describe: 保存学生信息
 */
const fs = require('fs')
/**
 * 查看学生信息
 */
 exports.read = function(callback){
    fs.readFile('./db/student.json', 'utf8', (err, data) => {
        if(err){
            return callback(err)
        }
        callback(null, JSON.parse(data))
    })
 }
/**
 * 新增学生
 */
 exports.add = function(params, callback){
    fs.readFile('./db/student.json', 'utf8', (err, data) => {
        if(err){
            return callback(err)
        }
        let id = exports.uuid()
        let studentData = JSON.parse(JSON.stringify(params))
        let studentAllData = JSON.parse(data)
        studentData.id = id
        studentAllData.student.push(studentData)
        fs.writeFile('./db/student.json', JSON.stringify(studentAllData), 'utf8', (err, data) => {
            if(err){
                return callback(err)
            }
            callback(null)
        })
    })
    
 }
 /**
 * 修改学生信息
 */
 exports.edit = function(params, callback){
    
}
/**
 * 删除学生信息
 */
 exports.delete = function(params, callback){
    
}
/**
 * 生成uuid
 */
 exports.uuid = function (e) {  
    e = e || 12;
    let t = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678",
    a = t.length,
    n = "";
    for (let i = 0; i < e; i++) n += t.charAt(Math.floor(Math.random() * a));
    return n
  }

