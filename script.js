const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const results = document.getElementById("result");
const checker = document.getElementById("checker");


const checkPalindrome = str => {
  const orgStr = str;
  if(str === '') {
    alert('Please input a value');
    return;
  }

  //remove the last result
   results.replaceChildren();

 const regex = /[+-\s!@#$%^&*()_+=\[\]{};':"\\|,.<>\/?~`]/g;
 const lowerCaseStr = str.replace(regex, '').toLowerCase();
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
