import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js";

const auth = getAuth();
const register = document.querySelector('.register__formulario--botao');

register.onclick = function () {
  const email = document.querySelector('.register__formulario--email').value;
  const password = document.querySelector('.register__formulario--senha').value;

  console.log(email, password)

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage)
      // ..
    });
} 