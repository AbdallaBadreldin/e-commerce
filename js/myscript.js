fetchData();
function fetchData() {
  let output = document.getElementById("products_list");
  fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then((data) => {
      // output.innerHTML += "id = " + data.id + "<br/>";
      // output.innerHTML += "brand = " + data.brand + "<br/>";
      // output.innerHTML += "category = " + data.category + "<br/>";
      // output.innerHTML += "price = " + data.price + "<br/>";
      // output.innerHTML += "rating = " + data.rating + "<br/>";
      // output.innerHTML += "stock = " + data.stock + "<br/>";
      console.log(data);
    }
    );
}
