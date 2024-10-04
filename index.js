function checkPalindrome() {
    let str = document.getElementById("q1").value;
    let reversed = str.split("").reverse().join("");
    if (str === reversed) {
        document.getElementById("ans1").innerHTML = "The string is a palindrome";
        } else {
            document.getElementById("ans1").innerHTML = "The string is not a palindrome";
            }   
}