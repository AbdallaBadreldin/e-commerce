fetchData();
function fetchData() {
  let output = document.getElementsByClassName("products_list");
  fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then((data) => {
       data.products.length=6;
   
        data.products.forEach((currentElement) => {
          
        let mainDiv  =document.createElement('div');
        let divText = document.createElement('div');
        let productName = document.createElement('p');
        productName.className = "name";
        let price = document.createElement('p');
        price.className = "price";
        let divParagrapgh = document.createElement('p')
        let img = document.createElement('img');

        mainDiv.addEventListener("click", function() {
          document.location.href='../html/productDetails.html';
          localStorage.setItem("productId", currentElement.id);
      })

        productName.innerText = currentElement.title;
        price.innerText = currentElement.price;

        divParagrapgh.innerText = currentElement.description;
        img.src = currentElement.images[0] ;
        img.style.objectFit = 'cover';
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
