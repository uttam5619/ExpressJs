require('dotenv').config()

const express = require('express')
const passport = require('passport')
const session = require('express-session')
const GoogleStrategy = require('passport-google-oauth20').Strategy

const app = express()
const port = process.env.PORT

app.use(session({
    secret:process.env.SESSION,
    resave: false,
    saveUninitialized: true,
}))

app.use(passport.initialize());
app.use(passport.session());

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
            ,
            callbackURL: 'http://localhost:3000/auth/google/callback'
        },(accessToken, refreshToken, profile, done)=>{
            return done(null, profile)
        }
    )
)

passport.serializeUser((user,done)=> done(null, user))
passport.deserializeUser((user,done)=>done(null, user))

app.get('/', (req, res)=>{
    res.send("<a href='/auth/google'>LogIn with Google</a>")
})

app.get(
    '/auth/google',
    passport.authenticate('google',{scope:['profile','email']})
)

app.get(
        '/auth/google/callback',
        passport.authenticate('google',{failureRedirect:'/'},
        (req,res)=>{
            res.redirect('/profile')
        }
    )
)

app.get('/profile', (req, res)=>{
    res.send(`welcome to the profile`)
})

app.get('/logOut', (req, res)=>{
    req.logOut(),
    res.redirect('/')
})

app.listen(port, ()=>{
    console.log(`server listining on port ${port}`)
})