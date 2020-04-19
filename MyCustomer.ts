class MyCustomer{
    private _firstName:string;
    private _lastName:string;

    constructor(firstName:string,lastName:string){
        this._firstName = firstName;
        this._lastName = lastName;
    }
    
    getfirstName():string{
        return this._firstName;
    }

    setfirstName(firstName:string){
        this._firstName = firstName;
    }
}

let myCustomerObj = new MyCustomer('Captain','America');
console.log(myCustomerObj);

//setting & getting Customer values using setters and getters.
myCustomerObj.setfirstName('hulk');
console.log(myCustomerObj.getfirstName());