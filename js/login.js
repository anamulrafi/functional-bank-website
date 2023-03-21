    // step-1 add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click',function(){
    // step-2 get the  email address inside the email input field
    //always remember to  use .value to get text from an input field
   const emailFeild = document.getElementById('user-email');
   const emailValue = emailFeild.value;
   console.log(emailValue);
      // step: 3: get password
    // 3.a: set id on the html element
    // 3.b: get the element
    // 3.c: get the value from the element
   const passwordFeild = document.getElementById('user-password');
   const passwordValue = passwordFeild.value;
   console.log(passwordValue);
     // Danger: Do not verify  email on the client side
    // step:4 : verify  email & password
   if(emailValue === 'rafi@gmail.com' && passwordValue === 'rafii'){
    window.location.href= 'bank.html';
   }
   else{
    alert ('Your email or password are invalid');
   }
})
