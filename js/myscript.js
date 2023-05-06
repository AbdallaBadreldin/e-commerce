function fetchData() {
  let output = document.getElementById("output");
  fetch("https://dummyjson.com/products/1")
    .then((response) => response.json())
    .then((data) => {
      output.innerHTML += "id = " + data.id + "<br/>";
      output.innerHTML += "brand = " + data.brand + "<br/>";
      output.innerHTML += "category = " + data.category + "<br/>";
      output.innerHTML += "price = " + data.price + "<br/>";
      output.innerHTML += "rating = " + data.rating + "<br/>";
      output.innerHTML += "stock = " + data.stock + "<br/>";
    });
}
