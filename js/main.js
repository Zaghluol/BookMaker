var nameInput = document.getElementById("siteName")
var urlInput = document.getElementById("siteUrl")
var model = document.getElementById("model")
var valid =false;
var producList = [];
if(localStorage.getItem("datalist") !=null){
    producList = JSON.parse(localStorage.getItem("datalist"))
    displayProducts()
}
function addProduct(){
    var product= {
        name: nameInput.value,
        url: urlInput.value,
    }
        if (product.name !== "" && product.name.length>3 &&
         product.url !== "" &&  product.url.startsWith("https//:") &&
           product.url.endsWith(".com")) {
            producList.push(product)
            localStorage.setItem("datalist",JSON.stringify(producList))
            displayProducts()
            clear()
             valid = true
        }
        if (valid === false) {
           var temp = `<div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
           <div class="modal-dialog modal-dialog-centered">
             <div class="modal-content border-0">
               <div class="modal-header border-0">
                 <button type="button" class="btn-close bg-white" data-bs-dismiss="modal" aria-label="Close"></button>
               </div>
               <div class="modal-body">
                 <p class="fw-bold">Site Name or Url is not valid, Please follow the rules below :</p>
                 <p> <i class="fa-regular fa-circle-right mx-2"></i>Site name must contain at least 3 characters</p>
                 <p> <i class="fa-regular fa-circle-right mx-2"></i>Site URL must be a valid one</p>
               </div>
             </div>
           </div>
         </div>`
         document.getElementById("model").innerHTML = temp
        }
}
function func1(){
    if (nameInput.value === "" || nameInput.value.length<2) {
        nameInput.style="border-color:red;"
    }
    else{
        nameInput.style="border-color:gray;"
    }
}
function func2(){
    if( urlInput.value !== "" &&  urlInput.value.startsWith("https//")){
        urlInput.style="border-color:gray;"
    }
    else{
        urlInput.style="border-color:red;"
    }

}
function displayProducts(){
    var temp= ``
    for (var i = 0; i < producList.length; i++) {
        temp = temp + `<tr>
        <td>`+(i+1)+`</td>
        <td>`+producList[i].name+`</td>
        <td>
        <a href="`+producList[i].url+`" type="button" target="_blank" class="btn btn-outline-warning">Visit</a>
        </td>
        <td>
            <button onclick="removeProduct(`+i+`)"
             class="btn btn-outline-danger">Delete</button>
        </td>
    </tr>`
    }
    document.getElementById("myData").innerHTML = temp
}
function removeProduct(index){
    producList.splice(index,1)
    localStorage.setItem("datalist",JSON.stringify(producList))
    displayProducts()
}
function clear(){
 nameInput.value=" "  
 urlInput.value=" "  
}
