const assert = require('chai').assert;
const Game = require('../models/Game');







describe('Game',function(){
    it('[6,1] [10,0] [7,1] [10,0] [6,2] [9,0] [5,2] [9,0] [3,0] [10,10,2] should return 109 ', function(){
        var bowlingGame = new Game();
        bowlingGame.roll(6,1);
        bowlingGame.roll(10,0);
        bowlingGame.roll(7,1);
        bowlingGame.roll(10,0);
        bowlingGame.roll(6,2);
        bowlingGame.roll(9,0);
        bowlingGame.roll(5,2);
        bowlingGame.roll(9,0);
        bowlingGame.roll(3,0);
        bowlingGame.roll(10,10,2);        
        assert.equal(bowlingGame.getScore(),109);
    })
});


describe('Game',function(){
    it('[8,1] [10,0] [7,1] [8,1] [6,2] [3,6] [5,2] [9,0] [3,0] [10,5,4] should return 99 ', function(){
        var bowlingGame = new Game();
        bowlingGame.roll(8,1);
        bowlingGame.roll(10,0);
        bowlingGame.roll(7,1);
        bowlingGame.roll(8,1);
        bowlingGame.roll(6,2);
        bowlingGame.roll(3,6);
        bowlingGame.roll(5,2);
        bowlingGame.roll(9,0);
        bowlingGame.roll(3,0);
        bowlingGame.roll(10,5,4);      
        assert.equal(bowlingGame.getScore(),99);
    })
});





describe('Game',function(){
    it('[5,3] [10,0] [8,1] [5,3] [9,0] [0,6] [5,2] [9,0] [3,0] [3,7,5] should return 91 ', function(){
        var bowlingGame = new Game();
        bowlingGame.roll(5,3);
        bowlingGame.roll(10,0);
        bowlingGame.roll(8,1);
        bowlingGame.roll(5,3);
        bowlingGame.roll(9,0);
        bowlingGame.roll(0,6);
        bowlingGame.roll(5,2);
        bowlingGame.roll(9,0);
        bowlingGame.roll(3,0);
        bowlingGame.roll(5,5,4);      
        assert.equal(bowlingGame.getScore(),92);
    })
});


describe('Game',function(){
    it('[9,0] [10,0] [3,4] [2,5] [4,5] [5,5] [2,3] [5,2] [3,0] [5,3,0] should return 84 ', function(){
        var bowlingGame = new Game();
        bowlingGame.roll(9,0);
        bowlingGame.roll(10,0);
        bowlingGame.roll(3,4);
        bowlingGame.roll(2,5);
        bowlingGame.roll(4,5);
        bowlingGame.roll(5,5);
        bowlingGame.roll(2,3);
        bowlingGame.roll(5,2);
        bowlingGame.roll(3,0);
        bowlingGame.roll(5,3,0);      
        assert.equal(bowlingGame.getScore(),84);
    })
});
