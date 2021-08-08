let personList;

window.addEventListener('DOMCOntentLoaded', (event) => {
    personList = getPersonDataFromStorage();
    createInnerHtml();
});

const getPersonDataFromStorage = () => {
    return localStorage.getItem('AddressBookList') ?
        JSON.parse(localStorage.getItem('AddressBookList')) : [];
}

const createInnerHtml = () => {
    if (personList.length == 0) return;
    const headerHtml = "<th>FullName</th><th>Address</th><th>City</th><th>State</th>"
        + "<th>PinCode</th><th>Phone Number</th><th>Actions</th>";
    
    let innerHtml = `${headerHtml}`;
    for(const personData in personList){
        innerHtml = `${innerHtml}
        <tr>
        <td>${personData._name}</td>
        <td>${personData._address}</td>
        <td>${personData._city}</td>
        <td>${personData._state}</td>
        <td>${personData._zipCode}</td>
        <td>${personData._mobile}</td>
        <td>
         <img src="/assests/icons/create-black-18dp.svg" id="1" alt="delete">
         <img src="/assests/icons/delete-black-18dp.svg" id="1" alt="edit">
        </td>
      </tr>
     `;
    }

    document.querySelector('#display').innerHTML = innerHtml
}