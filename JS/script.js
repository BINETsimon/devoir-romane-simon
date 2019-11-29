var burgerM = false;

function burgerMenu(){
    var main = document.getElementById('containerMain');
    var leftPannel = document.getElementById('leftPannel');
    var backdrop = document.getElementById('BackdropNav');

    if (window.innerWidth >= 970){
        if (burgerM == false){
            main.style.width = "80%";
            leftPannel.style.width = "20%";
            leftPannel.style.transition= "width 0.9s ease";

            burgerM = true;
        }else{
            main.style.width = "100%";
            leftPannel.style.width = "0%";
            leftPannel.style.transition= "width 0.8s ease";

            burgerM = false;
        }
    }else if(window.innerWidth >= 600){
        if (burgerM == false){
            leftPannel.style.width = "350px";
            leftPannel.style.transition= "width 0.9s ease";
            backdrop.style.width = "calc(100% - 350px)";


            burgerM = true;
        }else{
            leftPannel.style.width = "0%";
            leftPannel.style.transition= "width 0.8s ease";
            backdrop.style.width = "0%";

            burgerM = false;
        }
    }else{
        if (burgerM == false){
            leftPannel.style.width = "50vw";
            leftPannel.style.transition= "width 0.9s ease";
            backdrop.style.width = "50%";

            burgerM = true;
        }else{
            leftPannel.style.width = "0%";
            leftPannel.style.transition= "width 0.8s ease";
            backdrop.style.width = "0%";

            burgerM = false;
        }
    }
}

var Vloader = true;

function loader(){
    var element = document.getElementById('Backdroploader');
    if(Vloader == true){
        element.classList.add("remove");
        element.classList.remove("add");
        Vloader = false;
    }else{
        element.classList.remove("remove");
        element.classList.add("add");
        Vloader = true;
    }
}

loader();

function BackChangeGif(){
    var background = document.getElementById('tableau2');
    var alea = Math.floor(Math.random() * 4) + 1;

    if (alea == 1){
        background.style.backgroundColor = "#a56fbe";
    }
    if (alea == 2){
        background.style.backgroundColor = "#ff7105";
    }
    if (alea == 3){
        background.style.backgroundColor = "#4ed087";
    }
    if (alea == 4){
        background.style.backgroundColor = "#66ddff";
    }
}

function BackChangeAnim(){
    var background = document.getElementById('tableau5');
    var alea = Math.floor(Math.random() * 4) + 1;

    if (alea == 1){
        background.style.backgroundColor = "#a56fbe";
    }
    if (alea == 2){
        background.style.backgroundColor = "#ff7105";
    }
    if (alea == 3){
        background.style.backgroundColor = "#4ed087";
    }
    if (alea == 4){
        background.style.backgroundColor = "#66ddff";
    }
}

setInterval(TextOggy ,300);

function TextOggy() {
    var text1 = document.getElementById('OGGY1');
    var text2 = document.getElementById('OGGY2');
    var text3 = document.getElementById('OGGY3');

    var fonts = ["Americana", "jiggler", "Romantic", "bangers", "arial", "kidos"];

    var alea = Math.floor(Math.random() * 6);
    text1.style.fontFamily = fonts[alea];
    var alea = Math.floor(Math.random() * 6);
    text2.style.fontFamily = fonts[alea];
    var alea = Math.floor(Math.random() * 6);
    text3.style.fontFamily = fonts[alea];
    
    
}

TextOggy();

setInterval(GAME ,6001);

var cafardAlea;

function GAME(){
    cafardAlea = Math.floor(Math.random() * 3);
    switch(cafardAlea){
        case 0:
            var cafard = document.getElementById('cafard1').style;
            var click = document.getElementById('CLICK1').style;
            break;
        case 1:
            var cafard = document.getElementById('cafard2').style;
            var click = document.getElementById('CLICK2').style;
            break;
        case 2:
            var cafard = document.getElementById('cafard3').style;
            var click = document.getElementById('CLICK3').style;
            break;
    }
    cafard.display = "block";
    click.display = "block";
    var splash = document.getElementById('splash').style;

    click.transition = "1s";
    var alea = Math.floor(Math.random() * 4);

    switch(alea){
        case 0:
            cafard.top = "55%";
            cafard.left = "46%";
            cafard.height = "25%";

            click.left = "46%";
            click.top = "56%";
            click.height = "25%";

            splash.left = "25%";
            splash.top = "52%";

            cafard.zIndex = 10;
            setTimeout(function(){
                cafard.left = "35%";
                cafard.transition = "1s";
                click.left = "35%";
            }, 1000);
            setTimeout(function(){
                cafard.left = "46%";
                click.left = "46%";
                setTimeout(function(){
                    cafard.transition = "0s";
                    cafard.display = "none";
                }, 1000);
            }, 5000);

            break;
        case 1:
            cafard.top = "48%";
            cafard.left = "45%";
            cafard.height = "23%";

            click.top = "48%";
            click.left = "45%";
            click.height = "23%";

            splash.left = "45%";
            splash.top = "52%";
            
            cafard.zIndex = 10;
            setTimeout(function(){
                cafard.left = "58%";
                cafard.transition = "1s";
                click.left = "58%";
            }, 1000);
            setTimeout(function(){
                cafard.left = "45%";
                click.left = "45%";
                setTimeout(function(){
                    cafard.transition = "0s";
                    cafard.display = "none";
                }, 1000);
            }, 5000);
            break;
        
        case 2:
            cafard.top = "34%";
            cafard.left = "60%";
            cafard.height = "18%";

            click.top = "34%";
            click.left = "60%";
            click.height = "18%";

            splash.left = "50%";
            splash.top = "15%";

            cafard.zIndex = 5;
            setTimeout(function(){
                cafard.top = "20%";
                cafard.transition = "1s";
                click.top = "20%";
            }, 1000);
            setTimeout(function(){
                cafard.top = "34%";
                setTimeout(function(){
                    cafard.transition = "0s";
                    cafard.display = "none";
                }, 1000);
            }, 5000);
            break;

        case 3:
            cafard.top = "38%";
            cafard.left = "30%";
            cafard.height = "18%";

            click.top = "38%";
            click.left = "30%";
            click.height = "18%";

            splash.left = "20%";
            splash.top = "20%";

            cafard.zIndex = 5;
            setTimeout(function(){
                cafard.top = "20%";
                cafard.transition = "1s";
                click.top = "20%";
            }, 1000);
            setTimeout(function(){
                cafard.top = "36%";
                setTimeout(function(){
                    cafard.transition = "0s";
                    cafard.display = "none";
                }, 1000);
            }, 5000);
            break;
    }
}

GAME();
var incremente1 = 1;
var incremente2 = 1;
var incremente3 = 1;
var incremente = 1;
function BAM(){
    var splash = document.getElementById('splash');
    splash.style.display = "block";
    splash.classList.add('anim');

    switch(cafardAlea){
        case 0:
            var cafard = document.getElementById('cafard1').style;
            var click = document.getElementById('CLICK1').style;
            var compteur = document.getElementById('compteur1');
            incremente = incremente1++;
            break;
        case 1:
            var cafard = document.getElementById('cafard2').style;
            var click = document.getElementById('CLICK2').style;
            var compteur = document.getElementById('compteur2');
            incremente = incremente2++;
            break;
        case 2:
            var cafard = document.getElementById('cafard3').style;
            var click = document.getElementById('CLICK3').style;
            var compteur = document.getElementById('compteur3');
            incremente = incremente3++;
            break;
    }

    cafard.display = "none";
    click.display = "none";
    compteur.innerHTML = "X "+ incremente;

    setTimeout(function(){
            splash.classList.remove('anim');
            splash.style.display = "none";
        }, 1000)
}