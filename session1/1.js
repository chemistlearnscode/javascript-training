function formatMoneyString(number)
{
    var num2string = number.toString(); //chuyen so thanh chuoi
    var str=num2string.split("."); //tach phan nguyen va phan thap phan
    var intstr = str[0]; //phan nguyen
    var decstr = str[1]; //phan thap phan
    var j =(j=intstr.length)>3 ? j%3 : 0; //tach phan nguyen thanh 2 phan
    var headstring = intstr.slice(0,j);
    if (j!=0)
    {
        var head = headstring +",";
    }
    else
    {
        head = "";
    }
    var intailstring = intstr.slice(j);
    var tailstring="";
    for (var i=0;i<intailstring.length;i++)
    {
        if ((i%3==0) && (i!=0))
        {
            tailstring += ","+intailstring[i];
        }
        else
        {
            tailstring += intailstring[i];
        }
    }
    var finalstring
    if (decstr != null)
    {
            return finalstring = head + tailstring + "." + decstr.toString();
        
    }
    else
    {
        return finalstring = head + tailstring;
    }
}

console.log(formatMoneyString(12456.789));