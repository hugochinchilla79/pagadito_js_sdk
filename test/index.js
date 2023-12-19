const Pagadito = require("../lib/pagadito");

let uid = "your-id";
let wsk = "your-wsk";

pagadito = new Pagadito(uid, wsk, true);
pagadito
  .setErn("123456789")
  .addDetail(1, "Product 1", 10.0, "https://example.com/product-1")
  .addDetail(2, "Product 2", 20.0, "https://example.com/product-2")
  .addDetail(3, "Product 3", 30.0, "https://example.com/product-3")
  .addDetail(4, "Product 4", 40.0, "https://example.com/product-4");

pagadito
  .getStatus("8947af79ed7ff40013f6068c1001485c")
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
