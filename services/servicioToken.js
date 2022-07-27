//RECETA PARA CONSUMIR APIS CON JS

//1. PA' ONDE VAS
//LA URI DEL SERVICIO
const URI='https://api.spotify.com/v1/artists/3YcBF2ttyueytpXtEzn1Za/top-tracks?market=US'

const URI2='https://api.spotify.com/v1/artists/5VQCk9RiLwri99OgOT34kq/top-tracks?market=US'

//2. A HACER QUE OME?
//CONFIGURO LA PETICION
const PETICION={
    method:'GET',
    headers:{
        Authorization:'Bearer BQDTC9u02eFGI0EYO_eC0oK8GtS4IUtM0-Po1cwNSq4Tr1COD1JucxnETSgxgpJRe87QKp4nhbhTWqMYcyzbrjYoGJZjvHcsM4E0R003GVzA-khO5HQeobgzCyZN-DJINEXkKz8NReeCyW0Q3WKYDAkbE7Cr-8FcZd6JieoNRn_1mF5-qTk'
    }
}

//3. ARRANQUE PS MIJO
//CONSUMA EL API

//promesa (funcion asincrona)
fetch(URI2,PETICION)
.then(function(respuesta){
    return respuesta.json() //aseguro del formato de respuesta
})
.then(function(respuesta){
    console.log(respuesta)//objeto
    console.log(respuesta.tracks)//arreglo
    pintarCanciones(respuesta.tracks)
}) //hago lo que quiera con la respuesta
.catch(function(respuesta){
    console.log(respuesta)
})

console.log(respuesta)



//FUNCION PARA PINTAR DATOS
function pintarCanciones(canciones){

    //pasos para pintar hacer renden en la GUI

    //1 CREO UNA REFERENCIA A LA BASE SOBRE LA CUAL
    //VOY A PINTAR
    let fila=document.getElementById("fila")

    //2. RECORRER LOS DATOS QUE ME LLEGAN
    canciones.forEach(function(cancion){
       
        //APLICANDO TRAVERSING ()
        //2.1 creando columnas
        let columna=document.createElement("div")
        columna.classList.add("col")

        //2.2 creando la tarjeta
        let tarjeta=document.createElement("div")
        tarjeta.classList.add("card","h-100","shadow")

        //2.3 creando el audio
        let cancionaudio=document.createElement("audio")
        cancionaudio.classList.add("w-100","mt-3")
        cancionaudio.src=cancion.preview_url
        cancionaudio.setAttribute("controls","controls")

        //2.4 crando el nombre de la cancion
        let nombreCancion=document.createElement("h3")
        nombreCancion.classList.add("text-center")
        nombreCancion.textContent=cancion.name

        //2.5 creando la foto del album
        let fotoAlbum=document.createElement("img")
        fotoAlbum.classList.add("img-fluid","w-100","h-100")
        fotoAlbum.src=cancion.album.images[0].url

        //2.6 creando popularidad
        let popularidad=document.createElement("h4")
        popularidad.classList.add("text-center","fw-bold","mt-5")
        popularidad.textContent='Popularidad: '+cancion.popularity

        //FINAL DEFINO JERARQUIAS (PADRES E HIJOS)
        
        tarjeta.appendChild(nombreCancion)
        tarjeta.appendChild(fotoAlbum)
        tarjeta.appendChild(popularidad)
        tarjeta.appendChild(cancionaudio)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)
        


    })

}