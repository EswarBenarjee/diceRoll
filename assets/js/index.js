function roll() {
    var audio = new Audio("assets/audio/dice.wav");
    audio.play();

    setTimeout(function(){
        var audio = new Audio("assets/audio/dice.wav");
        audio.play();
    }, 300);

    setTimeout(function(){
        var audio = new Audio("assets/audio/dice.wav");
        audio.play();
    }, 600);

    for(var x=0; x<10; x++)
        window.setTimeout(replace, 100 * x);
}

function replace() {
    var randice = Math.floor(Math.random() * 6) + 1;
    var dice = document.getElementById("dice");

    dice.style.display = 'block';
    var src = "./assets/img/Dice"+randice+".png";

    var diceImg = document.getElementById("dicePic");
    diceImg.setAttribute("src", src);
}