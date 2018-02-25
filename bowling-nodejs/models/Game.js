module.exports = class Game {
    
    constructor(name){
      this.frames = [];
      
    }
    roll(firstRoll,secondRoll,thirdRoll){
        if(this.frames.length >= 0  && this.frames.length < 10){
        this.frames.push({
            "first": firstRoll,
            "second": secondRoll,
            "third": thirdRoll,
            "score": firstRoll + secondRoll
            
        })
        this.calculateFrame();            
        }

    }



    getScore(){
        return this.frames[this.frames.length -1].score;
    }


    calculateFrame(){
        if(this.frames.length == 10){
            this.isLastFrame();
        }
            
        
        if(this.frames.length > 1 && this.frames.length < 10){
            if(this.isPrevOpen()){
                this.addOpen();
            }
            if(this.isPrevSpare()){
                this.addSpare();
            }
            if(this.isPrevStrike()){
                this.addStrike();
            }     
        }
    }
    isLastFrame(){
        
        
       
        if(this.currentFrame().first == 10){
            this.addOpen();
            this.currentFrame().score += this.currentFrame().third;
        }
        if(this.currentFrame().first + this.currentFrame().second == 10 && this.currentFrame().second > 0){
            this.addOpen();
            this.currentFrame().score += this.currentFrame().third
           console.log('this current frame ' + this.currentFrame().score)
        }
        if(this.currentFrame().first + this.currentFrame().second < 10 ){
            this.addOpen();        
        }


    }
    currentFrame(){
        return this.frames[this.frames.length -1];
    }

    previousFrame(){
        return this.frames[this.frames.length - 2];
    }

    addStrike(){
        var calculateStrike = this.currentFrame().first + this.currentFrame().second
        
        this.previousFrame().score = this.previousFrame().score + calculateStrike;
        this.currentFrame().score = this.previousFrame().score + calculateStrike;

    }

    addOpen(){
        //[first: 2, second 4, score 6] [first : 4, second: 2, score: previousScore + current first and current]
        this.currentFrame().score = this.previousFrame().score + this.currentFrame().first + this.currentFrame().second;
    
    }

    addSpare(){
        
        var calculateSpare = this.currentFrame().first

        this.previousFrame().score = this.previousFrame().score + calculateSpare
        this.currentFrame().score = this.previousFrame().score + calculateSpare + this.currentFrame().second;
    }
    isPrevSpare(){
        // Checks if the previous frame is a spare
        return (this.frames[this.frames.length -2].first + this.frames[this.frames.length -2].second == 10) && this.frames[this.frames.length -2].second > 0; 
    }

    isPrevOpen(){
        // Checks if the previous frame is open
        return (this.frames[this.frames.length -2].first +  this.frames[this.frames.length -2].second != 10);
    }

    isPrevStrike(){
        return(this.frames[this.frames.length - 2].first == 10 && this.frames[this.frames.length - 2].second == 0);
    }



  }