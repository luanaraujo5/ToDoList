import { getAuth, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js";

const auth = getAuth();
const recovery = document.querySelector('.recovery__formulario--botao');

recovery.onclick = function () {
    const email = document.querySelector('.recovery__formulario--email').value;

    sendPasswordResetEmail(auth, email)
        .then(() => {
            // Password reset email sent!
            // ..
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
            // ..
        });
}
