// This is the content for js/script.js

document.addEventListener('DOMContentLoaded', function() {
  
  const form = document.getElementById('whatsapp-form');

  form.addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // --- IMPORTANT ---
    // Replace this with your own WhatsApp number in international format.
    // Do NOT include '+' or any spaces. E.g., for +1 (555) 123-4567, use 15551234567.
    const phoneNumber = '15551234567'; 
    
    // Get the values from the form fields
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    // Create the pre-filled message
    // Using \n for a new line to make the message cleaner in WhatsApp
    const fullMessage = `Hello! My name is ${name}.\n\nMy message: ${message}`;

    // Encode the message to be URL-safe
    const encodedMessage = encodeURIComponent(fullMessage);

    // Construct the final WhatsApp URL
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Open the WhatsApp URL in a new browser tab
    window.open(whatsappURL, '_blank');
  });

});