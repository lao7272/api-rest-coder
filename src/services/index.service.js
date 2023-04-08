export default class ServiceFactory {
    constructor (type) {
        this.type = type;
        this.ProductService = null;
        this.CartService = null;
        this.UserService = null;
        this.OrderService = null;
        this.ChatService = null;

    }

    async getProductService(){
        if (this.ProductService) return this.ProductService;

        const { default: Product } = await import('./products.service.js');
        this.ProductService = new Product();
        return this.ProductService;
    } 
    async getCartService(){
        if (this.CartService) return this.CartService;

        const { default: Cart } = await import('./cart.service.js');
        this.CartService = new Cart();
        return this.CartService;
    } 
    async getUserService(){
        if (this.UserService) return this.UserService;

        const { default: User } = await import('./user.service.js');
        this.UserService = new User();
        return this.UserService;
    } 

    async getOrderService(){
        if (this.OrderService) return this.OrderService;

        const { default: Order } = await import('./order.service.js');
        this.OrderService = new Order();
        return this.OrderService;
    } 

    async getChatService(){
        if (this.ChatService) return this.ChatService;

        const { default: Chat } = await import('./chat.service.js');
        this.ChatService = new Chat();
        return this.ChatService;
    } 

    async getServices(){
        return {
            ProductService: await this.getProductService(),
            CartService: await this.getCartService(),
            UserService: await this.getUserService(),
            OrderService: await this.getOrderService(),
            ChatService: await this.getCartService()
        }
    }
}