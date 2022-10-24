
/*document.title = "Modifying the dom";
document.body.style.backgroundColor = "#FF69B4";
const setBg = () => {     const randomColor = Math.floor(Math.random()*16777215).toString(16);     
    document.body.style.backgroundColor = "#" + randomColor;     
    color.innerHTML = "#" + randomColor;   } 
      setBg();
const body = document.body.children;
console.log(body)
for(elem of body){
    console.log(elem);
}
const anchor = document.querySelectorAll('.important');
console.log(anchor);*/

const imp = document.querySelectorAll('.important');
for (const elem of imp)
{
    elem.title= "This is an important item"
    console.log(elem.title)
}
function show(cla) {
    const elements = document.getElementsByClassName("important");
    const elem = document.querySelectorAll('img');
        if(elements == ""){
                elements.style.display = "none";
            }
            console.log(elements);
      }
const listpara = document.getElementsByTagName('p').innerHTML;
console.log(listpara);
function paragra(para){
  const parag = document.getElementsByTagName('p');
if(document.getElementsByClassName !== ""){
    
    console.log(document.getElementsByClassName('important'));
                                            }
}
/*const couleurp = () => {
    const colore = Math.floor =  Math.floor(Math.random()*16777215).toString(16);
    document.p.style.backgroundColor = "#" + randomColor;*/

// Navigation
    const ool = document.querySelector('ol');
    console.log(ool);
const a = ool.children[4]
const b = ool.children[1]
console.log(b);
console.log(a);
b.appendChild(a);
const liste1 = ool.lastChild;
console.log(liste1);
const taab= Array.ool;
console.log(taab);
function liste(){
    const li1= document.getElementById('nave')
}
let tabll = ["li1","li2" , "li3", "li4" ];
for(i=0; i<tabll.length; i++);
console.log(tabll[i]);


const r= document.querySelector('section');
console.log(r);
const booo = r.children[2];
//const secc = document.childNodes('section');
const bd = document.body;
const sup = bd.remove(booo);

//event js
const _initTime = Date.now()

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

const clickOnSquare = (e) => {
  console.log(e.target.classList[1])
  console.log(getElapsedTime())
}

const actionSquares = document.querySelectorAll('.actionsquare')
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare)
}
document.getElementById("displayedquare-wrapper")
document.getElementById("displayedsquare").onclick = function(){
    

}
document.getElementById("displayedsquare").addEventListener('click', function(){

})