let word = "desenvolvimento";
function ifIsPalindrome (word) {
    backwordString = word.split("").reverse().join("");
    if(backwordString === word){
        console.log(true);
    } else {
        console.log(false);    
    } 
} console.log(ifIsPalindrome(word));
   
   
   
   
    /* if(backwords === backwords.reverse()){
        return true;
    } else {
        return false;
    }
} console.log(ifIsPalindrome(word));
 */


