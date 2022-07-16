
window.onload = function(){
    
 function acerteCor(){

    let r = Math.floor(Math.random()* 255) 
    let g = Math.floor(Math.random()* 255);
    let b = Math.floor(Math.random()* 255) ;
    let rgb = `rgb(${r}, ${g}, ${b})`
    
    return rgb
   }          


function backgroundColor(){

    let listaRgb = [];

   for (let i = 0; i < 6; i += 1)  {
       let color = document.createElement('span')
        color.className = 'color'
        color.style.backgroundColor = acerteCor();

        listaRgb.push(color.style.backgroundColor)       
        
        document.querySelector('.containerColor').appendChild(color) 

        const bntAlterar = document.querySelector('#btnReset')

        bntAlterar.addEventListener('click', function(){           
            color.style.backgroundColor = acerteCor();
        })        
    }
    let rgbAleatorio = Math.floor(Math.random() * 6)
    let colorSelect = listaRgb[rgbAleatorio]
    colorSelect = colorSelect.replace(/rgb/gi, '');
    document.querySelector('#corRgb').innerHTML = colorSelect
} 
backgroundColor();


}

