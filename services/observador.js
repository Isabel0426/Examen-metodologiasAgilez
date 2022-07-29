import { getAuth, onAuthStateChanged,signOut } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-auth.js"



const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    let usuario=document.getElementById("usuario")
    usuario.textContent="Bienvenido "+user.email


    let salir=document.getElementById("salir")
    salir.classList.remove("invisible")
  } else {
   let usuario=document.getElementById("usuario")
   usuario.textContent=""
  }
}) 
let botonSalir=document.getElementById("salir")
botonSalir.addEventListener("click",function(){

  const auth = getAuth();
  signOut(auth).then(() => {
  // Sign-out successful.
  window.location.href="index4.html"
  }).catch((error) => {
  // An error happened.
  });
                                
  })
