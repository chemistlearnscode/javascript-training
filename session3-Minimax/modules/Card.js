import { Node } from "../lib/Node.js"
import {Sprite} from "../lib/Sprite.js"

export class Card extends Node {
    constructor(src,index, value) {
        super();
        this.src=src;
        this.index = index;
        this.value = value;

        // this._initSize();
        this._initStatic();
        this._initCover();
        
    }

    // _initSize(){
    //     this.width = 100;
    //     this.height = 100;
    // }

    _initCover(){
        var cover = new Sprite("./img/cardBg.jpg");
        cover.x=10;
        cover.y=50;
        cover.width =100;
        cover.height=100;
        cover.elm.node=this;
        this.addChild(cover);
    }

    _initStatic(){
        var img = new Sprite(this.src);
        img.x=10;
        img.y=50;
        img.value=this.value;
        img.width=100;
        img.height=100;
        this.addChild(img);
    }

    
}
