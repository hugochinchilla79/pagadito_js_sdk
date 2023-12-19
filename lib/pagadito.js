const axios = require("axios");
const Detail = require("./detail");

class Pagadito {
  constructor(uid, wsk, sandboxMode = false) {
    this.uid = uid;
    this.wsk = wsk;
    this.baseUrl = "https://connect.pagadito.com/api/v2/";
    this.baseSandboxUrl = "https://sandbox-connect.pagadito.com/api/v2/";
    this.execTransUri = "exec-trans";
    this.getStatusUri = "get-status";
    this.sandboxMode = sandboxMode;
    this.details = [];
    this.amount = 0.0;
    this.ern = "";
  }

  addDetail(quantity, description, price, url_product) {
    let detail = new Detail(quantity, description, price, url_product);
    this.details.push(detail.getObject());
    return this;
  }

  setAmount(amount) {
    this.amount = amount;
    return this;
  }

  setErn(ern) {
    this.ern = ern;
    return this;
  }

  execTrans = () => {
    let endpoint = this.getEndpoint(this.execTransUri);
    let authHeader = this.getAuthHeader();
    let data = this.getExecTransData();
    return new Promise((resolve, reject) => {
      axios
        .post(endpoint, data, authHeader)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  getStatus = (token) => {
    let endpoint = this.getEndpoint(this.getStatusUri);
    let authHeader = this.getAuthHeader();
    let data = {
      token: token,
    };
    return new Promise((resolve, reject) => {
      axios
        .post(endpoint, data, authHeader)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  getExecTransData = () => {
    /**calculate amount with details array*/
    let amount = 0.0;
    this.details.forEach((detail) => {
      amount += detail.price * detail.quantity;
    });

    let data = {
      details: this.details,
      amount: amount,
      ern: this.ern,
    };

    return data;
  };

  getAuthHeader = () => {
    let uid = this.uid;
    let wsk = this.wsk;

    let authHeader = {
      auth: {
        username: uid,
        password: wsk,
      },
      headers: {
        "Content-Type": "application/json",
      },
    };

    return authHeader;
  };

  getEndpoint = (uri) => {
    let baseUrl = this.sandboxMode ? this.baseSandboxUrl : this.baseUrl;
    let endpoint = `${baseUrl}${uri}`;
    return endpoint;
  };
}

module.exports = Pagadito;
