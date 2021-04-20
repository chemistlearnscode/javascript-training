import { Node } from "../lib/Node.js"
import {Sprite} from "../lib/Sprite.js"

export class Card extends Node {
    constructor(src,index, value) {
        super();
        this.src=src;
        this.index = index;
        this.value = value;

        //this._initSize();
        this._initCover();
        this._initStatic();
    }
    _initElement() {
        super._initElement();
    }

    // _initSize(){
    //     this.width = 300;
    //     this.height = 300;
    // }

    _initCover(){
        var cover = new Sprite("./img/cardBg.jpg");
        cover.width =200;
        cover.height=200;
        this.addChild(cover);
    }

    _initStatic(){
        var img = new Sprite(this.src);
        img.x=100;
        img.y=100;
        this.addChild(img);
    }

    
}
