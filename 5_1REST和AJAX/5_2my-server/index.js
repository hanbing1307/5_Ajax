const express = require("express")

const app = express()

const STU_ARR = [
    {id: "1", name: "孙悟空", age: 18, gender: "男", address: "花果山"},
    {id: "2", name: "猪八戒", age: 28, gender: "男", address: "高老庄"},
    {id: "3", name: "沙悟净", age: 38, gender: "男", address: "流沙河"}
    
]
// 定义学生信息相关的路由
app.get("/students", (req, res) => {

    // 返回学生信息
    res.send(STU_ARR)
})

// 定义一个添加学生的路由
app.post("/students", (req, res) => {
    // 获取学生的信息
    req.body
})

// 定义一个删除学生信息的路由
// app.delete()

// 定义一个修改学生的路由
// app.put()

app.listen(3000, ()=>{
    console.log("服务器已经启动")
})