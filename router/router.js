const express = require('express')
const router = express.Router()
const student = require('./server')
// const fs = require('fs')

router.get('/', (request, response) => {
    student.read((err, data)=>{
        if(err) return console.log(err)
        response.render('index.html', {
            student: JSON.stringify(data.student)
        })
    })
})
router.get('/post', (request, response) => {
    response.render('post.html')
})
router.post('/submit', (request, response) => {
    console.log(request.body)
    student.add(request.body, (err)=> {
        if(err) return response.status(500).send('server error')
        response.redirect('/')
    })
})

module.exports = router