function grabDatos() {
    var pais = document.getElementById("pais").value;
    var nombre = document.getElementById("nombre").value;
    var fecha = document.getElementById("fecha").value

    localStorage.setItem('pais', pais, 'nombre', nombre, 'fecha', fecha); // para guardar
    const datos = localStorage.getItem('pais', 'nombre', 'fecha'); // para recuperar
    var contendor = document.createElement("div");
    contendor.innerText(datos);
    document.body.insertBefore(contendor)
    alert (datos);
}