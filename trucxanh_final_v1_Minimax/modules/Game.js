import { Node } from "../lib/Node.js";
import { Card } from "../modules/Card.js";
import {Sprite} from "../lib/Sprite.js";
import {Label} from "../lib/Label.js"

var ar=[];
function generateArr(){
    for (var i=0;i<=19;i++){
        var namesrc = "./img/trucxanh"+((i%10)+1)+".jpg";
        ar.push({src:namesrc,value:i%10});
    }
    return ar;
}
    
export class Game extends Node {

    init() {
        // this._initSize();
        this._initBackground();
        this._initLabel();
        this._initShowScore();
        this._shuffleArray(generateArr())
        this._initCards();
      
        this.countClick = 0;
        this.firstCard = null;
        this.secondCard = null;
        this._score=1000;
    }

    // _initSize(){
    //     this.width = 400;
    //     this.height = 400;
    //     this.elm.style.border = "1px solid red";
    // }

    // _initCards(){    
    //     let card = new Card(0, 1);
    //     this.addChild(card);
    //     card.on("mousedown", this.onClickCard.bind(this));
    // }

    _initBackground(){
        var bg = new Sprite("./img/trucxanh_bg.jpg");
        bg.width =1000;
        bg.height =700;
        this.addChild(bg);
    }

    _initLabel(){
        let label = new Label("Arial","50px","Green");
        label.text = "Score:";
        this.addChild(label);
        label.x=450;
        label.y=50;
    }

    get score(){
        return this._score;
    }

    set score(value){
        this._score=value;
        this.children[2].text=this._score;
    }

    _shuffleArray(ar){
        for (let i = ar.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = ar[i];
            ar[i] = ar[j];
            ar[j] = temp;
          }
          return ar;
    }

    _initCards(){
        var index=0;
        for (var i=0;i<4;i++){
            for(var j=0;j<5;j++){
               var card = new Card(ar[index].src,index,ar[index].value);
                card.x=j*125+150;
                card.y=i*125+100;
               this.addChild(card);
                index++;
                card.on("mousedown", this.onClickCard.bind(this));
            }
        }
        
    }

    onClickCard(evt) {
        var tl1 = gsap.timeline();
        let card = evt.target.node;
        this.countClick++;
        if(  this.countClick === 1){
            this.firstCard = card.children[0];
            var firstIndex= card.index;
            this.firstCover= card.children[1];
            this.firstCard.scaleX=0;
            tl1.to(this.firstCover,{duration:0.5, scaleX: 0});
            tl1.to(this.firstCard,{duration: 0.5, scaleX: 1});
            // this.firstCover.active=false;
        }else if(this.countClick === 2){
            // compare
            this.secondCard = card.children[0];
            var secondIndex=card.index;
            this.secondCover = card.children[1];
            // this.secondCover.active=false;
            this.secondCard.scaleX=0;
            tl1.to(this.secondCover,{duration:0.5, scaleX: 0});
            tl1.to(this.secondCard,{duration: 0.5, scaleX: 1});
            if(firstIndex!==secondIndex){
                setTimeout(()=>{
                    if(this.firstCard.value!=this.secondCard.value){
                        // this.firstCover.active=true;
                        // this.secondCover.active=true;
                        this.score=this.score-100;
                        this.firstCover.scaleX=1;
                        this.secondCover.scaleX=1;
                    } else {
                        // this.firstCard.active=false;
                        // this.secondCard.active=false;
                        gsap.to(this.firstCard,{ duration:0.5, opacity: 0,scale: 1.5});
                        gsap.to(this.secondCard, { duration: 0.5, opacity: 0, scale: 1.5});
                        this.score=this.score+500;
                    }
                    this.countClick=0;
                },1000)
            } else{
            }
        }
        // console.log(card);
        console.log(this.score);
    }

    _initShowScore(){
        let score = new Label("Arial","50px","Green");
        score.x=600;
        score.y=50;
        this.addChild(score);
        this.score=1000;
    }

}