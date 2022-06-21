let dia = 1

while (dia <=8 ){
    dia = parseInt(prompt("Ingrese que dia es hoy (ESC para Salir) \n 1.Lunes \n 2.Martes \n 3.Miercoles \n 4.Jueves \n 5.Viernes \n 6.Sabado \n 7.Domingo "))
    if (dia === 1) {
        alert('Arriba hay que trabajar hoy es LUNES!!')
    }
    if (dia === 2) {
        alert('Arriba hay que trabajar hoy es Martes!!')
    }
    if (dia === 3) {
        alert('Arriba hay que trabajar hoy es Miercoles!!')
    }
    if (dia === 4) {
        alert('Arriba hay que trabajar hoy es Jueves!!')
    }
    if (dia === 5) {
        alert('Arriba hay que trabajar hoy es Viernes!!')
    }
    if (dia === 6){ 
        alert('Arriba hay que trabajar hoy es Sabado falta poco!!')
    }
    if (dia === 7){ 
        alert('Hoy es Domingo, tomate un descanso.')
    } dia++
}
