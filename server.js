'use strict'

const express = require('express')
const { Server } = require('http')
const mongoose = require('mongoose')
const socketio = require('socket.io')

const app = express()
const server = Server(app)
const io = socketio(server)

const PORT = process.env.PORT || 3000
const MONGODB_URL = process.end.MONGODB_URL || 'mongodb://localhost:27017/tictactoe'

app.set('view engine', 'pug')

app.use(express.static('public'))

app.get('/', (req,res) => res.render('index'))

mongoose.connect(MONGODB_URL, () => {
  server.listen(PORT, () => console.log(`Server listening on port: ${PORT}`))
})
