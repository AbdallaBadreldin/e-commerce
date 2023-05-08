
let id = localStorage.getItem("productId");
if(id ==null){
 alert('please pick up a product');
}
else{
 fetchData();
function fetchData() {
let output = document.getElementsByClassName("container");
fetch('https://dummyjson.com/products/'+id)
.then((res) => res.json())
.then((data) => {
 let productImg = document.getElementById("image");
 productImg.src = data.images[0];

 let title = document.getElementById("title");
 title.innerHTML = data.title

 let desc = document.getElementById("description");
 desc.innerHTML = data.description

 let price = document.getElementById("price");
 price.innerHTML = '$'+data.price

 let brand = document.getElementById("brand");
 brand.innerHTML = 'Brand: '+data.brand

 let stock = document.getElementById("stock");
 stock.innerHTML = 'Stock & Availability: '+data.stock
});
}}
