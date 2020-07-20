function passwordStrengthChecker() {
<<<<<<< HEAD
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
=======
  const passwordInput = document.getElementById('password');
  const meter = document.getElementById('password-strength-meter');
  const text = document.getElementById('password-strength-text');
  const strength = {
    0: 'Worst',
    1: 'Bad',
    2: 'Weak',
    3: 'Good',
    4: 'Strong',
  };

  password.addEventListener('input', () => {
    const value = password.value;
    console.log(value);
    const score = checkPasswordStrength(value);
    meter.value = score;
    text.innerHTML = strength[score];
  });
}

function checkPasswordStrength(password) {
  let strength = 0;
  if (password.length >= 8) {
    strength += 1;
  }

  if (password.match(/^(?=.*[A-Z])/)) {
    strength += 1;
  }

  if (password.match(/^(?=.*\d)/)) {
    strength += 1;
  }

  if (password.match(/^(?=.*[!@#$%^&*])/)) {
    strength += 1;
  }

  return strength;
>>>>>>> 2f756f0502b2e5d7a22d462d16d439d07423627c
}

document.addEventListener("DOMContentLoaded", () => {
  passwordStrengthChecker();
});
