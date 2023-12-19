const Pagadito = require("../lib/pagadito");

let uid = "";
let wsk = "";

pagadito = new Pagadito(uid, wsk, true);
/*pagadito
  .setErn("123456789")
  .addDetail(1, "Producto 1", 10.0, "https://example.com/producto-1")
  .addDetail(2, "Producto 2", 20.0, "https://example.com/producto-2")
  .addDetail(3, "Producto 3", 30.0, "https://example.com/producto-3")
  .addDetail(4, "Producto 4", 40.0, "https://example.com/producto-4");*/

pagadito
  .getStatus("8947af79ed7ff40013f6068c1001485c")
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
