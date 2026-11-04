
/* Membership Plan Selection */

function choosePlan(planName) {

    document.getElementById("plan").value = planName;

    document.getElementById("contact").scrollIntoView({
        behavior: "smooth"
    });
}


/* Join Form */

const form = document.getElementById("joinForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const plan = document.getElementById("plan").value;

    if (name === "" || email === "") {
        alert("Please fill all required fields!");
        return;
    }

    document.getElementById("response").innerHTML =
        "Thank you " + name +
        "! Your inquiry for the " +
        plan + " plan has been received.";

    alert("Welcome to FitForge Gym!");

    form.reset();

});
