
let users =JSON.parse(localStorage.getItem("users"))

users.map(ele => {
    document.getElementById(`name`).innerHTML=ele.name
    document.getElementById(`email`).innerHTML=ele.mail

})


let arr = JSON.parse(localStorage.getItem('array')) 

   let array = arr || []

let btn=document.querySelector("#saveData")
btn.addEventListener("click", save)
let name = document.getElementById("inputName").value

function save(event){

let name = document.getElementById('inputName').value
let select = document.getElementById(`select`).value
console.log(name)
    if(select==="salmon"){
        a="salmon"
        x="./salmon.jpg";
        z= "32 jd"
    }
    if(select==="pizza"){
        a="pizza"
        x="./pizza.webp";
        z="10 jd"
    }
    if(select==="spagity"){
        a="spagity"
        x="./spagity.jpeg";
        z="5 jd"
    }
    let obj ={
    
       'orderImage'  : x,
        'customerName': name,
        'foodType':a,
        'payment':z
    }
    console.log(arr)
    array.push(obj)
    console.log(array)
    console.log(obj)
localStorage.setItem("array",JSON.stringify(array))

printData()
     event.preventDefault()
}

function printData(){

let table1 = '<table border=2>';
    table1 += '<tr><th>order image</th><th>customer name</th><th>food type</th><th>payment</th></tr>';
    array.map( ele => {
        var image = ele.orderImage;
        var namee = ele.customerName;
        var foodType = ele.foodType;
        var payment = ele.payment;
 
        table1 = table1 + '<tr>',
        table1 = table1 + '<td>'+ `<img src=${image} style="width:150px ;">` + '</td>',
        table1 = table1 + '<td>' + `${namee}` + '</td>',
        table1 = table1 + '<td>' + `${foodType}` + '</td>'
        table1 = table1 + '<td>'  + `${payment}` + '</td>'
     });  
     table1 += "</table>"

     
     document.getElementById("list").innerHTML = table1;


}

// remove data in body
let btnRemove=document.getElementById(`remove`)
btnRemove.addEventListener(`click`,removetable)

function removetable(){

    document.getElementById("list").innerHTML = "";
console.log(array)

}


// delete data in local storage
let removeLocal=document.getElementById(`delete`)
removeLocal.addEventListener(`click`,deleteLocal)

function deleteLocal(){
    localStorage.removeItem('array')
    document.getElementById("list").innerHTML = " ";



}




