import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  bowlingGame:  Object
  randomRoll1 : number
  randomRoll2 : number
  randomRoll3 : number
  constructor(private http: HttpClient){
    
    this.bowlingGame = {
    };
  }
  
  ngOnInit(){
    
  }




  roll(): void{
    

     this.randomRoll1= Math.floor((Math.random() * 10) + 1);

    this.randomRoll2 = Math.floor((Math.random() * (10 - this.randomRoll1)));
     
      this.randomRoll3 = Math.floor((Math.random() * (10 - this.randomRoll2)));
     
    
    const body = {
      first: this.randomRoll1,
      second: this.randomRoll2,
      third: this.randomRoll3
    }
    this.http.post<Frames>("http://localhost:3000", body).subscribe((data) => {

      if(data.frames.length == 10){
        this.isLastFrame(data);
      }
      
      this.bowlingGame = data
    });
    

  }
  
  
  isLastFrame(data: Frames){
    
    if(!(data.frames[9].first == 10)){
      delete data.frames[9].third;

    }
    
  }

  }
  interface Frames {
    frames: Array<Rolls>
}

interface Rolls {
  first: number
  second: number
  third: number
}


