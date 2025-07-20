 const imageCover = document.getElementById("imageCover");
      const coverText = document.getElementById("coverText");
      const coverLink = document.getElementById("coverLink");

      let isSignUp = true;

      function toggleForm() {
        isSignUp = !isSignUp;

        if (isSignUp) {
          imageCover.style.left = "0";
          coverText.innerText = "Don't have an account?  ";
          coverLink.innerText = "Sign Up";
        } else {
          imageCover.style.left = "50%";
          coverText.innerText = "Already have an account?";
          coverLink.innerText = " Login";
        }
      }