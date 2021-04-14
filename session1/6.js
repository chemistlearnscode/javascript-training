function randomNum(min,max)
{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.round(Math.random() * (max-min) + min);
}

console.log(randomNum(2,5));