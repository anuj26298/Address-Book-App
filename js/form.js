window.addEventListener('DOMContentLoaded', (event) => {
    const name = document.querySelector("#name");
    const textError = document.querySelector(".text-error");
    name.addEventListener('input', function () {
        try {
            new Person().fullName = name.value;
            textError.textContent = "";
        } catch (e) {
            textError.textContent = e;
        }
    });

    const mobileNumber = document.querySelector("#mobile");
    const mobileError = document.querySelector(".mobile-error");
    mobileNumber.addEventListener('input', function () {
        try {
            new Person().mobileNumber = mobileNumber.value;
            mobileError.textContent = "";
        } catch (e) {
            mobileError.textContent = e;
        }
    })
});

const save = () => {
    try {
        let addressBookData = createAddressBook();
        createAndUpdateStorage(addressBookData);
    } catch (e) {
        return;
    }
}

const createAddressBook = () => {
    let addressBookData = new Person();
    addressBookData.id = getNewId();
    addressBookData.fullName = getInputValueById("#name");
    addressBookData.mobileNumber = getInputValueById("#moblie");
    addressBookData.address = getInputValueById("#address");
    addressBookData.city = getInputValueById("#city");
    addressBookData.state = getInputValueById("#state");
    addressBookData.zipCode = getInputValueById("#zipcode");
    return addressBookData;
}

const getNewId = () =>{
    let personID = localStorage.getItem("PersonID");
    personID = !personID ? 1 : (parseInt(personID) + 1).toString();
    localStorage.setItem("PersonID",personID);
    return personID;
}

const resetForm = () =>{
    setTextValue('#name','');
    setTextValue('#mobile','');
    setTextValue('#address','');
    setTextValue('#city','Select City');
    setTextValue('#state','Select State');
    setTextValue('#zipcode','Enter ZipCode');
}
const getInputValueById = (id) => {
    let value = document.querySelector(id).value
    return value;
}

function createAndUpdateStorage(addressBookData) {
    let addressBookList = JSON.parse(localStorage.getItem("AddressBookList"));
    if (addressBookList != undefined) {
        addressBookList.push(addressBookData);
    } else {
        addressBookList = [addressBookData];
    }
    alert(addressBookData.toString());
    localStorage.setItem("AddressBookList", JSON.stringify(addressBookList));
}

const setTextValue = (id, value) => {
    const element = document.querySelector(id);
    element.value = value;
}