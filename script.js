
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

    const ool = document.querySelector('ol');
    console.log(ool);
const a = ool.children[4]
const b = ool.children[1]
console.log(b);
console.log(a);
b.appendChild(a);
document.style