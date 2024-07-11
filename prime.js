class Prime
{
    primeNumber(num)
    {
    
        for(let i=2;i<num/2;i++)
        {
            if(num%i==0)
            {
                return false;
            }
        }
        return true; 
    }
}
z = new Prime;
let k = parseInt(prompt("Enter the value"));
if(z.primeNumber(k))
    {
            document.write("Give number is Prime:"+k);
    }   
    
    else
    {
        document.write("Give number is not Prime:"+k);
    }
