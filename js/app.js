
const box = document.getElementById('img-cont')
const cont = box.getBoundingClientRect()
const contCenterX = cont.left + cont.width/2; // left con respecto al borde izquierdo de la pagina mas el ancho/2
const contCenterY = cont.top + cont.width/2; // left con respecto al borde superior de la pagina mas la altura/2

const eyesArray = document.querySelectorAll('.eye')


document.addEventListener('mousemove', (e) =>{

    // console.log(e); // getting info
    let mouseX = e.clientX
    let mouseY = e.clientY
    
    // console.log(rotation(contCenterX, mouseX, contCenterY, mouseY)); working
    const  angle = rotation(contCenterX, mouseX, contCenterY, mouseY) 

    // console.log(eyesArray[1]) checking the eye
    eyesArray.forEach(eye => {

        // console.log(eye);
        eye.style.transform = `rotate(${angle}deg)`
    })

    // console.log('---------------------------------------------------')

})

const rotation = (contX, mouseX, contY, mouseY) =>{
    const X = - contX + mouseX
    const Y = - contY + mouseY
    const angle = Math.atan2( Y , X ) * 180 / Math.PI // el valor es dado en radianes por lo que debemos transformarlo a grados

    return angle
}
