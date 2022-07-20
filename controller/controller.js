let productos=[
{
                              
nombre:"LULU",
precio:64000,
 fotos:['https://firebasestorage.googleapis.com/v0/b/tiendacomfama-eb529.appspot.com/o/Lilu.webp?alt=media&token=1cd2c39d-9f80-4b6d-a553-24cd5f7c8bd1','https://firebasestorage.googleapis.com/v0/b/tiendacomfama-eb529.appspot.com/o/lulu2.png?alt=media&token=92513557-ebaa-45cc-9580-2a2deb3f58ba']
                              
},
{
nombre:"KAYLE",
precio:63000,
fotos:['https://firebasestorage.googleapis.com/v0/b/tiendacomfama-eb529.appspot.com/o/Kayle.png?alt=media&token=89552b14-5628-4105-9bb3-8ef77137fd51','https://firebasestorage.googleapis.com/v0/b/tiendacomfama-eb529.appspot.com/o/kayle2.png?alt=media&token=e8098bad-2027-401d-afed-39cdfa2ed77c']
},
{
nombre:"SORAKA",
precio:63000,
fotos:['https://firebasestorage.googleapis.com/v0/b/tiendacomfama-eb529.appspot.com/o/soraka.png?alt=media&token=754a4feb-7acb-4681-aa75-5968987fb344','https://firebasestorage.googleapis.com/v0/b/tiendacomfama-eb529.appspot.com/o/soraka2.png?alt=media&token=0e0028be-faa2-4712-bbcd-74c49dd6b43a']
},
{
nombre:"TRISTANA",
precio:63000,
fotos:['https://firebasestorage.googleapis.com/v0/b/tiendacomfama-eb529.appspot.com/o/TRISTAMA.png?alt=media&token=abf32ec9-0ed7-4082-9b31-479ca386b098','https://firebasestorage.googleapis.com/v0/b/tiendacomfama-eb529.appspot.com/o/TRISTANA2.png?alt=media&token=f1f81507-e71a-4b41-a5dd-6ca9dee44640']
}
]
                              
let fila=document.getElementById("fila")
                              
//recorrer el arreglo
productos.forEach(function(producto){
                                         
                              
let columna=document.createElement("div")
columna.classList.add("col")
                              
let tarjeta=document.createElement("div")
tarjeta.classList.add("card", "h-100", "text-center")
                              
let foto=document.createElement("img")
foto.classList.add("img-fluid","w-100","h-100")
                                   
foto.src=producto.fotos[0]

let nombre=document.createElement("h3")
nombre.textContent=producto.nombre

let precio=document.createElement("h2")
precio.classList.add("fw-bold")
precio.textContent='$'+producto.precio   

foto.addEventListener("mouseover", function(){
   foto.src=producto.fotos[1]
})

foto.addEventListener("mouseleave", function(){
 foto.src=producto.fotos[0]
})
      

                              
tarjeta.appendChild(foto)
tarjeta.appendChild(nombre)
tarjeta.appendChild(precio)
columna.appendChild(tarjeta)
fila.appendChild(columna)
                                   
})                            