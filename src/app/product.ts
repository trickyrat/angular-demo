import { Sku } from "./sku";

export interface Product {
    id: number,
    name: string,
    description: string,
    price: number,
    skus: Sku[]
}


export const products: Product[] = [
    {
        id: 1,
        name: "Phone 14",
        price: 699,
        description: "The new iPhone with multiple colors",
        skus: [
        ]
    },
    {
        id: 2,
        name: "Phone 14 Plus",
        price: 899,
        description: "The new iPhone with multiple colors",
        skus: [
        ]
    },
    {
        id: 3,
        name: "Phone 14 Pro",
        price: 1099,
        description: "The new iPhone with multiple colors",
        skus: [
        ]
    },
    {
        id: 4,
        name: "Phone 14 Pro Max",
        price: 1399,
        description: "The new iPhone with multiple colors",
        skus: [
        ]
    }
];