window.onload = function(){
    painelCor();
}


function aleatorio(){
    for (let i = 0; i < 3; i++) {
        const rgb = Math.floor(Math.random() * 254);
        return rgb;
    }
}


function painelCor(){
   for(let i = 0; i < 6; i++){
       let circle = document.createElement('div');
       document.body.appendChild(circle);
       circle.className = 'ball';
       circle.style.display = 'inline-block';
       const cor = '('+aleatorio()+', '+aleatorio()+', '+aleatorio()+')'; 
       circle.style.backgroundColor = 'rgb' + cor;        
   }
   let result = document.querySelectorAll('.ball');
   let cor1 = result[0].style.backgroundColor;
   let cor2 = result[1].style.backgroundColor;
   let cor3 = result[2].style.backgroundColor;
   let cor4 = result[3].style.backgroundColor;
   let cor5 = result[4].style.backgroundColor;
   let cor6 = result[5].style.backgroundColor;
   
   let geral = [cor1, cor2, cor3, cor4, cor5, cor6];
   const ansewer = Math.floor(Math.random() * geral.length);

   const divAdv = document.createElement('div');
    divAdv.id = "rgb-color"
    document.body.appendChild(divAdv);
    var resultado = geral[ansewer];
    divAdv.innerHTML = resultado;
    divAdv.style.fontSize = '20px';

    let texto = document.createElement('p');
    document.body.appendChild(texto);
    texto.innerHTML = 'Escolha uma cor'
    texto.id = 'answer';

    for(let i = 0; i < result.length; i++){
        result[i].addEventListener('click', function(){
            sessionStorage.setItem('cor', result[i].style.backgroundColor);
            if(sessionStorage.getItem('cor') === resultado) texto.innerHTML = 'Acertou!';
            else texto.innerHTML = 'Errou! Tente novamente';

        })
    }
    
}

const botao = document.createElement('button');
botao.innerHTML = 'Resetar o Jogo/Cores';
document.body.appendChild(botao);
botao.id = 'reset-game';

botao.addEventListener('click', function(){
    location.reload();
})

