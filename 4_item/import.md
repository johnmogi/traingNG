# trying to solve the child to parent import issue...

1. build structure:
ng g c items + item
items: <app-item>

2. add item interface:
item.ts:
interface Item{
    id : Number,
    name: String,
    price: Number
}

3. template it:
export interface ITEM{
    id : Number,
    name: String,
    price: Number
}
