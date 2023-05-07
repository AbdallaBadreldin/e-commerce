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
       data.products.length=6;
      //  var first6 = data.products.slice(0, 6);
      //  first6.forEach((currentElement) => {
        data.products.forEach((currentElement) => {
        let mainDiv  =document.createElement('div');
        let divText = document.createElement('div');
        let productName = document.createElement('p');
        productName.className = "name";
        let price = document.createElement('p');
        price.className = "price";
        let divParagrapgh = document.createElement('p')
        let img = document.createElement('img');

        productName.innerText = currentElement.title;
        price.innerText = currentElement.price;

        divParagrapgh.innerText = currentElement.description;
        img.src = currentElement.images[0] ;
        divText.appendChild(productName);
        divText.appendChild(price);

        mainDiv.appendChild(img);
        mainDiv.appendChild(divText);
        mainDiv.appendChild(divParagrapgh);
    
        let output = document.getElementById("products_list");
       output.appendChild(mainDiv);

    
     
      });
    
    });
}
