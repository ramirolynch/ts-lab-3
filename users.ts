interface User {
    name:string,
    email:string,
    id: number,
}

class NewUser implements User {
    name:string;
    email:string;
    id: number;
    constructor(name:string,email:string, id:number) {
        this.name = name;
        this.email = email;
        this.id = id;
    }
}

class Coach extends NewUser {

    student:string;
  
    constructor(name:string, email:string,id:number,student:string) {
        super(name, email, id);
        this.student = student
    }


}

let rami = new NewUser('Ramiro', 'ramiro@yahoo.com', 12)
console.log(rami)

let carmen = new Coach('Carmen', 'carmen@yahoo.com', 1, 'Ramiro')

console.log(carmen)