
var contacts = [
    {name: "John Doe", phone: "555-1234", email: "john@example.com"},
    {name: "Jane Smith", phone: "555-9876", email: "jane@example.com"},
    {name: "Eve Green", phone: "555-1357", email: "eve@example.com"},
    {name: "Jack Black", phone: "555-4321", email: "jack@example.com"}
];

document.getElementById("liste").innerHTML = createList(contacts);
document.getElementById("header").getElementsByTagName("input")[0].addEventListener("input", searchFunction);
document.getElementById("sort").addEventListener("change", sortContacts);
document.getElementById("sortOrder").addEventListener("change", sortContacts);
document.getElementById("name").addEventListener("input", addContact);
document.getElementById("phone").addEventListener("input", addContact);
document.getElementById("email").addEventListener("input", addContact);

function searchFunction(){
    var input, filter, ul, li, a, i, txtValue;
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
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    contacts.push({name: name, phone: phone, email: email});
    document.getElementById("liste").innerHTML = createList(contacts);
}
function deleteContact(index){
    contacts.splice(index, 1);
    document.getElementById("liste").innerHTML = createList(contacts);
}
function updateContact(index) {
    var name = prompt("Enter the updated name:");
    var phone = prompt("Enter the updated phone number:");
    var email = prompt("Enter the updated email:");
    contacts[index].name = name;
    contacts[index].phone = phone;
    contacts[index].email = email;
    document.getElementById("liste").innerHTML = createList(contacts);
    }
    