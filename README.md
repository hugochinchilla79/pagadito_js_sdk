This pagadito SDK allows to developers to integrate Pagadito to Websites and Apps.

But first...(If you are willing to make tests over the sandbox environment)

**You have to register your account at** [Sandbox Pagadito](https://sandbox.pagadito.com)

Here, in the integration parameters you will find **uid and wsk**

When you are good to go with your integration, you can register your merchant at [Pagadito](https://www.pagadito.com) (You have to certificate your integration with our engineer team)

To work with Pagadito:

**INSTALLATION**

```
npm install --save pagadito-sdk
```

**USAGE**

```

const Pagadito = require("pagadito-sdk");

let uid = "your-uid";
let wsk = "your-wsk";

//The third parameter should change when you run this on production environment
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



```

You should see a response like this

```
{
  code: 'PG1002',
  data: {
    url: 'https://sandbox.pagadito.com/comercios/index.php?mod=login&token=fda251a24e6a661901a46e18cc6f9cb6&idca=1423',
    token: 'fda251a24e6a661901a46e18cc6f9cb6'
  },
  message: 'Transaction register successful.'
}
```

Now you can redirect to our payment screen and we take it from there
