document.getElementById("contacts").innerHTML = createList(contacts);
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
function show(){
    document.getElementById("input").style.display = "block";
}
function refreshAppearance() {
    let nameDivs = document.getElementsByClassName("contact");
    for (let i = 0; i < nameDivs.length; i++) {
        nameDivs[i].style.fontFamily = font;
        nameDivs[i].style.fontSize = fontsize;
        nameDivs[i].style.background = color;
    }
}

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
function sortContacts() {
    // sorting criteria
    let sorting = document.getElementById("sort").value;
    
    // we provide a custom comparative function for sorting the contacts array
    contacts.sort(function(a,b) {
    	if (sorting == "name") {
    		return a.name > b.name;
    	}
    	if (sorting == "tel") {
    		return a.tel > b.tel;
    	}
    	if (sorting == "email") {
    		return a.email > b.email;
    	}
    });    
}
