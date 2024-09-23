var player;
var finish;
var score;
var scoreText;

document.addEventListener("keydown", keyDown);

function load(){
    score = 0;
    player = document.getElementById("player1");
    finish = document.getElementById("finish");
    scoreText = document.getElementById("score");

    player.style.left = '100px';
    player.style.top = '100px';

    newFinish();
}

function newFinish()
{
    rndTop = getRandomInt(600);
    rndLeft = getRandomInt(600);
    finish.style.left = rndLeft + 'px';
    finish.style.top = rndTop + 'px';
}

function keyDown(e)
{
    keyCode = e.key;
    var left = parseInt(player.style.left);
    var top = parseInt(player.style.top);

    switch(keyCode)
    {
        case "w":
            player.style.top = (top - 10) + "px";
            break;
        case "s":
            player.style.top = (top + 10) + "px";
            break;
        case "a":
            player.style.left = (left - 10) + "px";
            break;
        case "d":
            player.style.left = (left + 10) + "px";
            break;
    }

    if(isCollide(player, finish))
    {
        score += 1;
        scoreText.innerText = "Score: " + score;
        newFinish();
    }
}

function isCollide(a, b) {
    var aRect = a.getBoundingClientRect();
    var bRect = b.getBoundingClientRect();

    return !(
        ((aRect.top + aRect.height) < (bRect.top)) ||
        (aRect.top > (bRect.top + bRect.height)) ||
        ((aRect.left + aRect.width) < bRect.left) ||
        (aRect.left > (bRect.left + bRect.width))
    );
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}  