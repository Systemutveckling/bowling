var express = require('express');
var router = express.Router();
var Game = require('../models/Game');

var bowlingGame = new Game();




for(frameIndex = 0; frameIndex < bowlingGame.frames.length;frameIndex++){
  console.log( bowlingGame.frames[frameIndex].score);
}

router.post('/', function(req, res, next) {
  const firstRoll = req.body.first; 
  const secondRoll = req.body.second;
  const thirdRoll = req.body.third;

  if(bowlingGame.frames.length < 9){
    bowlingGame.roll(firstRoll,secondRoll);
  } else {
    bowlingGame.roll(firstRoll,secondRoll,thirdRoll);
  }
  

  res.status(200).json({
    "frames": bowlingGame.frames
  })
});

module.exports = router;
