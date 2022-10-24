const _initTime = Date.now()

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

const clickOnSquare = (e) => {
    console.log(e.target.classList[1])
    console.log(getElapsedTime())
    const newdiv = document.createElement('div');
    newdiv.classList.add("displayedsquare");
    const color = e.target.classList[1];
    newdiv.classList.add(`${color}`);
    const final = document.querySelector(".displayedsquare-wrapper");
    final.appendChild(newdiv);
   
   
   
}

const actionSquares = document.querySelectorAll('.fdactionsquare')
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare)
}
//body


document.querySelector(".actionsquare").addEventListener("click" , clickOnSquare);



function bodydisplayAnAlert( ){
    (keypress)
    return alert('Hello body!')
  }

/*
var go = document.getElementById("go");
var txt = document.getElementById("txt");

txt.addEventListener("keypress", function(event) {
    event.preventDefault();
    if (event.keyCode == 13)
        go.click();
});*/

//couleur du body à verifier
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    const colors = '#';
    for (var i = 0; i < 6; i++) {
    colors += letters[Math. floor(Math. random() * 16)];
    }
    return colors;
    const cbody = document.querySelector('body').getRandomColor;
    console.log("cbody");
 }
 function system(){"click",  systeme{

 }

 }
 //Affiche du texte
 const liste3 = document.newdiv.getElapsedTime.innerHTML;

//Alert Alert




 //We select the button
/*const button = document.querySelector('button')


// Create a callback function that will called whenever 
function displayAnAlert(){
  return alert('The button shall not be pressed!')
}

// We create an event listener
button.addEventListener(
  'click', // we listen to the click event
  displayAnAlert // We trigger the callback function
)*/