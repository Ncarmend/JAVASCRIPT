const boddy = document.body.children[1];
//console.log(boddy);
const ul = document.querySelector("ul");
ulchild = ul.childNodes;
ul.nodeName;
console.log(ul);
function re(n) {
    for (const i = 0; i <= i.length; i++) {
        if (i.length === 1) {

        }
    }
}
const fastandfurious = document.querySelectorAll("li").textContent;
const nodes = document.body.childNodes;
let text = "";
for (let i = 0; i < nodes.length; i++) {
    text += nodes[i].nodeType + "<br>";
    console.log(text);
}


const fast = document.querySelectorAll("ul");
const li = document.querySelectorAll("li");
console.log(li);
const lili = fast.innerText;
console.log(lili);
if (lili.innerText.includes("Fast and Furious")) {
    console.log(lili);
    lili.insertBefore(ul, lili.children[0]);
    lili.classList.add("important");
}
const llll = document.getElementsByName("li");
lll.addEventListener(click, function () {
    const lll = document.querySelector('lll');
    const log = document.getElementById('log');

    lll.addEventListener('change', updateValue);

    function updateValue(e) {
        log.textContent = e.target.value;
    }
};
//IMPORTANT
document.getElementById('important').addEventListener('click',
    function (evenm) {
        window.alert("akakaka");
        const targ = evenm.target();
        alert(targ);
        if (evenm.click == ("Fast and Furious")) {
            alert("The most important franchise ever the story of DOM(inic)Toretto s family. It s not about car,  it s about family.");

            //IMPORTANT
        }};
        /*for (let index = 0; index < fast.length; index++) {
        const text = fast[index];
        console.log(text);
        if (text.nodeType !== 1) {
          console.log(text);
        }
      }
    };*/
        ///DIV
        function adddiv() {

            // Get the parent element
            let parentElement = document.body;
            // Get the parent's first child
            let theFirstChild = parentElement.firstChild;

            // Create a new element
            let newDiv = document.createElement("div");

            // Insert the new element before the first child
            parentElement.insertBefore(newDiv, theFirstChild);
        }
        // DIV

        //SELECT

        function addSection() {

            // Get the parent element
            let parentElement = document.querySelector("div");
            // Get the parent's first child
            let theFirstChild = parentElement.firstChild;

            // Create a new element
            let newSection = document.createElement("section");

            // Insert the new element before the first child
            parentElement.insertBefore(newSection, theFirstChild);
        }
        //OPTION
        const optionn = function optio() {
            const option = document.createElement("option");
            //const valu1 = option.value;const valu2 = option.value;
            for (i = 0; i < valu.length; valu++) {
                i[0].innerHTML = "franchises importantes";
                i[1].innerHTML = "franchises normales";
                console.log(optio[i]);
            }
            newSection.insertBefore(option, theFirstChild);
        };
        ///SECTION LISTENER
        /*const section = document.querySelector('section');

        function evenm() {
        console.log("Bonjour");
        }


        // section.addEventListener("change", evenm);*/
        document.querySelector('section').addEventListener('change',function() { 
			window.alert('Gestionnaire de la section');



            section.addEventListener("change", () => {
                // if value switched by client
                  switch (section.value) {
                    case "add":
                    //do somthing with  , "add" value
                      result.innerHTML = selector.value;
                      break;  // then take break
                    case "remove":
                    //do somthing with  , "remove" value
                      result.innerHTML = selector.value;
                      break; // then take break


        

                      /*Ajoutez un eventListener au <select>, le change, si l'option "importante franchise" est choisie,
                       n'affiche que les éléments
                       de la liste qui ont la classe .important. 
                       (indice : vous pouvez basculer la visibilité à l'aide de element.style.visibility = 'hidden')*/