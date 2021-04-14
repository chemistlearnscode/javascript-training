function factorialNum(number)
{
    if (number>1)
    {
        return factorialNum(number-1)*number;
    }
    return number;
}

console.log(factorialNum(4));