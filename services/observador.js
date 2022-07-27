import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-auth.js"



const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    let usuario=document.getElementById("usuario")
    usuario.textContent="Bienvenido "+user.email
  } else {
   let usuario=document.getElementById("usuario")
   usuario.textContent=""
  }
});
