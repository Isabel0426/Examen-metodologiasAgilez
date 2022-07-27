import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-auth.js"
//getauth yo solamente voy a poder crear el usuario si solo si tengo permisos, sino no voy a poder
let boton=document.getElementById("boton")

//escucho click en el boton de registro
boton.addEventListener("click", function(evento){

                              //Evito que el formulario se reinicie
                              evento.preventDefault()

                              //capturo lo que escriben en cada caja del formulario
                              let email=document.getElementById("email").value 
                              let password=document.getElementById("password").value
                              console.log(email,password)

                              //me autentico ante firebase
                              const auth =getAuth();
                              //Se llama a la promesa create user
                              //userCredential es una funcio en otro formato, funcion flecha 
                              createUserWithEmailAndPassword(auth, email, password)
                              .then((userCredential) => {//si todo sale bien ... antes de la flecha siempre van los parametros
                              // Signed in
                              const user = userCredential.user.email;
                              //antes del alert se imprime el objeto
                              console.log(userCredential)
                              let usuario=document.getElementById("usuario")
                              usuario.textContent="Bienvenido "+user
                              alert("exito en el registro, bienvenido")
                              window.location.href='./index3.html'

                              })
                              .catch((error) => {//si fallamos 
                              const errorCode = error.code;
                              const errorMessage = error.message;
                              alert("upss fallamos"+errorMessage)
                              // ..
                              });

})
