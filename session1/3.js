
function countWord(string)
{
    var count=0;
    for (var i=0;i<string.length;i++)
{
    if(string[i].toUpperCase()===string[i])
    {
        count++;
    }
}
return count+1;
}
abc=countWord("oneTwoThree");
console.log(abc);