console.log("hello");
var set = 0;

function SavedButton(){
    console.log("working save btn")
   
    var wet =  document.querySelector(".inputBox2").innerHTML;
    localStorage.setItem(set,wet);
    console.log(localStorage.getItem(set));
    set++;
}
function historyButton(){
    console.log("working history btn")
    for(x in localStorage){
        console.log(localStorage[x]);
    }
}

function SearchButton(){
    event.preventDefault();

    console.log("working search btn")
   var problem = document.getElementById('problemBar').value;
   var category = document.getElementById('categoryBar').value;

   let pro = fetch(`https://newton.vercel.app/api/v2/${category}/${problem}`)
   console.log(pro)
   pro.then((reponse) => {
    console.log(reponse.status)
    console.log(reponse.ok)
    return reponse.json()
   }).then((value) => {
    console.log(value);
    var input2 =  value.result;
    document.querySelector(".inputBox2").innerHTML = input2;
   })
   

   const Input1  = document.querySelector(".inputBox1").innerHTML = category+" :"+problem;
   var set =  document.querySelector(".inputBox1").value;
   var wet =  document.querySelector(".inputBox2").innerHTML;
   localStorage.setItem(set,wet);
}


function delBtn(ele){
    console.log("working delete btn")
    document.querySelector(".inputBox1").innerHTML = "";
    document.querySelector(".inputBox2").innerHTML = "";
}
