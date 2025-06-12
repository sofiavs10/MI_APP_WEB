function MostrarPresentacion() {
    const nombre = document.getElementById("nombre").value;
    const edad = document.getElementById("edad").value;
    const artista = document.getElementById("artista").value;
    const comida = document.getElementById("comida").value;
    const cancion = document.getElementById("cancion").value;

    let generacion;
    if(edad >= 50){
        generacion = "Baby Boomer";
    } else if(edad>= 43){
        generacion = "Generacion X";
    }else if(edad >=27){
        generacion = "Millenial";
    }else if(edad >= 12){
        generacion = "Generacion Z";
    }else {
        generacion = "Alpha";
    }

    const resultado = `
         <strong> Hola soy ${nombre} </strong>
         <br>
         <strong> Tengo ${edad} años y pertenezco a la ${generacion} </strong>
         <br><br>
         <strong> Mi artista favorito es:<em> ${artista} </em><br></strong>
         <strong> Mi comida favorita es:<em> ${comida} </em><br></strong>
         <strong> Mi artista favorito es:<em> ${cancion} </em><br></strong>  
    `;

    document.getElementById("Resultado").innerHTML = resultado;
}