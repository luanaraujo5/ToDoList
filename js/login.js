import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js"

const provider = new GoogleAuthProvider();
const auth = getAuth();
const googleLogin = document.querySelector('.login__social');
const emailLogin = document.querySelector('.login__formulario--botao');
const baseURL = window.location.origin;

googleLogin.onclick = function () {
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;

      if (user.emailVerified) {
        location.replace(`${baseURL}/index.html`);
      } else {
        console.log('Erro inesperado')
      }
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.-
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
}

emailLogin.onclick = function () {
  const email = document.querySelector('.login__formulario--email').value;
  const password = document.querySelector('.login__formulario--senha').value;

  console.log(email, password);

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}