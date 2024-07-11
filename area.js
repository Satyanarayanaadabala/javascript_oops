class Area
{
    areaRect(a,b)
    {
        let area = a*b;
        // document.write("Area of rectangle ="+area);
        return area;
    }
}
z = new Area;
l = parseInt(prompt("Enter the length value"));
b = parseInt(prompt("Enter breadth value"));
document.write(z.areaRect(l,b));


