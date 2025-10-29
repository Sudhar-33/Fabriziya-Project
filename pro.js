let butt = document.getElementById('btn');

let namep   = document.getElementById('nameus');
let mno     = document.getElementById('mobile');
let emp     = document.getElementById('mail');
let passp   = document.getElementById('passwordp');
let repassp = document.getElementById('repasswordp');

butt.addEventListener('click', (e) => {
  e.preventDefault(); // prevent form refresh

  let nameId     = document.getElementById('name').value.trim();       
  let mobile_no  = document.getElementById('num').value.trim();
  let ema        = document.getElementById('email').value.trim();
  let password   = document.getElementById('pass').value.trim();
  let repassword = document.getElementById('repass').value.trim();

  // regex
  let mobileRegex = /^[6-9]\d{9}$/;
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


  let isValid = true; // flag

  // Name check
  if (nameId === "") {
    namep.innerText = "Enter the name";
    namep.style.color = "red";
    isValid = false;
  }

  // Mobile check
  if (mobile_no === "") {
    mno.innerText = "Enter the mobile number";
    mno.style.color = "red";
    isValid = false;
  } else if (!mobileRegex.test(mobile_no)) {
    mno.innerText = "Enter a valid 10-digit mobile number";
    mno.style.color = "red";
    isValid = false;
  }

  // Email check
  if (ema === "") {
    emp.innerText = "Enter your email";
    emp.style.color = "red";
    isValid = false;
  } else if (!emailRegex.test(ema)) {
    emp.innerText = "Enter a valid email (e.g. example@gmail.com)";
    emp.style.color = "red";
    isValid = false;
  }

  // Password check
  if (password === "") {
    passp.innerText = "Enter password";
    passp.style.color = "red";
    isValid = false;
  }

  if (repassword === "") {
    repassp.innerText = "Re-enter the password";
    repassp.style.color = "red";
    isValid = false;
  } else if (password !== repassword) {
    repassp.innerText = "Passwords do not match";
    repassp.style.color = "red";
    isValid = false;
  }

  // Final submit
  if (isValid) {
    alert("Form submitted successfully!");
    document.getElementById('F1').reset(); // clear form
  }
});
