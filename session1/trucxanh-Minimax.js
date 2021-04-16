var game = document.createElement("div");
document.body.appendChild(game);
// game.style.position = "relative";


var text = document.createElement("div");
text.innerHTML = "score: 1000";
text.style.zIndex = 99;
text.style.position = "relative";
game.appendChild(text);

var bg = createBg("./img/trucxanh_bg.jpg", 0, 0);


function createBg(src, top, left, width, height) {
    // var div = document.createElement("div");
    var image = document.createElement("img");
    image.src = src;
    image.style.position = "absolute";
    width && (image.style.width = width +"px");
    height && (image.style.height = height+ "px");
    image.style.top = top + "px";
    image.style.left = left + "px";
    // game.appendChild(div);
    game.appendChild(image);
    return image;
}

var div = document.createElement("div");
game.appendChild(div);
function createImage(src, top, left, width, height) {
    var album = document.createElement("div")
    var image = document.createElement("img");
    image.src = src;
    image.style.position = "absolute";
    width && (image.style.width = width +"px");
    height && (image.style.height = height+ "px");
    image.style.top = top + "px";
    image.style.left = left + "px";
    div.appendChild(album);
    album.append(image)
    return image;
    // addEventListener("click", ()=>{
    //     if ()
    // })
}

function displayImg()
{
    for (var col =0; col <4; col++)
    {
        var tc=125*col+125;
        for (var row =0; row<5 ; row++)
        {
            var tr=75*row+50;
            createImage("./img/imgback.png",tr,tc,100,50);
        }
    }
}
//displayImg()

var arr=[];

function generateArr(arr)
{
    for (let i=0; i< 10; i++)
    {
        for (let j=0; j<2; j++)
        {
            arr.push( [i,"./img/trucxanh"+ i +".jpg"] );
        }
    }
    return arr;

}

//the Fisher-Yates algorithm.

function shuffleArray(ar){
    for (let i = ar.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = ar[i];
      ar[i] = ar[j];
      ar[j] = temp;
    }
    return ar;
}

console.log(shuffleArray(generateArr(arr)));

function displayImg(ar)
{
    //var cover;
    //var result;
    for (let j = 0; j < 5; j++){
        var tr=75*j+50;
        for (let i = 0; i < 4; i++){
            var tc=125*i+125;
            createImage(ar[4*j+i][1],tr,tc,100,50);
        }
    }
}
displayImg(arr);

 
// function showResult(div){
//     if(div.addEventListener){

//     }
// }



