## Store products ##

So the first thing for our store is to have products. In this demonstration we'll be storing our products in a Typescript file. Create a new file in your ``app`` folder named ``product.ts``. In here we will export a class named product. Each product will have an id, name, category and an optional description.

```Typescript
export class Product {
    id:number;
    name:string;
    category:string;
    description?:string;
    
}
```