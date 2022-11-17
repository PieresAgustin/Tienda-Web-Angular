import { Brand } from "./brand";

export interface Product {
    id: number;
    name: string;
    type: string;
    waist: string;
    color: string;
    stock: number;
    price: number;
    image: string;
    quantity: number;
    clearance: boolean;
    brand: Brand;
}