class Even {
    evenNum(n) {

        if (n % 2 == 0) {
            return true;

        }
        else {
            return false;

        }
    }
}
z = new Even;
let x = parseInt(prompt("Enter the value"));
if (z.evenNum(x)) {
    document.write("Given number is Even");
}
else {
    document.write("Given number is not Even");
}
