console.log("hello");
const savedBtn = document.getElementById('savedBtn');
///const searchBtn = document.getElementById('searchBtn');

function SavedButton(){
    console.log("working save btn")
}

function SearchButton(){
    //event.preventDefault();

    console.log("working search btn")
   var problem = document.getElementById('problemBar').value;
   var category = document.getElementById('categoryBar').value;
   console.log(problem);
   console.log(category);

   var input = document.querySelector('container-input inputBox1');
   input.textContent = problem;

//    document.getElementsByClassName("inputBox1").textContent = problem;
//    document.getElementsByClassName("inputBox2").innerHTML = category;

}


function delBtn(){
    console.log("working delete btn")
}