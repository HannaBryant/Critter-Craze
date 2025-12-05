let url = "https://mdhbdrqhokhkpwvajvik.supabase.co/rest/v1/leads";
let apikey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1kaGJkcnFob2toa3B3dmFqdmlrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ3OTQyMTcsImV4cCI6MjA4MDM3MDIxN30.5sjiMRuW3e_F17YtaC38XIVXGszjpCEHGsajCiiAzDI";

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
