class Palin
{
    pal(num)
    {
        let palind = num;
        let sum = 0;
        while(num>0)
            {
                let rem=num%10;
                sum=sum*10+rem;
                num=parseInt(num/10);
            
            }   
            return palind == sum?true:false;
    }
    
}
z = new Palin;
let k = parseInt(prompt("Enter the value"));

if(z.pal(k))
    {
        document.write("Enter Number is palindrom");
    }
    else{
        document.write("Enter Number not palindrom");
    }


// <--- Write a Program to check whether the entered number is a PALINDROME NUMBER or not.--->

// num=parseInt(prompt("Enter the number is palindrom or Not"));
// palind=num;
// sum=0;
// while(num>0)
// {
//     rem=num%10;
//     sum=sum*10+rem;
//     num=parseInt(num/10);

// }
// if(palind==sum)
//     {
//         document.write("Enter Number is palindrom")
//     }
//     else{
//         document.write("Enter Number not palindrom");
//     }