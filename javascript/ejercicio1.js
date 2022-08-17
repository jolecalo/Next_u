function totalMinutos(horas, minutos) {
    horas = horas * 60;
    var resultado = horas + minutos;
    return resultado;
}
console.log(totalMinutos(0, 15));
function cantidadRecoletadaSimple(costo, numPersonas) {
    return (costo * numPersonas);
}
console.log(cantidadRecoletadaSimple(1, 5));
function cantidadRecolectada(costoEstudiante,costoAdulto,cantidadEstudiantes,cantidadAdultos){
    var valorEstudiante = cantidadRecoletadaSimple(costoEstudiante,cantidadEstudiantes);
    var valorAdulto = cantidadRecoletadaSimple(costoAdulto,cantidadAdultos);
    var resultado = valorAdulto+valorEstudiante;
    return resultado;
}
console.log(cantidadRecolectada(5, 5, 20, 3));