//variáveis da bolinha
let xBolinha = 290;
let yBolinha = 200;
let diametro = 20;
let raio = diametro / 2 ;

//velocidade da bolinha
let velocidadexBolinha = 6;
let velocidadeyBolinha = 6;

//variáveis da Raquete

let xRaquete = 5;
let yRaquete = 150;
let wRaquete = 7;
let hRaquete = 80;

//variáveis da RaqueteOponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;
let chanceDeErrar = 0;

let colidiu = false;

//placar do jogo

let meusPontos = 0;
let pontosOponente = 0;

//sons do jogo
let raquetada;
let ponto;
let trilha;

function preload(){
trilha = loadSound ("trilha.mp3");
ponto = loadSound ("ponto.mp3");
raquetada = loadSound ("raquetada.mp3");
}
function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
background(0);
mostraBolinha();
movimentaBolinha();
verificaColisao();
mostraRaquete(xRaquete, yRaquete);
movimentaminhaRaquete();
//verificacolisaoRaquete();
verificacolisaocolisaoRaquete(xRaquete, yRaquete);
mostraRaquete(xRaqueteOponente, yRaqueteOponente);
movimentaRaqueteOponente();
verificacolisaocolisaoRaquete(xRaqueteOponente, yRaqueteOponente);
incluiPlacar();
marcaPonto();
 
 }

function mostraBolinha(){
  circle(xBolinha, yBolinha, 20);
}

function movimentaBolinha(){
  xBolinha += velocidadexBolinha;
  yBolinha += velocidadeyBolinha;
}

function verificaColisao(){
  if (xBolinha + raio> width ||
  xBolinha - raio < 0) {
  velocidadexBolinha *= -1;
}
if (yBolinha + raio > height || yBolinha - raio <0){
velocidadeyBolinha *= -1;
}
}
  
function mostraRaquete(x ,y){
    rect(x, y, wRaquete, hRaquete) 
    
  }
function mostraRaqueteOponente(){
   rect(xRaqueteOponente, yRaqueteOponente, wRaquete, hRaquete) 
}

function movimentaminhaRaquete(){
    if (keyIsDown(UP_ARROW)){
      yRaquete -= 10;
    }

       if (keyIsDown(DOWN_ARROW)){
         yRaquete += 10;
       }
     }
function verificacolisaoRaquete(){
    if (xBolinha - raio < xRaquete + wRaquete
       && yBolinha - raio < yRaquete + hRaquete && yBolinha + raio > yRaquete){
      velocidadexBolinha *= -1;
    }
  }
function colisaoMinhaRaqueteBiblioteca(){
     colidiu =
  collideRectCircle ( xRaquete, yRaquete ,  wRaquete ,  hRaquete , xBolinha , yBolinha , raio );
  if (colidiu){
    velocidadexBolinha *= -1;
    raquetada.play();
  }
      }
  
function verificacolisaocolisaoRaquete(x,y){
     colidiu =
  collideRectCircle ( x, y ,  wRaquete ,  hRaquete , xBolinha , yBolinha , raio );
  if (colidiu){
    velocidadexBolinha *= -1;
    raquetada.play();
  }
   }
  
function movimentaRaqueteOponente(){
   velocidadeYOponente = yBolinha - yRaqueteOponente - wRaquete /2 - 27;
   yRaqueteOponente += velocidadeYOponente + chanceDeErrar
  calculaChanceDeErrar();
 }
function calculaChanceDeErrar() {
  if (pontosOponente >= meusPontos) {
    chanceDeErrar += 1
    if (chanceDeErrar >= 39){
    chanceDeErrar = 40
    }
  } else {
    chanceDeErrar -= 1
    if (chanceDeErrar <= 35){
    chanceDeErrar = 35
    }
  }
}
 
function incluiPlacar(){
      textAlign(CENTER);
      textSize(20);
      fill(color(147,112,219))
      rect(150,10,42,24)
      fill(255);
      text(meusPontos,170, 29);
      fill(color(147,112,219))
      rect(450,10,42,24)
      fill(255);
      text(pontosOponente,470,29);

    }

function marcaPonto(){
     if (xBolinha > 590){
       meusPontos += 1
       ponto.play();
     }
     if(xBolinha < 10){
       pontosOponente += 1
       ponto.play();
     }
   }
  



