let colorRbg = 6


window.onload = function(){
    
 function randomRgb(){

    let r = Math.floor(Math.random()* 255) 
    let g = Math.floor(Math.random()* 255);
    let b = Math.floor(Math.random()* 255) ;
    let rgb = `rgb(${r}, ${g}, ${b})`
    
    return rgb
   }    
   
 let listaRgb = []; 
 function backgroundColor(){
    for (let i = 0; i < colorRbg; i += 1)  {
       let color = document.createElement('span')
        color.className = 'color'
        color.style.backgroundColor = randomRgb();
        listaRgb.push(color.style.backgroundColor)         
        document.querySelector('.containerColor').appendChild(color)         
    }             

    let rgbAleatorio = Math.floor(Math.random() * 6)
    let colorSelect = listaRgb[rgbAleatorio]
    colorSelect = colorSelect.replace(/rgb/gi, '');
    document.querySelector('#corRgb').innerHTML = colorSelect    
    console.log('listaRgb', listaRgb)
} 

backgroundColor();

function btnReset(){

const bntAlterar = document.querySelector('#btnReset')
bntAlterar.addEventListener('click', function(){           
        let corBtnReset = [];
        let container = document.querySelectorAll('.color')         
        
        for(i = 0; i < container.length; i += 1){
            let test = container[i].style.backgroundColor = randomRgb();  
            test = test.replace(/rgb/gi, '');   
            corBtnReset.push(test)
        }
        let rgbAleatorio = Math.floor(Math.random() * 6)
        let corRbg = document.querySelector("#corRgb")
        corRbg.innerText = corBtnReset[rgbAleatorio]   
        document.querySelector('#resultado').innerText = '' 
        resultColor()    
    })
}
btnReset();


function resultColor(){
    let colorOne = document.querySelector('#corRgb').innerText   

    let divColors = document.querySelector(".containerColor")    
    divColors.addEventListener('click', function(event){
        let boxColor = event.target.style.backgroundColor
        boxColor = boxColor.replace(/rgb/gi, '');

        verifColor(colorOne, boxColor);
    })    
}
resultColor();

function verifColor(boxColor, colorOne){
    console.log(boxColor, colorOne)
    if(boxColor == colorOne) {
        document.querySelector('#resultado').innerText = 'Acertouuuuu!'
        //document.querySelector('#result').innerText = +10
    } else {
        document.querySelector('#resultado').innerText = 'Game Over!'
    }
}

}
