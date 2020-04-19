class Customer {
    private firstName:String;
    private lastName:String;

    constructor(firstName:String,lastName:String){
        this.firstName = firstName;
        this.lastName = lastName;
    }

}

let customer = new Customer('Tony','Stark');
console.log(customer);

