function getData() {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let contact = document.getElementById("contact").value;

    let data = {
        name: name,
        email: email,
        contact: contact
    };

    console.log(data);
}