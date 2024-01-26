// TYPESCRIPT - Objects

// Without predictability:

let product: object = {
    name: "Aníbal",
    city: "João Pessoa",
    age: "30",
};

// With predictability:

type productStore = {
    name: string;
    price: number;
    units: number;
};

let myProduct: productStore = {
    name: "Shoes",
    price: 99.99,
    units: 5,
};