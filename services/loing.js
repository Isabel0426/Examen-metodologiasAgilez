import { getAuth, signInWithEmailAndPassword , signOut } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-auth.js"

let botonlogin=document.getElementById("botonLOGIN")
botonlogin.addEventListener("click",function(evento){

    evento.preventDefault()

    let email=document.getElementById("emailLOGIN").value
    let password=document.getElementById("passwordLOGIN").value

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert("Bienvenido")
            // Signed in
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
    

    
})