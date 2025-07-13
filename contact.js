// Initialize Google Map
function initMap() {
    // Coordinates for Virar, Maharashtra
    var location = { lat: 19.455, lng: 72.808 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: location
    });
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}

// Form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Thank you for your message, ' + name + '! We will get back to you shortly.');
        document.getElementById('contactForm').reset();
    } else {
        alert('Please fill out all required fields.');
    }
});
