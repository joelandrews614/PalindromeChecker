

var button = document.querySelector("button");
var valueField = document.querySelector("#word_placeholder");
var valueResult = document.querySelector("span");



button.addEventListener("click", () => {
    if(valueField.value){
        var word = valueField.value;
        word = word.toLowerCase();
        var reWord = "";
        
        for(let i = word.length-1; i >= 0; i--){
            reWord += word[i];
        }
        
        if(reWord == word){
            var isPalindrome = true;
        }else{
            var isPalindrome = false;
        }
        
        if(isPalindrome){
           valueResult.innerHTML = "It is a Palindrome";
        }else{
            valueResult.innerHTML = "It is Not a Palindrome";
        }
    }else{
        valueResult.innerHTML = "Type In The Text Field Please!!";
        setTimeout(()=> {
            valueResult.innerHTML = "";
        }, 1500);
    }
});