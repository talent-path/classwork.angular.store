export class Product {
    id:number;
    name:string;
    price:number;
    category:string;
    description?:string;
    
}

export const productList :Product[] = [
    {
        id:1,
        name:"Pencil",
        price:1.50,
        category:"Office Supplies",
        description:"graphite surrounded by wood"
    },
    {
        id:2,
        name:"Mechanical Pencil",
        price:2.00,
        category:"Office Supplies",
        description:"graphite surrounded by plastic"
    },
    {
        id:3,
        name:"Pen",
        price:2.00,
        category:"Office Supplies",
        description:"plastic surrounding ink"
    },
    {
        id:4,
        name:"TalentPath Studio",
        price:100.00,
        category:"Software",
        description:"The best code editor"
    },
    {
        id:5,
        name:"Compass",
        price:95.00,
        category:"Software",
        description:"The best learning management software not on the market!"
    }
];