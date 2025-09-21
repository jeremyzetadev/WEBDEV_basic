require('dotenv').config()
const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');

app.use(express.json());

//if whole program-> should be use/init from database if server reruns
let refreshTokens = []

app.post('/token', (req,res)=>{
    const refreshToken = req.body.token;
    if(refreshToken==null) return res.sendStatus(401);
    if(!refreshTokens.includes(refreshToken)) return res.sendStatus(403);
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
        if(err) return res.sendStatus(403)
        const accessToken = generateAccessToken({name: user.name})
        res.json({accessToken: accessToken})
    })
});

app.delete('/logout', (req,res)=>{
    //if whole program-> should be in db delete token 
    refreshTokens = refreshTokens.filter((token)=>token!==req.body.token)
    res.statusCode(204);
})

// refresh token
app.post('/login',(req,res)=>{
    //Authenticate user
    const username = req.body.username
    const user = {name:username};

    const accessToken = generateAccessToken(user);
    const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET);
    res.json({accessToken:accessToken});
})

function generateAccessToken(user){
      return jwt.sign(user,process.env.ACCESS_TOKEN_SECRET, {expiresIn: '20s'});
}

app.listen(4000);
