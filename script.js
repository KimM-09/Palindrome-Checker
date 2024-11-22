const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const results = document.getElementById("result");
const checker = document.getElementById("checker");


const checkPalindrome = str => {
  const orgStr = str;
  //check that the input is not empty
  if(str === '') {
    alert('Please input a value');
    return;
  }

  //remove the last result
   results.replaceChildren();

 const regex = /[+-\s!@#$%^&*()_+=\[\]{};':"\\|,.<>\/?~`]/g;
 //make the string lowercase, check the string for the characters from the regex and replace them with an empty space; assign that value to lowerCaseStr
 const lowerCaseStr = str.replace(regex, '').toLowerCase();
 /*if the value of lowerCaseStr strictly equals the revers of lowerCaseStr, ${orgStr} is a palindrome, 
 else ${orgStr} is not a palindrome; assign that value to resultsMsg*/
 let resultsMsg = `${orgStr} ${lowerCaseStr === [...lowerCaseStr].reverse().join('') ? 'is' : 'is not'} a palindrome.`;

 const pTag = document.createElement('p');
 pTag.innerHTML = resultsMsg;
 results.appendChild(pTag);

 checker.classList.remove('checker');
 checker.classList.add('result')
}

checkBtn.addEventListener("click", () => {
  checkPalindrome(textInput.value);
})
