interface User{
    id: number;
    name?: string;
    email?: string;
    age?: number; // ? nghia la optional (khong bat buoc)
}

let user: User = {
    id: 1,
    name: "John Doe",
 
};
console.log(user);
console.log(user.name);

let listUsers: User[] = [
    {
        id: 1,
    },
    {
        id: 2,
        name: "Jane Smith",
    },
];

for(let u of listUsers){
    console.log(u);
}
