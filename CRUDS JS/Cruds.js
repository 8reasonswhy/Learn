
// creat and add a product 
//save locale storage 





// FUNCTION get and modify totale  

let unit = document.getElementById("unit");
let cost = document.getElementById("cost"); // cost = prix + ADS + TAXES  
let marge = document.getElementById("profit")
let ads = document.getElementById("ads");
let taxes = document.getElementById("taxes");
let discount = document.getElementById("discount");
let titre = document.getElementById("titre");
let count = document.getElementById("count");
let cat = document.getElementById("category");
let prix = document.getElementById("prix");
function gettotale (){


    let total = +unit.value + +ads.value + +taxes.value ;
    // let total = JSON.parse (unit.value) + JSON.parse(ads.value) + JSON.parse(taxes.value);
    // let gain = JSON.parse(prix.value) - total - JSON.parse(discount.value) ;  
    cost.innerHTML = total ;
    let gains = +prix.value - ( +unit.value + +ads.value + +taxes.value )  - +discount.value ;
    marge.innerHTML = gains ;
}
// Function creat and add a product 
let data = [];

let creat = document.getElementById('creat');
if (localStorage.product != null){
   data = JSON.parse(localStorage.getItem("product"));

}
else{
   data = [];

}
readdata ()

 creat.onclick = function(){

    let newobject = {
        titre : titre.value,
        unit : unit.value  ,
        prix : prix.value,
        taxes : taxes.value,
        ads : ads.value,
        discount : discount.value,
        cost : cost.innerHTML,
        marge : marge.innerHTML,
        count : count.value ,
        category: cat.value,
    }
    data.push(newobject);
    localStorage.setItem('product', JSON.stringify(data));
    //console.log(this.localStorage.getItem("product"));
    clearinputs()
    readdata ()

 }

// delete _______________________________________________________________________________________________

function clearinputs(){
    titre.value = "";
    unit.value = "" ;
    prix.value= "";
    taxes.value = "";
    ads.value = "";
    discount.value = "";
    cost.innerHTML = "";
    marge.innerHTML= ""; 
    count.value = "";
    cat.value = "";
}

// red =========================================================================================================

function readdata (){
    let tablededata ="";
    for ( let i = 0 ; i < data.length ; i++ ){
        tablededata +=`
                <tr>
                    <td>${i}</td>
                    <td>${data[i].count}</td>
                    <td>${data[i].category}</td>
                    <td>${data[i].titre}</td>
                    <td>${data[i].unit}</td>
                    <td>${data[i].prix}</td>
                    <td>${data[i].marge}</td>
                    <td>${data[i].cost}</td>
                    <td>${data[i].ads}</td>
                    <td>${data[i].taxes}</td>
                    <td>${data[i].discount}</td>
                    <td><button id = "update" onclick = "updatedata (${i})" >Update</button></td>
                    <td><button id = "supprimer" onclick =" deletedata(${i})" >Supprimer</button></td>
                </tr>`

        document.getElementById("tbody").innerHTML = tablededata ;
        let btn = document.getElementById("deleteall");
        if (data.length >0 ){
            btn.innerHTML=`<button onclick ="deleteall()">Tout supprimer(${data.length}) </button>`;
        }
        else{
            btn.innerHTML = "";
        }
    }
    


}
//delete selected DATA

function deletedata(i){
    data.splice(i,1);
    localStorage.product = JSON.stringify(data);                                                
    readdata();
}


// delete all 

function deleteall(){
    data.splice(0);
    localStorage.clear();
    location.reload();

}

// update  =================================================================================================
let btnup = document.getElementById("edit")

function updatedata (i){

    titre.value = data[i].titre;
    unit.value = data[i].unit ;
    prix.value= data[i].prix;
    taxes.value = data[i].taxes;
    ads.value = data[i].ads;
    discount.value = data[i].discount;
    cost.innerHTML = data[i].cost;
    marge.innerHTML= data[i].marge; 
    count.value = data[i].count;
    cat.value = data[i].category;
    btnup.innerHTML = `<button onclick = "sauvgarde (${i})" >Update</button>`


} 
function sauvgarde (i){
    data[i].titre = titre.value  ;
    data[i].unit = unit.value  ;
    data[i].prix = prix.value ;
    data[i].taxes = taxes.value ;
    data[i].ads = ads.value ;
    data[i].discount = discount.value  ;
    data[i].cost = cost.innerHTML  ;
    data[i].marge = marge.innerHTML ; 
    data[i].count = count.value  ;
    data[i].category = cat.value  ;

    readdata ();
    btnup.innerHTML = "";
    clearinputs()

}

// search ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
let search = document.getElementById("search");

function stitre(){
    
    search.focus();
    search.placeholder = "Recherche par Titre"
    let tablededata ="";

    for ( let i= 0 ; i< data.length ; i++){

        if ((data[i].titre).toLowerCase() == (search.value).toLowerCase() ){

            tablededata +=`
            <tr>
                <td>${i}</td>
                <td>${data[i].count}</td>
                <td>${data[i].category}</td>
                <td>${data[i].titre}</td>
                <td>${data[i].unit}</td>
                <td>${data[i].prix}</td>
                <td>${data[i].marge}</td>
                <td>${data[i].cost}</td>
                <td>${data[i].ads}</td>
                <td>${data[i].taxes}</td>
                <td>${data[i].discount}</td>
                <td><button id = "update" onclick = "updatedata (${i})" >Update</button></td>
                <td><button id = "supprimer" onclick =" deletedata(${i})" >Supprimer</button></td>
            </tr>`;

            ;

        }
         
    }
    document.getElementById("tbody").innerHTML = tablededata;
}
function scat(){

    search.focus();
    search.placeholder = "Recherche par Catégory"
    
    let tablededata ="";


    for ( let i= 0 ; i< data.length ; i++){

        if ((data[i].category).toLowerCase() == (search.value).toLowerCase() ){

            tablededata +=`
            <tr>
                <td>${i}</td>
                <td>${data[i].count}</td>
                <td>${data[i].category}</td>
                <td>${data[i].titre}</td>
                <td>${data[i].unit}</td>
                <td>${data[i].prix}</td>
                <td>${data[i].marge}</td>
                <td>${data[i].cost}</td>
                <td>${data[i].ads}</td>
                <td>${data[i].taxes}</td>
                <td>${data[i].discount}</td>
                <td><button id = "update" onclick = "updatedata (${i})" >Update</button></td>
                <td><button id = "supprimer" onclick =" deletedata(${i})" >Supprimer</button></td>
            </tr>`;

            
        }
    }
    document.getElementById("tbody").innerHTML = tablededata ;

}