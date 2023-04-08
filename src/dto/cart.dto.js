export default class CartDTO {
    constructor({_id, products, address, userId}){
        this.id = _id;
        this.userId = userId;
        this.address = address;
        this.products = products; 
    }
}