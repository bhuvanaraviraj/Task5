class Person {
    constructor(name, age, gender, qualification, address ) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.qualification = qualification;
        this.address = address;
    }

    displayInfo() {
        console.log(`
        Name: ${this.name}, 
        Age: ${this.age}, 
        Gender: ${this.gender}, 
        Qualification: ${this.qualification}, 
        Address: ${this.address}`);
    }
}

const details = new Person("Bhuvana R", 23, "Female", "B.E-Biomedical Engineering", "Bangalore");
details.displayInfo();
