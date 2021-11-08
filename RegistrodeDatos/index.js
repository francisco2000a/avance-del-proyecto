

document.getElementById('registro').addEventListener('click', (e) => {

    e.preventDefault();

    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var ciudad = document.getElementById('ciudad').value;
    var edad = document.getElementById('edad').value;
    var contraseña2 = document.getElementById('contraseña').value;


    let bases_de_datos = [nombre, apellido, ciudad, edad, contraseña2];

    document.getElementById('mensaje').innerHTML = "Listo, " + bases_de_datos[0] +" "+ bases_de_datos[1] +" ya te encuentras registrado.";

    for(var i =0; i<bases_de_datos.length; i++){

        console.log(bases_de_datos[i]);

    }

    
})




