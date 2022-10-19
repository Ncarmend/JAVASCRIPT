
//document.body.onload = addElement;
const section = document.createElement('section');
const sect = document.createElement('Boujour');
console.log(section);
const elem = document.createElement('p');
const pp = document.createTextNode('Je suis dans le paragraphe');
console.log(pp);
elem.appendChild(pp);
section.appendChild(elem);
console.log(section);
document.body.appendChild(section);
const article = document.createTextNode('Je suis l\'article');
console.log(article);
section.appendChild(article);
section.style.color = 'green';
section.style.backgroundColor = 'black';
function couleurr(){
    const coul = document.style.backgroundColor = 'white';
    const lacoul = document.style.backgroundColor = 'yellow';
    coul = a;
    a= lacoul;
    lacoul = b ;
document.body.style.backgroundColor = 'coul';
}
function bgChange() {
    var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    
    color.innerHTML ='bgChange';
  }


