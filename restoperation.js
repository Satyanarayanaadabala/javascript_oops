class Array
{
arrayName(name,...args)
{

    for(let i in args)
        {
            document.write(args[i]);
            document.write("<br>");
        }
    return name;
}
}
k = new Array;
let name = "satya";
let array = [10,20,30,40];
document.write(k.arrayName(name,...array));