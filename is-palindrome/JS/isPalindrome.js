function isPalindrome(str) {
    let i = 0;
    let j = str.length - 1;

    while (i < j) {
        if (str[i++].toLowerCase() !== str[j--].toLowerCase()) return false; }
    return true;
}

// strings to test
const str1 = "aba";
const str2 = "Abba";
const str3 = "Bob";

isPalindrome(str1) ? console.log("Is palindrome") : console.log("Isn't palindrome");
