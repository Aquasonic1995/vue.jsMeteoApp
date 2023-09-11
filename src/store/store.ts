import { defineStore } from 'pinia'

export const productsStore = defineStore('products', {
state:():{products: Array<any>, likes:number;
} => ({ products:[],
    likes:20
})
})