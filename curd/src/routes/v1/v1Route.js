const express = require('express');
const version1Routes = express.Router()

const { signIn, signUp, signOut } = require('../../controllers/auth.controller')

version1Routes.post('/signIn', signIn)
version1Routes.post('/signUp', signUp)
version1Routes.post('/signOut',signOut)

module.exports = version1Routes