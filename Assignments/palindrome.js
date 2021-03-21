function isPalindrome(word){
    var reversedWord = ""
    for(var i = word.length - 1; i >= 0; i--){
        reversedWord += word.charAt(i)
    }
    if(word == reversedWord){
        return true
    }
    return false
}

function testPalindrome(word, expectedAnswer){
    if(isPalindrome(word) == expectedAnswer){
        console.log("test passed")
    }else{
        console.log("test failed")
    }
}

testPalindrome("emre", false)
testPalindrome("ere", true)
testPalindrome("e", true)
