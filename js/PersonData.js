class Person{
    get id(){
        return this._id;
    }
    set id(id){
        this._id = id;
    }

    get fullName(){
        return this._fullName;
    }
    set fullName(fullName){
        let nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
        if(nameRegex.test(fullName)){
            this._fullName = fullName;
        }else{
            throw 'Name is Incorrect!';
        }   
    }

    get address(){
        return this._address;
    }
    set address(address){
        this._address = address;
    }
    get mobileNumber(){
        return this._mobileNumber;
    }
    set mobileNumber(mobileNumber){
        let phnRegex = RegExp('\\d{2}\\d{10}');
        if(phnRegex.test(mobileNumber)){
            this._mobileNumber = mobileNumber;
        }else{
            throw 'MObile Number is Incorrect';
        }
    }
    get city(){
        return this._city;
    }
    set city(city){
        this._city = city;
    }

    get state(){
        return this._state;
    }
    set state(state){
        this._state = state;
    }

    get zipCode(){
        return this._zipCode;
    }
    set zipCode(zipCode){
        this._zipCode = zipCode;
    }

    toString(){
        return "id=" + this.id +", Full Name='" + this.fullName + " , Address='" + this.address + " , City='"
        + this.city + " , State='" + this.state + "Mobile Number='" + this.mobileNumber+" , ZipCode='" + this.ZipCode;
    }
}