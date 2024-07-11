class Simple
{
    simpleIntrest(p,t,r)
    {
        let si = (p*t*r)/100;
        return si;
    }
}
k = new Simple;
let x = parseInt(prompt("Enter Principal value"));
let y = parseInt(prompt("Enter time value"));
let z = parseInt(prompt("ENter Rate value"));
document.write("Simple intrest = "+(k.simpleIntrest(x,y,z)));