let contacts = [
    {name: "John Doe", phone: "555-1234", email: "john@example.com"},
    {name: "Jane Smith", phone: "555-9876", email: "jane@example.com"},
    {name: "Eve Green", phone: "555-1357", email: "eve@example.com"},
    {name: "Jack Black", phone: "555-4321", email: "jack@example.com"}
];

document.getElementById("contacts").innerHTML = createList(contacts);
document.getElementById("liste").innerHTML.style.display = "felx"
document.getElementById("header").getElementsByTagName("input")[0].addEventListener("input", searchFunction);
document.getElementById("name").addEventListener("input", addContact);
document.getElementById("phone").addEventListener("input", addContact);
document.getElementById("email").addEventListener("input", addContact);

function searchFunction(){
    let input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("header").getElementsByTagName("input")[0];
    filter = input.value.toUpperCase();
    ul = document.getElementById("liste");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("h3")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
        } else {
        li[i].style.display = "none";
        }
    }
}


// Create list of contact elements from the given array of objects
function createList(arr){
    let list = "";
    for(let i = 0; i < arr.length; i++){
        list += "<li><h3>" + arr[i].name + "</h3><p>" + arr[i].phone + "</p><p>" + arr[i].email + "</p></li>";
    }
    
    return list;
}

function searchBar(){
    let input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("header").getElementsByTagName("input")[0];
    filter = input.value.toUpperCase();
    ul = document.getElementById("liste");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("h3")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
        } else {
        li[i].style.display = "none";
        }
    }
}

function addContact(){
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    if (!isInputError(name,phone, email)) {
        contacts.push(new Entry(name, phone, email));
        // reset field values and hide add panel
        document.getElementById("name").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("email").value = "";
        hide("inputs");
        // refresh contact list
        displayEntries();
    }
    contacts.push({name: name, phone: phone, email: email});
    document.getElementById("liste").innerHTML = createList(contacts);
}

/*
 * Display all entries according to the set sorting criteria
 */
function displayEntries() {
    let contactsDiv = document.getElementById("contacts");        
    // i) clear the list by settin innerHTML on the list empty
    contactsDiv.innerHTML = "";    
    // ii) (re-)add all entries
    let displayContacts = searchEntries()
    for (let i = 0; i < displayContacts.length; i++) {
        let entryDiv = createHTML(displayContacts[i]);
        contactsDiv.appendChild(entryDiv);
    }
    // reapply display settings
    refreshAppearance();
}

/*
 * Check if telephone number if valid
 */
function isValidTel(phone) {
	// check for allowed characters using a regular expression
	let re = /^[0-9()+\-\s]*$/
	return re.test(phone);
}

/*
 * Check if email address if valid
 */
function isValidEmail(email) {
	// we use a regular expression
	// see http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
	let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
function hide(id) {
    let element = document.getElementById(id);
    element.style.display = "none";
}
/*
 * Check input fields
 * (Function returns true if there is an error)
 */
function isInputError(name, phone, email) {
    if (name.length == 0) {
        alert("Empty name!");
    }
    // check for empty fields
    else if (phone.length == 0 && email.length == 0) {
        alert("Provide tel or email!");
    }
    // check for valid tel no
    else if (phone.length > 0 && !isValidTel(tel)) {
        alert("Invalid telephone number!");
    }
    // check for valid email
    else if (email.length > 0 && !isValidEmail(email)) {
        alert("Invalid email address!");
    }
    // no error
    else {    
        return false;
    }
    return true;
}
































/*
function sortContacts(){
    let input = document.getElementById("sort");
    if(input.value == "Name"){
        contacts.sort(function(a, b){
            let nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
            if (nameA < nameB) //sort string ascending
                return -1 
            if (nameA > nameB)
                return 1
            return 0 //default return value (no sorting)
        });
    }else if(input.value == "Phone"){
        contacts.sort(function(a, b){
            let nameA=a.phone.toLowerCase(), nameB=b.phone.toLowerCase()
            if (nameA < nameB) //sort string ascending
                return -1 
            if (nameA > nameB)
                return 1
            return 0 //default return value (no sorting)
        });
    }else{
        contacts.sort(function(a, b){
            let nameA=a.email.toLowerCase(), nameB=b.email.toLowerCase()
            if (nameA < nameB) //sort string ascending
                return -1 
            if (nameA > nameB)
                return 1
            return 0 //default return value (no sorting)
        });
    }
    if(document.getElementById("sortOrder").value == "Descending"){
        contacts.reverse();
    }
    document.getElementById("liste").innerHTML = createList(contacts);
}

*/
/*
function deleteContact(index){
    contacts.splice(index, 1);
    document.getElementById("liste").innerHTML = createList(contacts);
}
function updateContact(index) {
let name = prompt("Enter the updated name:");
let phone = prompt("Enter the updated phone number:");
let email = prompt("Enter the updated email:");
contacts[index].name = name;
contacts[index].phone = phone;
contacts[index].email = email;
document.getElementById("liste").innerHTML = createList(contacts);
}

*/


/*
function searchFunction(){
let input, filter, ul, li, a, i, txtValue;
input = document.getElementById("header").getElementsByTagName("input")[0];
filter = input.value.toUpperCase();
ul = document.getElementById("liste");
li = ul.getElementsByTagName("li");
for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("h3")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
    li[i].style.display = "";
    } else {
    li[i].style.display = "none";
    }
}
}


// Create list of contact elements from the given array of objects
function createList(arr){
let list = "";
for(let i = 0; i < arr.length; i++){
    list += "<li><h3>" + arr[i].name + "</h3><p>" + arr[i].phone + "</p><p>" + arr[i].email + "</p></li>";
}
return list;
}

function addContact(){
let name = document.getElementById("name").value;
let phone = document.getElementById("phone").value;
let email = document.getElementById("email").value;
contacts.push({name: name, phone: phone, email: email});
document.getElementById("liste").innerHTML = createList(contacts);
// Reset form after adding new item
document.getElementById("inputs").reset();
// Sort the updated list by alphabetical order
sortContacts();
}
function sortContacts() {
// sorting criteria
let sorting = document.getElementById("sort").value;

// we provide a custom comparative function for sorting the contacts array
contacts.sort(function(a,b) {
if (sorting == "Name") {
return a.name > b.name;
}
if (sorting == "Phone") {
return a.tel > b.tel;
}
if (sorting == "Email") {
return a.email > b.email;
}
});    
*/