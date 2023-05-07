fetchData();
function fetchData() {
  let output = document.getElementsByClassName("products_list");
  fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then((data) => {
      // output.innerHTML += "id = " + data.id + "<br/>";
      // output.innerHTML += "brand = " + data.brand + "<br/>";
      // output.innerHTML += "category = " + data.category + "<br/>";
      // output.innerHTML += "price = " + data.price + "<br/>";
      // output.innerHTML += "rating = " + data.rating + "<br/>";
      // output.innerHTML += "stock = " + data.stock + "<br/>";
      data.products.forEach((currentElement) => {
        var mainDiv  =document.createElement('div')
        var divText = document.createElement('div')
        var divParagrapgh = document.createElement('p')
        var img = document.createElement('img');
        img.src = currentElement.images[0] ;
        mainDiv.innerHTML=img + divText +divParagrapgh
        let output = document.getElementById("products_list");
       output.appendChild(img)
      });
    
    });
}
