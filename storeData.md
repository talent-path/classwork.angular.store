## Store Products ##

So the first thing for our store is to have products. In this demonstration we'll be storing our products in a Typescript file. Create a new file in your ``app`` folder named ``product.ts``. In here we will export a class named product. Each product will have an id, name, category and an optional description.

```Typescript
export class Product {
    id:number;
    name:string;
    price:number;
    category:string;
    description?:string;
    
}
```

In addition, we will  export an array of products to be used within our application

```Typescript
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
```

Now that we've made some test data to develop with, we can start displaying our products in our store.

[previous: getting started](./gettingStarted.md) || [next: first component](./firstComponent.md)