
// document.getElementById('jeu').children[8].children[6].style.display = "none";

let rectBord = document.getElementById('bordure').getBoundingClientRect();
let rectBall = document.getElementById('ball').getBoundingClientRect();

let bordG = ((100 * rectBord.left) / window.innerWidth);
let bordD = ((100 * rectBord.right) / window.innerWidth);
let bordH = ((100 * rectBord.top) / window.innerHeight);
let bordB = ((100 * rectBord.bottom) / window.innerHeight);

console.log("Bordure : \n"+
    "height : "+window.innerHeight+"vh. and : "+rectBord.top+"px\n"+
    "width : "+window.innerWidth+"vw. and : "+rectBord.left+"p\n"+
    "x start: "+ bordG+"\n"+
    "y start: "+ bordH+"\n"+
    "x end: "+ bordD+"\n"+
    "y end: "+ bordB
);

let ballX = 20; 
let ballY = 50;
let dirX = 1;
let speedX = 0.2;
let dirY = 1;
let speedY = 0.6;
let move = false;
let tabBrik = [7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7];
let bing;

function start() {

    move = true;

    setTimeout(function() {  
        ballX += (dirX * speedX);
        ballY += (dirY * speedY);
        document.getElementById("ball").style.transform = "translate(" + ballX + "vw, "+ ballY +"vh)";
        
        if (ballX > bordD || ballX < bordG) {
            dirX *= -1;
        } 

        if (ballY > bordB) {
            dirY *= -1;
            } else if (ballY < bordH) {
                dirY *= -1;
                bing = (Math.trunc(((ballX -10) / 4)));                
                console.log("Contact :\n"+
                    ballX+"\n"+
                    bing+"\n"+
                    tabBrik[bing]+"\n"
                );              
                tabBrik[bing]--;

                document.getElementById('jeu').children[bing].children[tabBrik[bing]].style.display = "none"; 
            }            

        if (move) {           
        start();             
        }
    }, 1)
}

function stop() {
    move = false;
}




