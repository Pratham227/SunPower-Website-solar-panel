document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("commercialForm");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        // Form data collection logic
        const name = document.getElementById("name").value;
        const companyName = document.getElementById("companyName").value;
        const whatsAppNumber = document.getElementById("whatsAppNumber").value;
        const city = document.getElementById("city").value;
        const pinCode = document.getElementById("pinCode").value;
        const monthlyBill = document.getElementById("monthlyBill").value;

        // Display form data (you can send this data to your server)
        console.log({
            name,
            companyName,
            whatsAppNumber,
            city,
            pinCode,
            monthlyBill
        });

        alert("Form submitted successfully!");
    });
});
