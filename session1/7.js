function randomElement(arr)
{
    var len=arr.length;
    return arr[Math.floor(Math.random()*len)];
}

abc=[1,4,8,9,7];
console.log(randomElement(abc));