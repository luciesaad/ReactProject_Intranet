const express = require('express')
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser')
const port = 3010
const http  = require('http')

const users = ['user1', 'user2', 'user3']
const passwords = ['pass1', 'pass2', 'pass3']

app.use(cors())

app.use(bodyParser.json())

app.get('/users', (req, res) => res.send(users))
app.get('/passwords', (req, res) => res.send(passwords))

app.post('/home', (req, res) => {
    console.log(req.body.otherUser)
    res.send('This is post method')
})

app.listen(port, () => console.log(`App listening on port ${port}`))
