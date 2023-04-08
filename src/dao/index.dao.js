export default class DAOFactory {
    constructor (type) {
        this.type = type;
        this.ProductDAO = null;
        this.CartDAO = null;
        this.UserDAO = null;
        this.OrderDAO = null;
        this.ChatDAO = null;

    }

    async getProductDAO(){
        if (this.ProductDAO) return this.ProductDAO;

        const { default: Product } = await import('./Product.dao.js');
        this.ProductDAO = new Product();
        return this.ProductDAO;
    } 
    async getCartDAO(){
        if (this.CartDAO) return this.CartDAO;

        const { default: Cart } = await import('./Cart.dao.js');
        this.CartDAO = new Cart();
        return this.CartDAO;
    } 
    async getUserDAO(){
        if (this.UserDAO) return this.UserDAO;

        const { default: User } = await import('./User.dao.js');
        this.UserDAO = new User();
        return this.UserDAO;
    } 

    async getOrderDAO(){
        if (this.OrderDAO) return this.OrderDAO;

        const { default: Order } = await import('./Order.dao.js');
        this.OrderDAO = new Order();
        return this.OrderDAO;
    } 

    async getChatDAO(){
        if (this.ChatDAO) return this.ChatDAO;

        const { default: Chat } = await import('./Chat.dao.js');
        this.ChatDAO = new Chat();
        return this.ChatDAO;
    } 

    async getDAOs(){
        return {
            ProductDAO: await this.getProductDAO(),
            CartDAO: await this.getCartDAO(),
            UserDAO: await this.getUserDAO(),
            OrderDAO: await this.getOrderDAO(),
            ChatDAO: await this.getChatDAO()
        }
    }
}