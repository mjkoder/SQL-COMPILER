// Dummy data represnting SQL queries and their results set

export const queriesData = [
    {
        id: 1,
        query: "SELECT * FROM Users;",
        result: [
            {
                id: 1,
                name: "Rohit",
                email:"rohit156@gmail.com"
            },
            {
                id: 2,
                name: "Priyanka",
                email: "priyanka99@gmail.com"
            }
        ]
    },
    {
        id: 2,
        query: "SELECT * FROM Orders;",
        result:[
            {
                id: 101,
                product:"Laptop",
                price: 80000
            },
            {
                id: 105,
                product:"Smartphone",
                price: 15000
            }
        ]
    },
    {
        id: 3,
        query: "SELECT * FROM products;",
        result:[
            {
                id: 301,
                name: "Mouse",
                price: 1500
            },
            {
                id: 307,
                name: "Monitor",
                price: 10000
            }
        ]
    }
]