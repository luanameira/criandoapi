const express = require('express')
const users = require('./users.js')
const app = express()

app.use(express.json())

app.get('/', (req,res) => res.send("Bem vindo a minha API"))
app.get('/api/users', (req,res) => res.send(users))
app.get('/api/users/:id' ,(req,res) => {
    const getUser = users.find(user => user.id === parseInt(req.params.id))
    if (!getUser) {
        return res.status(404).send('Deu merda :(')
    }
    res.send(getUser)
})

app.post('/api/users', (req,res) => {
    const newUser = {
        id: users.length + 1,
        name: req.body.name,
        email: req.body.email
    }
    users.push(newUser)
    res.send(newUser)
})

app.listen(3000, () => console.log('Ouvindo na porta 3000...'))
