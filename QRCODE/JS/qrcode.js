const botao = document.getElementById('botao');
const randomNom = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const containerimg= document.querySelector('.IMAGEM');   /* amazenador da imagem QR */
const imagens=document.querySelectorAll('.IMAGEM img ') /* o proprio QR code*/
const textobotao=botao.innerText;
console.log(textobotao)
let numero = 0;


function trocarImagens(){


    const qrcodeAtual= -numero * 250;
 containerimg.style.transform=`translateX(${qrcodeAtual}px)`;
 console.log('isso ta funcionando')

}



function caracteresAle(tamanho){  
  let resultado= '';
  
  for(let i=0; i<tamanho; i++){
    
    
      const indice= Math.floor(Math.random() * randomNom.length);
  
     resultado+= randomNom.charAt(indice);
  
    
  }
  
  return resultado
  
  
  };
  
  function aguardar(tempo){

      return new Promise(resolve =>setTimeout(resolve, tempo))



  };
  async function esperar(){


      await aguardar(0);


      const carregando='Carregando...';
      botao.innerText=carregando;
      botao.style.pointerEvents='all';


  
  await aguardar(500);
  botao.innerText=textobotao;

};

/* botão addeventlsitener para que o bota funcione*/
  botao.addEventListener('click', function(){
    const teste= caracteresAle(7);
    const apiUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${teste}&size=250x250`
    console.log('Nome do QRCODE:', teste);
    console.log(apiUrl);

    numero=  ( numero +  1) % imagens.length;
    trocarImagens();  
    function fetchData(){
  
    const nova = containerimg;
    
      const imagem=document.createElement('img');
    
    imagem.src=apiUrl;
    imagem.alt='QR-code';
    nova.appendChild(imagem);
    };
  fetchData();
  
  botao.style.pointerEvents='none';

  esperar();
   /*<=========== APÓS TODO O ADDEVENTLISTENER ESSA ACÃO IRÁ ENTRAR COM UM DELAY DE 0s, É A PRIMEIRA AÇÃO DO SETTIMEOUT E É FECHADA POR ULTIMO!*/
  })
 