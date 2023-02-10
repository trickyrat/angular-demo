import { Sku } from "./sku";

export interface Product {
    id: number,
    name: string,
    description: string,
    price: number,
    imgurl: string,
    skus: Sku[]
}


export const PRODUCTS: Product[] = [
    {
        id: 1,
        name: "Phone 14",
        price: 699,
        description: "The new iPhone with multiple colors.\r\nOur longest battery life ever.\r\nEmergency SOS via satellite.\r\nEpic Pro-level photos and videos.\r\nWonderfull.",
        imgurl: "../../assets/hero_blue__fkesnsm4u5qy_large.png",
        skus: [
        ]
    },
    {
        id: 2,
        name: "Phone 14 Plus",
        price: 899,
        description: "The new iPhone with multiple colors.\r\nOur longest battery life ever.\r\nEmergency SOS via satellite.\r\nEpic Pro-level photos and videos.\r\nWonderfull.",
        imgurl: "../../assets/hero_blue__fkesnsm4u5qy_large.png",
        skus: [
        ]
    },
    {
        id: 3,
        name: "Phone 14 Pro",
        price: 1099,
        description: "The new iPhone with multiple colors.\r\nOur longest battery life ever.\r\nEmergency SOS via satellite.\r\nEpic Pro-level photos and videos.\r\nWonderfull.",
        imgurl: "../../assets/hero_blue__fkesnsm4u5qy_large.png",
        skus: [
        ]
    },
    {
        id: 4,
        name: "Phone 14 Pro Max",
        price: 1399,
        description: "The new iPhone with multiple colors.\r\nOur longest battery life ever.\r\nEmergency SOS via satellite.\r\nEpic Pro-level photos and videos.\r\nWonderfull.",
        imgurl: "../../assets/hero_blue__fkesnsm4u5qy_large.png",
        skus: [
        ]
    },
    {
        id: 5,
        name: "Phone 14 Pro Max",
        price: 1399,
        description: "The new iPhone with multiple colors.\r\nOur longest battery life ever.\r\nEmergency SOS via satellite.\r\nEpic Pro-level photos and videos.\r\nWonderfull.",
        imgurl: "../../assets/hero_blue__fkesnsm4u5qy_large.png",
        skus: [
        ]
    },
    {
        id: 6,
        name: "Phone 14 Pro Max",
        price: 1399,
        description: "The new iPhone with multiple colors.\r\nOur longest battery life ever.\r\nEmergency SOS via satellite.\r\nEpic Pro-level photos and videos.\r\nWonderfull.",
        imgurl: "../../assets/hero_blue__fkesnsm4u5qy_large.png",
        skus: [
        ]
    }
];