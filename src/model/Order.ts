import {OrderItem} from "./OrderItem.ts";

export class Order{
    id: string;
    customerId: string;
    orderDate: Date;
    orderItems: OrderItem[];
    constructor(id: string, customerId: string, orderDate: Date, orderItems: OrderItem[]){
        this.id = id;
        this.customerId = customerId;
        this.orderDate = orderDate;
        this.orderItems = orderItems;
    }
}