const Pagadito = require("../lib/pagadito");

let uid = "2f37cff6e8b5648ac212ae85bb750b1c";
let wsk = "f933f6b7e8ed994a6737ef940fe36bf9";

pagadito = new Pagadito(uid, wsk, true);
pagadito
  .setErn("123456789")
  .addDetail(1, "Producto 1", 10.0, "https://example.com/producto-1")
  .addDetail(2, "Producto 2", 20.0, "https://example.com/producto-2")
  .addDetail(3, "Producto 3", 30.0, "https://example.com/producto-3")
  .addDetail(4, "Producto 4", 40.0, "https://example.com/producto-4");

pagadito
  .execTrans()
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
