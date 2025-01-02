export class OrderItem{
    itemCode: string;
    itemName: string;
    quantity: number;
    total: number;
    constructor(itemCode: string, itemName: string, quantity: number, total: number){
        this.itemCode = itemCode;
        this.itemName = itemName;
        this.quantity = quantity;
        this.total = total;
    }
}