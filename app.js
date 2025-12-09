let url = "https://mdhbdrqhokhkpwvajvik.supabase.co/rest/v1/leads";
let apikey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1kaGJkcnFob2toa3B3dmFqdmlrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ3OTQyMTcsImV4cCI6MjA4MDM3MDIxN30.5sjiMRuW3e_F17YtaC38XIVXGszjpCEHGsajCiiAzDI";
let urlProducts = "https://mdhbdrqhokhkpwvajvik.supabase.co/rest/v1/products";

async function createLead() {


    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let contact = document.getElementById("contact").value;

    let lead = {

        "name": name,
        "email": email,
        "contact": contact
    };

    let response = await fetch(url, {

        method: "POST",
        headers: {
            "apikey": apikey,
            "Content-Type": "application/json",
        },

        body: JSON.stringify(lead)

    });

    if (response.ok) {
        document.getElementById("signupForm").reset();
    }
}

async function getProducts() {

    let response = await fetch(urlProducts, {
        method: "GET",
        headers: {
            "apikey": apikey,
            "Content-Type": "application/json"
        }
    });

    let data = await response.json();
    console.log(data);

    let productsList = document.getElementById("productsList");

    for (let i = 0; i < data.length; i++) {

        productsList.innerHTML += `

        <div class="col-md-3">
            <div class="product-card">

                <h3>${data[i].name}</h3>
                <p class="price"><strong>$${data[i].price}</strong></p>
                <p>${data[i].description}</p>
                <img src="${data[i].image_url}" alt="${data[i].name}" class="product-image">

            </div>
        </div>
   ` ;
    }
}