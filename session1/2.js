function shortenMoney(number,n)
{
    if ( number <1000)
    {
        return number;
    }
    else if ((number >= 1000) && (number<1000000))
    {
        var knumber = Math.floor(number/1000*Math.pow(10,n))/Math.pow(10,n) + "K";
        return knumber;
    }
    else if ((number >= 1000000) && (number<1000000000))
    {
        var mnumber = Math.floor(number/1000000*Math.pow(10,n))/Math.pow(10,n) + "M";
        return mnumber;
    }
    else
    {
        var bnumber = Math.floor(number/1000000000*Math.pow(10,n))/Math.pow(10,n) + "B";
        return bnumber;
    }
}

console.log(shortenMoney(1234567890,3));