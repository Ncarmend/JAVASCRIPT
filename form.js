window.addEventListener("keyup", checkey, false);
function checkey(key){
    if(key.keyCode == "65"){
    }
}
const firstinput= document.getElementById('firstname');
firstinput.addEventListener("keyup" , function (evt){
const gospan= document.querySelector("display-firstname");

console.log(gospan);
});
document.getElementById('firstname').addEventListener('keyup', 
function(){
    window.alert(" Okokok");
    const firstinput= document.getElementById('firstname');
    const gospan= document.querySelector("display-firstname");
    if(key.keyCode == ""){
      const  newput= gospan.prepend(firstinput);
      window.alert(" Okokok")
        console.log(newput);
           }
});
document.getElementById('age').addEventListener('keyup',
 function(evenm){
    window.alert("akakaka");
    const targ =evenm.target();
    alert(targ);
    if(targ <=18 ){
        document.querySelector('section').style.display ="hidden";
    }
    else{
        document.querySelector('section').style.display = "block" ;
    }
    } );
        const tpwd = document.getElementById('pwd').addEventListener
        ('keyup', function(e){
            const color = document.getElementById('pwd').style.color;
            if(e.target == ""){
                document.color.style.color = "red";
            }
            else{
                document.color.style.color= "green";
            }
})
const tconf= document.getElementById("pwd-confirm").addEventListener
('keyup' ,function(e)
{
const conf = document.getElementById('pwd');
const confp = document.getElementById('pwd-confirm');
if(conf !== confp){
    console.log("note te same");
}
});









const selectElement = document.querySelector('section');

selectElement.addEventListener('change', (event) => {
  const result = document.querySelector('section');
  document.body.style.backgroundColor = "black";
  document.body.style.color = "white"
  //result.textContent = `You like ${event.target.value}`;
});

//document.getElementById('firstname').addEventListener('keyup', function()









/*<input type = "text" id = "txt" />
//<input type = "button" id = "go" />
var go = document.getElementById("go");
var txt = document.getElementById("txt");

txt.addEventListener("keypress", function(event) {
    event.preventDefault();
    if (event.keyCode == 13)
        go.click();
});


const textbox = document.getElementById("txtSearch");
textbox.addEventListener("keypress", function onEvent(event) {
    if (event.key === "Enter") {
        document.getElementById("btnSearch").click();
    }
});
//<input type="text" id="txtSearch"/>
//<input type="button" id="btnSearch" Value="Search"/>
           
   window.onload = function() {
     document.getElementById('txtSearch').onkeypress = function searchKeyPress(event) {
        if (event.keyCode == 13) {
            document.getElementById('btnSearch').click();
        }
    };

    document.getElementById('btnSearch').onclick =doSomething;
}*/