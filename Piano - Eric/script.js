
let configTeclat = {prevent_repeat : true}
let eventTeclat = new window.keypress.Listener(this,configTeclat)

eventTeclat.simple_combo('q',sonidoQ);
eventTeclat.simple_combo('w',sonidoW);
eventTeclat.simple_combo('e',sonidoE);
eventTeclat.simple_combo('r',sonidoR);
eventTeclat.simple_combo('t',sonidoT);
eventTeclat.simple_combo('y',sonidoY);
eventTeclat.simple_combo('a',sonidoA);
eventTeclat.simple_combo('s',sonidoS);
eventTeclat.simple_combo('d',sonidoD);
eventTeclat.simple_combo('f',sonidoF);
eventTeclat.simple_combo('g',sonidoG);
eventTeclat.simple_combo('z',sonidoZ);
eventTeclat.simple_combo('x',sonidoX);
eventTeclat.simple_combo('c',sonidoC);
eventTeclat.simple_combo('v',sonidoV);
eventTeclat.simple_combo('b',sonidoB);

eventTeclat.sequence_combo('1 2 3 4',sonidoFondo1);
eventTeclat.sequence_combo('5 6 7 8',sonidoFondo2);
eventTeclat.sequence_combo('9 0',sonidoFondo3);
eventTeclat.sequence_combo('0 9 8 7',sonidoFondo4);

function sonidoQ(){

    var snd = new Audio("mario-bros-here-we-go-hoo.mp3");
    snd.play();

}

function sonidoW(){

    var snd = new Audio("kart-start-mario.mp3");
    snd.play();

}

function sonidoE(){

    var snd = new Audio("mario-coin.mp3");
    snd.play();

}

function sonidoR(){

    var snd = new Audio("mario-bros tuberia.mp3");
    snd.play();

}
function sonidoT(){

    var snd = new Audio("mario-bros-1-up.mp3");
    snd.play();

}

function sonidoY(){

    var snd = new Audio("mario-bros-mamma-mia.mp3");
    snd.play();

}

function sonidoA(){

    var snd = new Audio("inicio rock_prev.mp3");
    snd.play();

}

function sonidoS(){

    var snd = new Audio("Percusion_prev.mp3");
    snd.play();

}

function sonidoD(){

    var snd = new Audio("megabomba_prev.mp3");
    snd.play();

}

function sonidoF(){

    var snd = new Audio("Campana_prev.mp3");
    snd.play();

}

function sonidoG(){

    var snd = new Audio("Gong indio.mp3");
    snd.play();

}

function sonidoZ(){

    var snd = new Audio("Redoble de Tambor_prev.mp3");
    snd.play();

}

function sonidoX(){

    var snd = new Audio("ringtones-iphone-iphone.mp3");
    snd.play();

}

function sonidoC(){

    var snd = new Audio("tambores africanos.mp3");
    snd.play();

}

function sonidoV(){

    var snd = new Audio("iphone-notificacion.mp3");
    snd.play();

}

function sonidoB(){

    var snd = new Audio("base-de-rap.mp3");
    snd.play();

}

function sonidoFondo1(){

    var snd = new Audio("mario-bross-version-metal-videojuegos-.mp3");
    snd.play();
  
}

function sonidoFondo2(){

    var snd = new Audio("Cancion entierro.mp3");
    snd.play();
  
}

function sonidoFondo3(){

    var snd = new Audio("trompeta-funeral-entierro-.mp3");
    snd.play();
  
}

function sonidoFondo4(){

    var snd = new Audio("Cancion iphone-africa.mp3");
    snd.play();
  
}
