export class Order {
    private productsItems:Number[] = [];
    private productsPrices:Number[] = [];
    private productsQuantity:Number[] = [];
    private myDate;
    private realDate:String;
    constructor(
        public orderNotes:String,
        public orderUserID:Number,
    ){}
    public setProductsItems(temp:Number){
        this.productsItems.push(temp)
    }
    public setProductsPrices(temp:Number){
        this.productsPrices.push(temp)
    }
    public setProductsQuantity(temp:Number){
        this.productsQuantity.push(temp)
    }
    public setMyDate(){
        this.myDate = new Date();
        this.realDate = this.myDate.getFullYear() + "/" + this.myDate.getMonth() + "/" + this.myDate.getDay();
    }
    public getProductsItems(temp:String){
        return this.productsItems;
    }
    public getProductsPrices(temp:Number){
        this.productsPrices;
    }
    public getProductsQuantity(temp:Number){
        this.productsQuantity;
    }
    public getMyDate(){
        return this.realDate;
    }
}
