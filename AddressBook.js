 constructor (...parameters) {
        this.firstName = parameters[0];
        this.lastName = parameters[1];
        this.address = parameters[2];
        this.city = parameters[3];
        this.state = parameters[4];
        this.zipCode = parameters[5];
        this.phoneNumber = parameters[6];
        this.email = parameters[7];
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(firstName) {
        let firstNameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
        if(firstNameRegex.test(firstName)) {
            this._firstName = firstName;
        } else {
            throw "First Name : '" + firstName + "' is Invalid!"
        }
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(lastName) {
        let lastNameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
        if(lastNameRegex.test(lastName)){
            this._lastName = lastName;
        } else {
            throw "Last Name : '" + lastName + "' is Invalid!"
        }
    }

    get address() {
        return this._address;
    }

    set address(address) {
        let addressRegex = RegExp("[A-Za-z0-9- ]{4,}");
        if(addressRegex.test(address)){
            this._address = address;
        } else {
            throw "Address : '" + address + "' is Invalid!"
        }
    }

    get city() {
        return this._city;
    }

    set city(city) {
        let cityregex = RegExp("[A-Za-z ]{4,}");
        if(cityregex.test(city)){
            this._city = city;
        } else {
            throw "City : '" + city + "' is Invalid!"
        }
    }

    get state() {
        return this._state;
    }

    set state(state) {
        let stateRegex = RegExp("[A-Za-z ]{4,}");
        if (stateRegex.test(state)) {
            this._state = state;
        }
        else {
            throw "State : " + state + " is Invalid!";
        }
    }

    get zipCode() {
        return this._zipCode;
    }

    set zipCode(zipCode) {
        let zipCodeRegex = RegExp("^[1-9]{1}[0-9]{2}[ ]?[0-9]{3}$");
        if (zipCodeRegex.test(zipCode)) {
            this._zipCode = zipCode;
        }
        else {
            throw "Zip : " + zip + " is Invalid!";
        }
    }

    get phoneNumber() {
        return this._phoneNumber;
    }

    set phoneNumber(phoneNumber) {
        const phoneNumberRegex = RegExp("^[1-9]{1}[0-9]{9}$");
        if (phoneNumberRegex.test(phoneNumber)) {
            this._phoneNumber = phoneNumber;
        }
        else {
            throw "Phone Number : " + phoneNumber + " is Invalid!";
        }
    }

    get email() {
        return this._email;
    }

    set email(email) {
        const emailRegex = RegExp("^[A-Z a-z 0-9]+([._*+][0-9 a-z A-Z]+)*@[0-9 a-z A-Z]*.[a-z A-Z]{2,3}([.][ a-z A-Z]{2})*$");
        if (emailRegex.test(email)) {
            this._email = email;
        }
        else {
            throw "Email : " + email + " is Invalid!";
        }
    }
        toString()
        {
                return "firstName="+this.firstName+",lastName="+this.lastName+",address="+this.address+",city="+this.city+",state="+this.state+",zip="+this.zip+",phoneNumber="+this.phoneNumber+",email="+this.email;
        }
}

let addressBook = new AddressBook("Ankita", "Kadam","Ghatkopar","Mumabi", "Maharashtra",400075,9678945934, "ankitakadam@gmail.com");

//Printing the added contact to console
console.log(addressBook.toString());
