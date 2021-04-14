function extensionFile(string)
{
    var splstr = string.split(".");
    return splstr[1];
}

console.log(extensionFile("img.png"));