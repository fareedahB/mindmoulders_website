(function(){
    emailjs.init("8nL9XFC1vJm_VrXpv");
})();

document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  // Collect form data
  const serviceID = "service_99ulbtd";
  const templateID = "template_vnfdsxp";

  emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        // Show success message
        alert('Message sent successfully!');
        document.getElementById('successMessage').style.display = 'block';

        // Optionally, clear the form
        document.getElementById('contactForm').reset();
      }, (error) => {
        // Handle error and show failure message
        alert('Failed to send the message. Error: ' + JSON.stringify(error));
        document.getElementById('errorMessage').style.display = 'block';
    });
});