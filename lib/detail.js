class Detail {
    constructor(quantity, description, price, url_product) {
        this.quantity = quantity;
        this.description = description;
        this.price = price;
        this.url_product = url_product;
    }

    getObject = () => {
        return {
            quantity: this.quantity,
            description: this.description,
            price: this.price,
            url_product: this.url_product,
        };
    }
}

module.exports = Detail;