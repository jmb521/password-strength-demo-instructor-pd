function passwordStrengthChecker() {
  const passwordInput = document.getElementById("password");
  const passwordStrengthMeter = document.getElementById(
    "password-strength-meter"
  );
  passwordInput.addEventListener("input", function (e) {
    console.log("e", e)
    checkpassword(e.target.value);
  });
  function checkpassword(password) {
    var strength = 0;
    // if (password.match(/[a-z]+/)){
    //     strength+=1;
    // }
    if (password.match(/[A-Z]+/)) {
      strength += 1;
    }
    if (password.match(/[0-9]+/)) {
      strength += 1;
    }
    if (password.match(/[$@#&!]+/)) {
      strength += 1;
    }
    // if (password.length<6){
    // display.innerHTML="minimum number of characters is 6":
    // }
    
    if (password.length > 12) {
      strength += 1;
      // display.innerHTML="maximum number of characters is 12";
    }
    passwordStrengthMeter.value = strength;
    // switch (strength) {
    //   case 0:
    //     break;

    //   case 1:
    //     passwordStrengthMeter.value = 1;
    //     break;

    //   case 2:
    //     passwordStrengthMeter.value = 2;
    //     break;

    //   case 3:
    //     passwordStrengthMeter.value = 3;
    //     break;

    //   case 4:
    //     passwordStrengthMeter.value = 4;
    //     break;
    // }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  passwordStrengthChecker();
});
