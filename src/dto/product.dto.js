export default class ProductsDTO {
    constructor({_id, name, price, thumbnail, description, category, stock, quant}){
        this.id = _id;
        this.name = name;
        this.price = price;
        this.thumbnail = thumbnail;
        this.description = description;
        this.category = category;
        this.stock = stock;
        this.quant = quant
    }
}
