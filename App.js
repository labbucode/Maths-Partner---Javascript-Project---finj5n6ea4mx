console.log("hello");


function SavedButton(){
    console.log("working save btn")
}

function SearchButton(){
    event.preventDefault();

    console.log("working search btn")
   var problem = document.getElementById('problemBar').value;
   var category = document.getElementById('categoryBar').value;
//    let category = fetch("https://github.com/aunyks/newton-api")
//    pro.then((reponse1) => {
//     return reponse1.json()
//    }).then((value1) => {
//     console.log(value1);
//    })

   let pro = fetch(`https://newton.vercel.app/api/v2/${category}/${problem}`)
   console.log(pro)
   pro.then((reponse) => {
    console.log(reponse.status)
    console.log(reponse.ok)
    return reponse.json()
   }).then((value) => {
    console.log(value);
    document.querySelector(".inputBox2").innerHTML = value.result;
   })

// let pro1 = fetch('https://newton.now.sh/api/v2/simplify/2^2+2(2)')
//   .then((response) => response.json())
//   .then((data) => console.log(data));
//   console.log(pro1);
   

   const Input1  = document.querySelector(".inputBox1").innerHTML = category+" :"+problem;
   
}


function delBtn(ele){
    console.log("working delete btn")
    
}
