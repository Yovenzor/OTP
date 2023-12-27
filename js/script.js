var resendCount = 0; // Variable to track the number of resend clicks

function verifyOTP() {
var otpInput = document.getElementById('otpInput').value;
if (otpInput === '123456789') {
      alert('OTP is verified successfully!');
} else {
      alert('Incorrect OTP. Please try again.');
}
}

function resendOTP() {
if (resendCount < 5) { 
      alert('OTP resent!');
      updateHintText(); 
      resendCount++;
} else {
      alert('You have reached the maximum number of resends.');
}
}

function updateHintText() {
var hintTextElement = document.getElementById('hintText');
switch (resendCount) {
      case 1:
            hintTextElement.innerText = 'Hint: try: the answer is "answer"';
            break;
      case 2:
            hintTextElement.innerText = 'Hint: Earth is round';
            break;
      case 3:
            hintTextElement.innerText = 'Hint: Earth is plane';
            break;
      case 4:
            hintTextElement.innerText = 'Hint: TWITER: YovenzorS';
            break;
      case 5:
            hintTextElement.innerText = 'Hint: LINKEDIN: yovenzor-singh';
            break;

      default:
            hintTextElement.innerText = 'Hint: try "123456789"';
            break;
}
}
