function missingNum (arr1,arr2)
{
    if (arr1.length==0)
    {
        return arr2;
    }
    else
    {
        for (var i=0;i<arr1.length;i++)
        {
            for (var j=0;j<arr2.length;j++)
            {
                if (arr1[i]==arr2[j])
                {
                    arr2.splice(j,1);
                }
                
            }
        }
        return arr2;
    }
}

a1= [7,2,5,3,5,3]
b1= [7,2,5,4,6,3,5,3]
console.log(missingNum(a1,b1));