import { Node } from "../lib/Node.js";
import { Card } from "../modules/Card.js";
import {Sprite} from "../lib/Sprite.js";
import {Label} from "../lib/Label.js"

var ar=[];
function generateArr(ar){
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
        this._initCards();
        
        this.countClick = 0;
        this.firstCard = null;
        this.secondCard = null;
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
        let label = new Label("Arial","20px","Green");
        label.text = "Score:";
        this.addChild(label);
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
                var card = new Card(this._shuffleArray(ar).src,index,this._shuffleArray(ar).value);
                card.x=j*125+250;
                card.y=i*125+100;
                this.addChild(card);
                index++;
                card.on("mousedown", this.onClickCard.bind(this));
            }
        }
        
    }

    onClickCard(evt) {
        this.countClick++;
        if(  this.countClick === 1){

        }else if(this.countClick === 2){
            // compare
        }
        let card = evt.target.node;
        console.log(card.index, card.value);
    }

}