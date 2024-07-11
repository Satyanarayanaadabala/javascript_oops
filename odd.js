class Odd {
    oddNum(n) {

        if (n % 2 !== 0) {
            return true;

        }
        else {
            return false;

        }
    }
}
z = new Odd;
let x = parseInt(prompt("Enter the value"));
if (z.oddNum(x)) {
    document.write("Given number is Odd");
}
else {
    document.write("Given number is not Odd");
}
