// Rock Paper Scissors class 

class RockPaperScissors{
    constructor(){
        // this.win = [];
        // this.lose = [];
        // this.tie = [];
        this.choices = ['rock', 'paper', 'scissors'];
        this.random = this.choices[Math.floor(Math.random()*3)];
        
    }

    rock (){
        switch(this.random) {
            case 'rock': return 'tie';
            case 'scissors': return 'win';
            case 'paper': return 'lose';
        }
    }

    paper (){
        switch(this.random) {
            case 'rock': return 'win';
            case 'scissors': return 'lose';
            case 'paper': return 'tie';
        }
    }

    scissors (){
        switch(this.random) {
            case 'rock': return 'lose';
            case 'scissors': return 'tie';
            case 'paper': return 'win';
        }
    }
    
    };


// new instance
var rps = new RockPaperScissors;
console.log(rps.rock());


